import { redirect } from "next/navigation";
import React from "react";

const Page = () => {
  redirect("/dashboard/balance");
  return <div>Dashbaord main</div>;
};

export default Page;
