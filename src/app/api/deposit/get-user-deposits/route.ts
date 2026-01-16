import { NextRequest, NextResponse } from "next/server";
import { createSupabaseServerClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";

export async function GET(req: NextRequest) {
  const supabase = await createSupabaseServerClient();

  // Get current user
  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser();

  console.log("authError", userError);

  if (userError || !user) {
    return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
  }

  // Fetch deposits for this user
  const { data: deposits, error } = await supabase
    .from("deposits")
    .select("*")
    .eq("user_id", user.id)
    .order("created_at", { ascending: false });
  console.log("fetch error", error);

  if (error) {
    return NextResponse.json(
      { error: "Failed to fetch deposits" },
      { status: 500 }
    );
  }

  return NextResponse.json({ data: deposits }, { status: 200 });
}
