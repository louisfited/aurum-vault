"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { countries } from "@/utils/countries";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { useMutation } from "@tanstack/react-query";
import { Loader2 } from "lucide-react";
import { useModalStore } from "@/store/useModelStore";

export const depositSchema = z
  .object({
    country: z.string().min(1, "Country is required"),

    currency: z.enum(["USD", "NGN", "EUROS"], {
      message: "Please select a currency",
    }),
    amount: z.number().positive("Amount must be greater than 0"),
    method: z.enum(["bank", "crypto"], {
      message: "Select transfer method",
    }),

    bank_name: z.string().optional(),
    account_no: z.string().optional(),

    receipt: z
      .any()
      .refine((file) => file?.length === 1, "Receipt is required")
      .refine(
        (file) =>
          ["image/png", "image/jpeg", "application/pdf"].includes(
            file?.[0]?.type
          ),
        "Only PNG, JPG or PDF allowed"
      ),
  })
  .superRefine((data, ctx) => {
    if (data.method === "bank") {
      if (!data.bank_name?.trim()) {
        ctx.addIssue({
          path: ["bank_name"],
          message: "Bank name is required",
          code: z.ZodIssueCode.custom,
        });
      }

      if (!data.account_no?.trim()) {
        ctx.addIssue({
          path: ["account_no"],
          message: "Account number is required",
          code: z.ZodIssueCode.custom,
        });
      }
    }
  });

export type DepositFormValues = z.infer<typeof depositSchema>;

const postDeposit = async (formData: DepositFormValues) => {
  const res = await fetch("/api/deposit/new-deposit", {
    method: "POST",
    body: JSON.stringify(formData),
  });

  if (!res.ok) {
    return {
      data: null,
      status: res.status,
      message: "An error occurred",
    };
  }

  return { status: res.status, data: res.json() };
};

const DepositForm = () => {
  const router = useRouter();
  const [method, setMethod] = useState<"bank" | "crypto" | null>(null);
  const { openModal } = useModalStore();

  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<DepositFormValues>({
    resolver: zodResolver(depositSchema),
  });

  const mutation = useMutation({
    mutationFn: postDeposit,
    onSuccess: (data) => {
      if (data?.status === 401) {
        router.push("/auth/signin");
      }
      if (data.status == 200) {
        openModal("your deposit request has been successfully sent");
        return;
      } else {
        openModal("something went wrong,please trt again");
      }
    },
    onError: () => {
      alert("An error occurred");
      openModal("An error occurred");
    },
  });

  const onSubmit = (data: DepositFormValues) => {
    mutation.mutate(data);
  };

  const countriesList = useMemo(
    () =>
      countries.map((item) => (
        <SelectItem key={item.code} value={item.code}>
          {item.name}
        </SelectItem>
      )),
    []
  );

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="lg:w-[40%] w-full rounded-lg py-4 px-4 border border-border"
    >
      {/* COUNTRY */}
      <aside>
        <h1>My bank account is in:</h1>
        <Select onValueChange={(val) => setValue("country", val)}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select country" />
          </SelectTrigger>
          <SelectContent>{countriesList}</SelectContent>
        </Select>
        {errors.country && (
          <p className="text-sm text-red-500">{errors.country.message}</p>
        )}
      </aside>

      {/* CURRENCY */}
      <aside className="my-4">
        <h1>I want to send:</h1>
        <Select
          onValueChange={(val) =>
            setValue("currency", val as "USD" | "NGN" | "EUROS")
          }
        >
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select currency" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="USD">USD</SelectItem>
            <SelectItem value="NGN">NGN</SelectItem>
            <SelectItem value="EUROS">EUROS</SelectItem>
          </SelectContent>
        </Select>
        {errors.currency && (
          <p className="text-sm text-red-500">{errors.currency.message}</p>
        )}
      </aside>

      {/* AMOUNT */}
      <aside className="my-4">
        <h1>Amount</h1>
        <Input
          type="number"
          step="0.01"
          placeholder="Enter amount"
          onChange={(e) => setValue("amount", Number(e.target.value))}
          //   {...register("amount")}
        />
        {errors.amount && (
          <p className="text-sm text-red-500">{errors.amount.message}</p>
        )}
      </aside>

      {/* METHOD */}
      <aside className="my-4">
        <h1>Method of transfer</h1>
        <Select
          onValueChange={(val) => {
            setMethod(val as "bank" | "crypto");
            setValue("method", val as "bank" | "crypto");
          }}
        >
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select method" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="bank">Bank Transfer</SelectItem>
            <SelectItem value="crypto">Crypto</SelectItem>
          </SelectContent>
        </Select>
        {errors.method && (
          <p className="text-sm text-red-500">{errors.method.message}</p>
        )}
      </aside>

      {/* BANK DETAILS */}
      {method === "bank" && (
        <>
          <aside className="my-4">
            <h1>Bank Name</h1>
            <Input placeholder="e.g. Access Bank" {...register("bank_name")} />
            {errors.bank_name && (
              <p className="text-sm text-red-500">{errors.bank_name.message}</p>
            )}
          </aside>

          <aside className="my-4">
            <h1>Account Number</h1>
            <Input placeholder="e.g. 0123456789" {...register("account_no")} />
            {errors.account_no && (
              <p className="text-sm text-red-500">
                {errors.account_no.message}
              </p>
            )}
          </aside>
        </>
      )}

      {/* RECEIPT */}
      <aside className="my-4">
        <h1>Attach Receipt of Payment</h1>
        <Input type="file" {...register("receipt")} />
        {errors.receipt && (
          <p className="text-sm text-red-500">
            {errors.receipt.message as string}
          </p>
        )}
      </aside>

      {/* SUBMIT */}
      <div className="flex justify-center">
        <Button type="submit" disabled={mutation.isPending} className="w-4/5">
          {mutation.isPending ? <Loader2 className="animate-spin" /> : "Submit"}
        </Button>
      </div>
    </form>
  );
};

export default DepositForm;
