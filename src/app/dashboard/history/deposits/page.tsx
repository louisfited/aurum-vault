
import { deposits } from "@/utils/history-dummies/deposit-dummy-data";
import { depositColumns, typeDeposit,  } from "./deposits-column";
import { DepositDataTable } from "./deposits-data-tabel";

export async function fetchDeposits():Promise<typeDeposit[]> {
  

  return deposits
}


const Page = async() => {

    const data = await fetchDeposits()


  return (
    <div>
<div className="py-4 text-center">
    <h1 className="font-semibold uppercase">Deposits</h1>
</div>


<div className="py-8">
    <DepositDataTable data={data} columns={depositColumns}/>
</div>

    </div>
  )
}

export default Page