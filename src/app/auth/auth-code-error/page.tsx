"use client";
import { createClient } from "@/utils/supabase/client";
import Link from "next/link";
import { useEffect } from "react";

const Page = () => {
  const handleSignOut = async () => {
    const supabase = createClient();
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.log("Error signing out:", error);
    }
  };
  useEffect(() => {
    handleSignOut();
  }, []);
  return (
    <div>
      sorry and error occurred with your auth code{" "}
      <Link href={"/auth/signup"} className="text-blue-500">
        Try again
      </Link>
    </div>
  );
};

export default Page;
