import { depositColumns, typeDeposit } from "./deposits-column";
import { DepositDataTable } from "./deposits-data-tabel";
import { getUserDeposits } from "@/libs/actions/getUserDeposits";

// import { Deposit } from "@/utils/types";

export type Deposit = {
  id: number;
  user_id: string;
  amount: number;
  currency: "USD" | "NGN" | "EUROS";
  method: "bank" | "crypto";
  bank_name?: string;
  account_no?: string;
  receipt_url?: string;
  status: "pending" | "rejected" | "confirmed";
  created_at: string;
};

const Page = async () => {
  let data: typeDeposit[] = [];
  let errorMessage: string | null = null;

  try {
    const depositsFromDb = await getUserDeposits();
    data = depositsFromDb.map(mapDepositToTableType); // <--- mapping
  } catch (err: any) {
    console.error(err);
    errorMessage = err.message;
  }

  return (
    <div>
      <div className="py-4 text-center">
        <h1 className="font-semibold uppercase">Deposits</h1>
      </div>

      {errorMessage ? (
        <div className="text-red-500">Error: {errorMessage}</div>
      ) : !data || data.length < 1 ? (
        <div>You currently don't have deposit history</div>
      ) : (
        <div className="py-8">
          <DepositDataTable data={data} columns={depositColumns} />
        </div>
      )}
    </div>
  );
};

export const mapDepositToTableType = (deposit: Deposit): typeDeposit => {
  const formatAccount = (bankName?: string, accountNo?: string) => {
    if (!bankName && !accountNo) return ""; // fallback
    if (!accountNo) return bankName; // fallback if no account number

    const last4 = accountNo.slice(-4); // last 4 digits
    return `${bankName} •••• ${last4}`;
  };

  return {
    id: deposit.id.toString(), // convert number to string for your table
    date: new Date(deposit.created_at).toLocaleString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "2-digit",
    }),
    amount: deposit.amount,
    currency:
      deposit.currency === "EUROS"
        ? "EUR"
        : deposit.currency === "NGN"
        ? "GBP" // map NGN to GBP or adjust as needed
        : deposit.currency, // USD stays USD
    status: deposit.status, // pending / rejected / confirmed
    method: deposit.method, // bank / crypto
    account: formatAccount(deposit.bank_name, deposit.account_no) as string,
    reference: null, // keep null for now
    fee: 0, // placeholder for now
    reason: deposit.method === "bank" ? "Bank transfer" : "Crypto transfer", // optional
  };
};

export default Page;
