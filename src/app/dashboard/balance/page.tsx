"use client"
import BuySellWizard from '@/components/buy-sell-wizard'
import { ArrowRight, BadgeQuestionMark } from 'lucide-react'
import React, { useState } from 'react'



const silverData = [
{
    name:"Zurich",
    total:"0.004kg",
    valuation:"7.3",
    sellAtBestPrice:["Dollars","Pounds","Euros"]
}

]


const currencyData = [
    {
        name:"Silver",
        total:"$1.00",
        valuation:"$1.00",
        buyAtBestPrice:[]
    },
    {
        name:"Gold",
        total:"$1.00",
        valuation:"$1.00",
        buyAtBestPrice:[]
    },
    {
        name:"Platinum",
        total:"$1.00",
        valuation:"$1.00",
        buyAtBestPrice:[]
    },
]


const headingClass = "py-3 bg-card px-2"
const Page = () => {

       const [showItem,setShowItem] = useState("")
  return (
       <div>


{/* Account Info */}
<section className=' pt-2  rounded-lg bg-card'>
    <div className='flex justify-between text-xl font-semibold py-3 px-4'>
        <h1 className=''>Account Balance</h1>
        <span className='text-2xl'><BadgeQuestionMark/></span>
    </div>
    <div className=' py-2 px-2 rounded-t-lg px-4 text-sm'>see your holdings</div>
</section>


{/* container */}
{/* <DashboardContainer> */}

<div className='flex lg:flex-row flex-col lg:gap-x-4 lg:gap-y-0 gap-y-6'>




<article className='lg:w-[70%] mt-6'>
<div className=' rounded-lg  overflow-hidden'>
    {/* header */}
    <section className='flex justify-between py-3  px-2 bg-card'>
        <span className='font-bold text-lg'>Summary</span>
        <div className='w-[25%]  flex justify-between'>
        <span className='font-bold text-lg'>Valuation</span>
        </div>
    </section>
    <section  className='flex flex-col gap-y-4 '> 
    <aside className='flex justify-between border-t-4  p-2'>
        <span>Bullion</span>
        <div className='w-[25%]  flex justify-between'>
        <span>$7.36</span>
     
        </div>
    </aside>
    <aside className='flex justify-between border-t-2  p-2'>
        <span>Currency</span>
        <div className='w-[25%]  flex justify-between'>
        <span>$7.36</span>
        {/* <span>$7.36</span> */}
        </div>
    </aside>
    <aside className='flex justify-between border-t-2  p-2 font-semibold'>
        <span className=''>Total </span>
       <div className='w-[25%]  flex justify-between'>
       <span>$10.84</span>
       <span className=' rounded-lg px-2 font-light lg:block hidden'>Set Currency</span>
       </div>
    </aside>
    <aside className='flex justify-between lg:flex-row items-center flex-col border-t-2  px-2 py-6 text-sm   opacity-80'>
        <span className=''> 02 Dec 2025 08:47:28 WAT </span>
       <div className='lg:w-[25%] w-full  flex lg:justify-between justify-center'>
       <span>Valuations are shown as a guide only.</span>
       {/* <span className='bg-gray-500 rounded-lg px-2 font-light'>Set Currency</span> */}
       </div>
    </aside>

    </section>
</div>



{/* silver */}

<div className='my-8 flex flex-col  rounded-t-lg overflow-hidden'>
    <section className={`flex justify-between font-bold ${headingClass}`}>
        <span>Silver</span>
        <div className='lg:flex justify-between w-[30%] hidden '>
            <span>Total</span>
            <span>Valuation</span>
            <span>Sell at best price</span>
        </div>
    </section>
    {/* data */}



{/* for mobile */}

<section className='lg:hidden'>
    {silverData.map((item,index)=>{


     return ( 
     <div key={index + 1} className='px-2 py-2'>

        <aside
        onClick={()=>{

            if (showItem == item.name) {
                setShowItem("")
            }else{
                setShowItem(item.name)
            }
        }}
        key={index + 1}
        className='flex justify-between py-2 '> 
            <article className='flex items-center gap-x-2 '>
                <span><ArrowRight /></span>
<span>{item.name}</span>
            </article>
<span className='w-[30%]'>{item.total}</span>
        </aside>
     {showItem == item.name &&   <aside>
           <article className='flex items-center justify-between'>
            <span className='font-semibold '>Valuation</span>
            <span className='w-[30%]'>{item.valuation}</span>
           </article>
           <article className='flex items-center justify-between'>
            <span className='font-semibold '>Sell at best price</span>
            <select name="" id="" className=' w-[30%]'>
                {item.sellAtBestPrice.length > 0 &&  item.sellAtBestPrice.map((option,optionIndex)=>{

                    return <option key={optionIndex} value="">
                        {option}
                    </option>
                })}
            </select>
           </article>
        </aside>}
     </div>
     )
    })}
</section>

    {/* for destop */}
    <section className='lg:block hidden'>
{silverData.map((item,index)=>{

    return <aside key={index + 1} className='flex justify-between border-t-2 py-2 px-2   '>
         <span>{item.name}</span>
        <div className='w-[30%] flex justify-between '>
            <span className='w-[30%]'>{item.total}</span>
            <span className=' w-[30%]'>{item.valuation}</span>
           
            <select name="" id="" className=' lg:inline hidden w-[30%]'>
                {item.sellAtBestPrice.length > 0 && item.sellAtBestPrice.map((option,optionIndex)=>{

                    return <option key={optionIndex} value="">
                        {option}
                    </option>
                })}
            </select>
        </div>
    </aside>
})}

    </section>


    {/* total for mobile */}
    <section className='flex flex-col justify-between  border-t-2 py-2 px-2 lg:hidden'>
        <aside className='flex justify-between items-center '>
        <span className='font-bold'>Total (in custody)</span>
            <span className='w-[30%]'>0.004 kg</span>
        </aside>
      <aside className='flex justify-between items-center '>
      <span className='font-bold'> Total in Valuation</span>
      <span className='w-[30%]'>$7.57</span>
      </aside>
    </section>


    {/* total for destop */}
<section className='lg:flex justify-between font-bold border-t-2 py-2 px-2 hidden'>
        <span>Total</span>
        <div className='flex justify-between w-[30%]  '>
            <span className='w-[30%]'>0.004 kg</span>
            <span className='w-[30%]'>$7.38</span>
            <span className='w-[30%]'>.</span>
        </div>
    </section>

</div>




{/* currency  */}


<div className='my-8 flex flex-col rounded-t-lg overflow-hidden'>
    <section className={`flex justify-between font-bold ${headingClass}`}>
        <span>Currency</span>
        <div className='lg:flex justify-between w-[30%] hidden '>
            <span>Total</span>
            <span>Valuation</span>
            <span>Sell at best price</span>
        </div>
    </section>
    {/* data */}



{/* for mobile */}

<section className='lg:hidden'>
    {currencyData.map((item,index)=>{


     return ( <div className='px-2 py-2'>

        <aside
        onClick={()=>{

            if (showItem == item.name) {
                setShowItem("")
            }else{
                setShowItem(item.name)
            }
        }}
        key={index + 1}
        className='flex justify-between py-2 '> 
            <article className='flex items-center gap-x-2 '>
                <span><ArrowRight /></span>
<span>{item.name}</span>
            </article>
<span className=' w-[30%]'>{item.total}</span>
        </aside>
     {showItem == item.name &&   <aside>
           <article className='flex items-center justify-between'>
            <span className='font-semibold '>Valuation</span>
            <span className='w-[30%] text-start bg-[red]'>{item.valuation}</span>
           </article>
           <article className='flex items-center justify-between'>
            <span className='font-semibold '>Sell at best price</span>
            <select name="" id="" className=' w-[30%]'>
                {item.buyAtBestPrice.map((option,optionIndex)=>{

                    return <option key={optionIndex} value="">
                        {option}
                    </option>
                })}
            </select>
           </article>
        </aside>}
     </div>
     )
    })}
</section>

    {/* for destop */}
    <section className='lg:block hidden'>
{currencyData.map((item,index)=>{

    return <aside key={index + 1} className='flex justify-between border-t-2 py-2 px-2   '>
         <span>{item.name}</span>
        <div className='w-[30%] flex justify-between '>
            <span className='w-[30%]'>{item.total}</span>
            <span className=' w-[30%]'>{item.valuation}</span>
           
            <select name="" id="" className=' lg:inline hidden w-[30%]'>
                {item.buyAtBestPrice.map((option,optionIndex)=>{

                    return <option key={optionIndex} value="">
                        {option}
                    </option>
                })}
            </select>
        </div>
    </aside>
})}

    </section>


    {/* total for mobile */}
    <section className='flex flex-col justify-between  border-t-2 py-2 px-2 lg:hidden'>
        <aside className='flex justify-between items-center '>
        <span className='font-bold'>Total (in custody)</span>
            <span className='w-[30%]'>0.004 kg</span>
        </aside>
      <aside className='flex justify-between items-center '>
      <span className='font-bold'> Total in Valuation</span>
      <span className='w-[30%]'>$7.57</span>
      </aside>
    </section>


    {/* total for destop */}
<section className='lg:flex justify-between font-bold border-t-2 py-2 px-2 hidden'>
        <span>Total</span>
        <div className='flex justify-between w-[30%]  '>
            <span className='w-[30%]'>0.004 kg</span>
            <span className='w-[30%]'>$7.38</span>
            <span className='w-[30%]'>.</span>
        </div>
    </section>

</div>
</article>

{/* buy sell wizard */}
<>
<div className='lg:w-[30%] h-[200px] mt-6 lg:sticky top-6'>
 <BuySellWizard/>
</div>
</>
</div>
{/* </DashboardContainer> */}
    </div>
  )
}

export default Page