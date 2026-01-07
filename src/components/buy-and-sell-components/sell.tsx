import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  bullionData,
  currencyEnum,
  durationEnum,
} from "@/utils/buy-and-sell-utils";
import { Button } from "../ui/button";

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  firstName: z.string().min(2, {
    message: "FirstName must be at least 2 characters.",
  }),
  bullion: z.string().min(2, {
    message: "you have not selected a bullion",
  }),
  currency: z.enum(currencyEnum, { message: "field can't be empty" }),
  pricePerKg: z.number().min(1, { message: "value cant be 0" }),
  quantityKg: z.number().min(1, { message: "value cant be 0" }),
  orderValue: z.number().min(1, { message: "value cant be 0" }),
  duration: z.enum(durationEnum, { message: "field can't be empty" }),
});

const Sell = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      firstName: "",
      bullion: "",
      currency: "Dollars",
      pricePerKg: 0,
      quantityKg: 0,
      orderValue: 0,
      duration: "Permanent",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <div className="lg:py-0 py-8">
      <header className="mb-8">
        <h1 className="text-lg font-semibold ">Offer Details</h1>
        <p className="text-sm">Enter Your Order Below</p>
      </header>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          {/* Bullion For Select */}
          <FormField
            control={form.control}
            name="bullion"
            render={({ field }) => (
              <FormItem className="flex justify-between">
                <FormLabel>Bullion</FormLabel>
                <div className="w-2/4">
                  <FormControl>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="bullion" />
                      </SelectTrigger>
                      <SelectContent>
                        {bullionData.map((item) => (
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

          {/*  Currency */}
          <FormField
            control={form.control}
            name="currency"
            render={({ field }) => (
              <FormItem className="flex justify-between">
                <FormLabel>Currency</FormLabel>
                <div className="w-2/4">
                  <FormControl>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
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

          {/* price per kg */}

          <FormField
            control={form.control}
            name="pricePerKg"
            render={({ field }) => (
              <FormItem className="flex justify-between">
                <FormLabel>Price Per kg</FormLabel>
                <div className="w-2/4">
                  <FormControl>
                    <aside className=" relative">
                      <Input
                        type="number"
                        {...field}
                        value={field.value ?? 0}
                      />
                      <div className="absolute top-0 right-0 flex h-full flex-col overflow-hidden">
                        <button
                          onClick={() => {
                            field.onChange((Number(field.value) ?? 0) + 1);
                          }}
                          type="button"
                          className="h-2/4 w-5 rounded-t-md text-background bg-primary focus:outline-2 active:outline-2 font-bold flex items-center justify-center"
                        >
                          +
                        </button>
                        <button
                          onClick={() => {
                            field.onChange((Number(field.value) ?? 0) - 1);
                          }}
                          type="button"
                          className="h-2/4 w-5  bg-primary text-background rounded-b-md focus:outline-2 active:outline-2 font-bold flex items-center justify-center"
                        >
                          -
                        </button>
                      </div>
                    </aside>
                  </FormControl>
                  <FormMessage />
                </div>
              </FormItem>
            )}
          />

          {/* Quantity in Kg */}
          <FormField
            control={form.control}
            name="quantityKg"
            render={({ field }) => (
              <FormItem className="flex justify-between">
                <FormLabel>Quantity (Kg)</FormLabel>
                <div className="w-2/4">
                  <FormControl>
                    <aside className="relative">
                      <Input
                        type="number"
                        {...field}
                        value={
                          field.value !== undefined
                            ? field.value.toFixed(3)
                            : "0.000"
                        }
                      />
                      <div className="absolute top-0 right-0 flex h-full flex-col overflow-hidden">
                        <button
                          onClick={() => {
                            field.onChange((field.value ?? 0) + 0.001);
                          }}
                          type="button"
                          className="h-2/4 w-5 rounded-t-md text-background bg-primary focus:outline-2 active:outline-2 font-bold flex items-center justify-center"
                        >
                          +
                        </button>
                        <button
                          onClick={() => {
                            if ((field.value ?? 0).toFixed(3) == "0.000") {
                              return;
                            }
                            field.onChange((field.value ?? 0) - 0.001);
                          }}
                          type="button"
                          className="h-2/4 w-5  bg-primary text-background rounded-b-md focus:outline-2 active:outline-2 font-bold flex items-center justify-center"
                        >
                          -
                        </button>
                      </div>
                    </aside>
                  </FormControl>
                  <FormDescription className="text-end">
                    Available: 0.000kg
                  </FormDescription>
                  <FormMessage />
                </div>
              </FormItem>
            )}
          />
          {/* Order Value */}
          <FormField
            control={form.control}
            name="orderValue"
            render={({ field }) => (
              <FormItem className="flex justify-between">
                <FormLabel>Order Value</FormLabel>
                <div className="w-2/4">
                  <FormControl>
                    <aside className="relative">
                      <Input
                        type="number"
                        {...field}
                        value={
                          field.value !== undefined
                            ? field.value.toFixed(2)
                            : "0.00"
                        }
                      />
                      <div className="absolute top-0 right-0 flex h-full flex-col overflow-hidden">
                        <button
                          onClick={() => {
                            field.onChange((field.value ?? 0) + 0.01);
                          }}
                          type="button"
                          className="h-2/4 w-5 rounded-t-md text-background bg-primary  focus:outline-2 active:outline-2 font-bold flex items-center justify-center"
                        >
                          +
                        </button>
                        <button
                          onClick={() => {
                            if ((field.value ?? 0).toFixed(2) == "0.00") {
                              return;
                            }
                            field.onChange((field.value ?? 0) - 0.01);
                          }}
                          type="button"
                          className="h-2/4 w-5  bg-primary text-background rounded-b-md focus:outline-2 active:outline-2 font-bold flex items-center justify-center"
                        >
                          -
                        </button>
                      </div>
                    </aside>
                  </FormControl>
                  <FormMessage />
                </div>
              </FormItem>
            )}
          />

          {/* Duration */}
          <FormField
            control={form.control}
            name="duration"
            render={({ field }) => (
              <FormItem className="flex justify-between">
                <FormLabel>Duration</FormLabel>
                <div className="w-2/4">
                  <FormControl>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="currency" />
                      </SelectTrigger>
                      <SelectContent defaultValue={"Permanent"}>
                        {durationEnum.map((item) => (
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
          <div className="flex gap-x-2">
            <Button type="button" className="rounded-full w-2/4 bg-gray-500">
              Reset
            </Button>
            <Button type="button" className="rounded-full w-2/4 bg-green-400">
              Sell/Offer
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default Sell;
