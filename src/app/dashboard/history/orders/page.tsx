import { OrdersDataTable } from './orders-data-table'
import { orderColumns } from '@tanstack/react-table'
import { ordersColumns } from './orders-column'
import { ordersHistory, typeOrderHistory } from '@/utils/history-dummies/order-dummy-data'

const fetchOrders = async():Promise<typeOrderHistory[]>=>{

    return ordersHistory
}

const Page = async() => {

    const data = await fetchOrders()
  return (
    <div className=''>
<div className="py-4 text-center">
    <h1 className="font-semibold uppercase">Orders</h1>
</div>



    <OrdersDataTable columns={ordersColumns}  data={data}/>


    </div>
  )
}

export default Page