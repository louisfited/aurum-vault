import { createSupabaseServerClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import { ReactNode } from "react";

const AuthWrapper = async ({ children }: { children: ReactNode }) => {
  // const supabase = await createSupabaseServerClient();

  // const {
  //   data: { user },
  // } = await supabase.auth.getUser();

  // if (!user) redirect("/auth/signin");
  return children;
};

export default AuthWrapper;
