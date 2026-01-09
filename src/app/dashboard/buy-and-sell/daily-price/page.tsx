"use client";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { BadgeQuestionMark } from "lucide-react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { FaExclamation } from "react-icons/fa6";
import { z } from "zod";
import { currencyEnum } from "@/utils/buy-and-sell-utils";
import { Button } from "@/components/ui/button";

const silverData = [
  {
    name: "Zurich",
    total: "0.004kg",
    valuation: "7.3",
    sellAtBestPrice: ["Dollars", "Pounds", "Euros"],
  },
];

const currencyData = [
  {
    name: "Silver",
    total: "$1.00",
    valuation: "$1.00",
    buyAtBestPrice: [],
  },
  {
    name: "Gold",
    total: "$1.00",
    valuation: "$1.00",
    buyAtBestPrice: [],
  },
  {
    name: "Platinum",
    total: "$1.00",
    valuation: "$1.00",
    buyAtBestPrice: [],
  },
];

const formSchema = z.object({
  option: z.enum(["buy", "sell"], { message: "Field Cant be empty" }),
  typeOfGold: z.string({ message: `Field Cant be empty` }),
  amount: z
    .number({ message: "Amount is required" })
    .min(1, "Amount must be at least 1"),
  currency: z.string({ message: `Field Cant be empty` }),
});
const Page = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      option: "buy",
      typeOfGold: "",
      amount: 0,
      currency: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <div className="py-8">
      {/* Account Info */}
      <section className=" pt-2  rounded-lg bg-card">
        <div className="flex justify-between text-xl font-semibold py-3 px-4">
          <h1 className="">Daily Price</h1>
          <span className="text-2xl">
            <BadgeQuestionMark />
          </span>
        </div>
        <div className=" py-2  rounded-t-lg px-4 text-sm  bg-accent">
          Buy/sell at the London Price
        </div>
      </section>

      {/* container */}
      {/* <DashboardContainer> */}

      <div className="flex lg:flex-row flex-col lg:gap-x-4 lg:gap-y-0 gap-y-6">
        <article className="lg:w-[70%] mt-6">
          <div className="flex p-4 bg-blue-100 rounded-lg  text-black">
            <div className="w-[8%]">
              <span className="bg-blue-700  h-9 w-9 text-white flex items-center justify-center rounded-full">
                <FaExclamation size={20} />
              </span>
            </div>
            <p className="w-[92%] ">
              Due to market conditions, we can't currently accept Daily Price
              orders for some metals in some locations. Trading continues 24/7
              on the live Order Board. Please call our Trading Team for deals of
              $2m+.
            </p>
          </div>
          {/*  */}
          <div className="flex p-4 bg-red-100 rounded-lg mt-6 items-center text-black">
            <div className="w-[8%]">
              <span className="bg-red-700  h-9 w-9 text-white flex items-center justify-center rounded-full">
                <FaExclamation size={20} />
              </span>
            </div>
            <p className="w-[92%] ">
              You do not have sufficient cash available in this currency.
            </p>
          </div>

          {/* Form */}
          {/* form  */}
          <section className="my-8">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8"
              >
                {/* option */}
                <FormField
                  control={form.control}
                  name="option"
                  render={({ field }) => (
                    <FormItem className="">
                      <FormLabel>I want to </FormLabel>

                      <div className="w-full">
                        <FormControl>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <SelectTrigger className="w-full">
                              <SelectValue placeholder="currency" />
                            </SelectTrigger>

                            <SelectContent>
                              <SelectItem value="buy">buy</SelectItem>
                              <SelectItem value="sell">sell</SelectItem>
                            </SelectContent>
                          </Select>
                        </FormControl>

                        <FormMessage />
                      </div>
                    </FormItem>
                  )}
                />

                {/* type of gold */}

                {/* type of gold */}
                <FormField
                  control={form.control}
                  name="typeOfGold"
                  render={({ field }) => (
                    <FormItem className="">
                      {/* <FormLabel>Currency</FormLabel> */}

                      <div className="w-full">
                        <FormControl>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <SelectTrigger className="w-full">
                              <SelectValue placeholder="currency" />
                            </SelectTrigger>

                            <SelectContent>
                              <SelectItem value="buy">
                                Gold In Londom
                              </SelectItem>
                              <SelectItem value="sell">
                                Gold In Zurich
                              </SelectItem>
                              <SelectItem value="sell">
                                Silver In Londom
                              </SelectItem>
                            </SelectContent>
                          </Select>
                        </FormControl>

                        <FormMessage />
                      </div>
                    </FormItem>
                  )}
                />

                <FormLabel>I want to spend up to</FormLabel>

                <FormField
                  control={form.control}
                  name="amount"
                  render={({ field }) => (
                    <FormItem className="">
                      {/* <FormLabel>Currency</FormLabel> */}

                      <div className="w-full">
                        <FormControl>
                          <Input
                            type="number"
                            placeholder="Amount"
                            {...field}
                          />
                        </FormControl>

                        <FormMessage />
                      </div>
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="currency"
                  render={({ field }) => (
                    <FormItem className="">
                      {/* <FormLabel>Currency</FormLabel> */}
                      <div className="w-full">
                        <FormControl>
                          <Select>
                            <SelectTrigger className="w-full">
                              <SelectValue placeholder="currency" />
                            </SelectTrigger>
                            <SelectContent>
                              {currencyEnum.map((item) => (
                                <SelectItem key={item} value={item}>
                                  {item}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </FormControl>
                        <FormMessage />
                      </div>
                    </FormItem>
                  )}
                />

                <div>
                  <Button
                    type="button"
                    className="rounded-full w-full bg-yellow-500"
                  >
                    Buy
                  </Button>
                </div>
              </form>
            </Form>
          </section>

          <footer className="dark:bg-gray-600 bg-gray-200 p-4 rounded-b-lg">
            <p>
              We charge 0.5% for buying or selling gold, silver, platinum or
              palladium at the Daily Price. There is an additional 0.3%
              currency-switching fee for Daily Price orders set in British
              Pounds or in Euros.
            </p>
          </footer>
        </article>

        {/* buy sell wizard */}
        <>
          <div className="lg:w-[30%] h-max mt-6 lg:sticky top-6 bg-card rounded-lg">
            {/* <BuySellWizard /> */}
            <h1 className="font-semibold text-3xl py-8 px-4 ">
              Regular Gold Investment Plan
            </h1>

            <article className="border-t-border border-t  py-8 px-4 flex flex-col gap-y-6 text-sm">
              <p>For regular savers wanting to build their own gold reserve.</p>
              <p>Set up a monthly standing order and start your plan.</p>
              <Link href={"#"} className="text-blue-600">
                Find out More
              </Link>
            </article>
          </div>
        </>
      </div>
    </div>
  );
};

export default Page;
