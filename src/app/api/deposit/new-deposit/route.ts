import { NextResponse } from "next/server";
import { createSupabaseServerClient } from "@/utils/supabase/server";
import { DepositFormValues } from "@/utils/types";

export async function POST(req: Request) {
  const supabase = await createSupabaseServerClient();

  const formData: DepositFormValues = await req.json();

  console.log("value entered", formData);

  if (!formData.country || !formData.currency) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  // get logged-in user info
  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser();

  // console.log("user", user);
  // console.log("error", authError);

  if (!user || authError) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { data, error } = await supabase
    .from("deposits")
    .insert({
      user_id: user.id,
      currency: formData.currency,
      country: formData.country,
      method: formData.method,
      bank_name: formData.bank_name,
      account_no: formData.account_no,
      amount: formData.amount,
      status: "pending",
    })
    .select();

  console.log("returned data", data);
  console.log("returned error", error);

  if (error) {
    return NextResponse.json(
      { error: error.message || "some went wrong" },
      { status: 500 }
    );
  }

  return NextResponse.json({ success: true, data: data });
}
