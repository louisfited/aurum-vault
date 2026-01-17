"use client";
import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <div>
      sorry and error occurred with your auth code{" "}
      <Link href={"/auth/signup"}>Try again</Link>
    </div>
  );
};

export default Page;
