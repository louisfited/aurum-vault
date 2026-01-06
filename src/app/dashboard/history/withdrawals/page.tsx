
import { withdrawals } from "@/utils/history-dummies/withdrawal-dummy-data";
import { columns, Withdrawal } from "./column";
import { DataTable } from "./data-table";

export async function fetchWithdrawals():Promise<Withdrawal[]> {
  

  return withdrawals
}


const Page = async() => {

    const data = await fetchWithdrawals()


  return (
    <div>
<div className="py-4 text-center">
    <h1 className="font-semibold uppercase">withdrawals</h1>
</div>


<div className="py-8">
    <DataTable data={data} columns={columns}/>
</div>

    </div>
  )
}

export default Page