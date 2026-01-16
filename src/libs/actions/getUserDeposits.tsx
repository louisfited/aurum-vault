import { typeDeposit } from "@/app/dashboard/history/deposits/deposits-column";
import { Deposit } from "@/app/dashboard/history/deposits/page";
import { createSupabaseServerClient } from "@/utils/supabase/server";

export const getUserDeposits = async (): Promise<Deposit[]> => {
  const supabase = await createSupabaseServerClient();

  // Get current user
  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser();

  if (userError || !user) {
    throw new Error("Not authenticated");
  }

  // Fetch deposits for this user
  const { data: deposits, error } = await supabase
    .from("deposits")
    .select("*")
    .eq("user_id", user.id)
    .order("created_at", { ascending: false });

  if (error) {
    throw new Error("Failed to fetch deposits");
  }

  return deposits as Deposit[];
};
