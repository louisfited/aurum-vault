"use client";

import { BadgeQuestionMark } from "lucide-react";
import Link from "next/link";
import { FaExclamation } from "react-icons/fa6";

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

const headingClass = "py-3 bg-card px-2";
const Page = () => {
  return (
    <div>
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
      {/* </DashboardContainer> */}
    </div>
  );
};

export default Page;
