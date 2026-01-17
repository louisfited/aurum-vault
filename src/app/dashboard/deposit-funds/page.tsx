"use client";
import { BadgeQuestionMark, FileQuestionMark } from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { accordionInfos } from "@/utils/deposit-accordion-info";
import { Button } from "@/components/ui/button";

import DepositForm from "./form";
import { useState } from "react";

const Page = () => {
  const [activeCurrency, setActiveCurrency] = useState<string>("USD");

  const bankInfoDisplay = () => {
    return (
      <div className="flex flex-col gap-y-2 dark:bg-slate-900 bg-slate-100 md:px-2">
        {/* Payee */}
        <aside className="flex justify-between  md:flex-row flex-col">
          <span>Payee/beneficiary:</span>
          <span className="font-semibold">Aurum Client AC</span>
        </aside>
        {/* bank */}
        <aside className="flex justify-between  md:flex-row flex-col">
          <span>Bank:</span> <span className="font-semibold">Lloyds Bank</span>
        </aside>
        {/* bank */}
        <aside className="flex justify-between  md:flex-row flex-col">
          <span>Branch address:</span>
          <span className="font-semibold">
            70-71 Cheapside, London, United Kingdom, EC2V 6EN
          </span>
        </aside>
        {/* bank */}
        <aside className="flex justify-between  md:flex-row flex-col">
          <span>Account number:</span>
          <span className="font-semibold">11478192</span>
        </aside>
        {/* IBAN:*/}
        <aside className="flex md:flex-row flex-col  justify-between">
          <span>IBAN:</span>
          <span className="font-semibold">GB26LOYD30000911478192</span>
        </aside>
        {/* IBAN:*/}
        <aside className="flex justify-between  md:flex-row flex-col">
          <span>SWIFT BIC:</span>
          <span className="font-semibold">LOYDGB2L</span>
        </aside>
        {/* IBAN:*/}
        <aside className="flex justify-between  md:flex-row flex-col">
          <span>Payment reference/memo:</span>
          <span className="font-semibold uppercase">James</span>
        </aside>
        <aside className="flex justify-between  md:flex-row flex-col">
          <span>Correspondent bank (if required):</span>
          <span className="font-semibold uppercase text-sm">
            Wells Fargo, New York - ABA #026005092
          </span>
        </aside>
      </div>
    );
  };
  return (
    <div className="">
      {/* Account Info */}
      <section className=" pt-2   rounded-lg bg-card">
        <div className="flex justify-between text-xl font-semibold py-3 px-4">
          <h1 className="">Deposit Funds</h1>
          <span className="text-2xl">
            <BadgeQuestionMark />
          </span>
        </div>
        <div className=" py-2  rounded-t-lg px-4 bg-accent">
          How to send money from your bank account
        </div>
      </section>

      {/* second section */}
      <section className="py-4 flex lg:flex-row flex-col gap-x-4 lg:gap-y-0 gap-y-4 ">
        {/* select your info */}
        <DepositForm />

        {/* full details */}

        <div className="lg:w-[60%] w-full px-4   rounded-lg pb-6">
          <header className=" pt-2  rounded-lg">
            <h1 className="font-semibold text-xl">Manual Bank Transfer</h1>
            <div className="flex justify-between items-center border-b">
              <div className="">Nigeria: to send US dollars</div>
              <span className="text-lg">
                <BadgeQuestionMark />
              </span>
            </div>
            <div className="py-4">
              If you send a payment in your local currency, our bank will
              convert it once it has reached one of our client accounts at their
              standard conversion rates (FX margin capped at 0.5%).
            </div>
          </header>

          {/* account btn */}
          <div className="flex justify-evenly flex-wrap mb-4 gap-y-2">
            {["USD", "NGN", "EUR", "GBP", "All Currency"].map((currency) => (
              <Button
                key={currency}
                variant={activeCurrency === currency ? "default" : "outline"}
                onClick={() => setActiveCurrency(currency)}
                className="px-4 py-2 bg-blue-500 text-white rounded-md mr-2"
              >
                {currency}
              </Button>
            ))}
          </div>
          <aside className=" my-4 md:px-4 rounded-md">
            {/*  */}

            {activeCurrency !== "All Currency" && bankInfoDisplay()}

            {activeCurrency == "All Currency" &&
              accordionInfos.map((item, index) => {
                return (
                  <Accordion type="single" key={index + 1} collapsible>
                    <AccordionItem value="item-1">
                      <AccordionTrigger className="font-medium">
                        {item.title}
                      </AccordionTrigger>
                      {item.options.map((subItem, subIndex) => {
                        return (
                          <AccordionContent key={subIndex}>
                            <p className="">{subItem.title}</p>
                            <h1 className="font-semibold">{subItem.dest}</h1>
                          </AccordionContent>
                        );
                      })}
                    </AccordionItem>
                  </Accordion>
                );
              })}
          </aside>
          {/* notice */}

          <footer>
            <p className="rounded-lg p2-2  p-4  ">
              You must make all deposits from the same bank account.
            </p>
            <p className="my-4">
              Deposits are processed within UK business hours. We will email you
              when the deposit arrives in your BullionVault account.
            </p>

            <p className="mt-8">
              We do not accept cash deposited over the counter, banker's cheques
              or other methods where we cannot identify the sending party.
            </p>
          </footer>
        </div>
      </section>

      {/* third section */}
    </div>
  );
};

export default Page;
