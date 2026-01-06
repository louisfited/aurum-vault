import { BadgeQuestionMark, FileQuestionMark } from 'lucide-react'

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { countries } from '@/utils/countries'
import { useMemo } from 'react'
import { accordionInfos } from '@/utils/deposit-accordion-info'

const Page = () => {

    const countriesList = useMemo(()=> {

        return  countries.map((item,index)=>{

            return <SelectItem key={item.code} value={item.code}>
        {item.name}
      </SelectItem>
        })
    },[])
  return (
    <div className=' text-sm'>
{/* Account Info */}
<section className=' pt-2   rounded-lg bg-card'>
    <div className='flex justify-between text-xl font-semibold py-3 px-4'>
        <h1 className=''>Deposit Funds</h1>
        <span className='text-2xl'><BadgeQuestionMark/></span>
    </div>
    <div className=' py-2  rounded-t-lg px-4 '>How to send money from your bank account</div>
</section>


{/* second section */}
<section className='py-4 flex lg:flex-row flex-col gap-x-4 lg:gap-y-0 gap-y-4 '>

    {/* select your info */}
    <div className='lg:w-[40%] w-full  rounded-lg  py-4 px-4 lg:max-h-50 lg:sticky top-[2%] left-[0%] border-border border'>
    <aside className=''>
    <h1 className=''>My bank account is in:</h1>
    <Select>
  <SelectTrigger className="w-full">
    <SelectValue placeholder="select country" />
  </SelectTrigger>
  <SelectContent>
{countriesList}
  </SelectContent>
</Select>


    </aside>

    <aside className='my-4'>

    <h1 className=''>I want to send :</h1>

     <Select>
  <SelectTrigger className="w-full">
    <SelectValue placeholder="USD" />
  </SelectTrigger>
  <SelectContent>
<SelectItem  value="USD">USD  </SelectItem>
<SelectItem  value="NGN">NGN</SelectItem>
<SelectItem  value="EUROS">Euros</SelectItem>
  </SelectContent>
</Select>
    {/* <select name="" id="" className='dark:bg-darkOne w-full dark:border-gray-500 border-gray-300 border-2 p-2 rounded-lg mt-2'>
    <option value="">USD</option>
    <option value="">Euro</option>
    <option value="">Naira</option>

    </select> */}
    </aside>
    </div>


{/* full details */}

<div className='lg:w-[60%] w-full px-4   rounded-lg pb-6'>
<header className=' pt-2  rounded-lg'>
        <h1 className='font-semibold text-xl'>Manual Bank Transfer</h1>
    <div className='flex justify-between items-center border-b'>
    <div className=''>Nigeria: to send US dollars</div>
        <span className='text-lg'><BadgeQuestionMark/></span>
    </div>
    <div className='py-4'>
        If you send a payment in your local currency, our bank will convert it once it has reached one of our client accounts at their standard conversion rates (FX margin capped at 0.5%).
    </div>
</header>

<aside className=' my-4 px-4 rounded-md'>
    {/*  */}

    

    {accordionInfos.map((item,index)=>{

        return (

<Accordion type="single" key={index + 1} collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger className='font-medium'>{item.title}</AccordionTrigger>
   {item.options.map((subItem,subIndex)=>{
       
       return (
           
           <AccordionContent key={subIndex}>
<p className=''>{subItem.title}</p>
<h1 className='font-semibold'>{subItem.dest}</h1>
</AccordionContent>

    )
   })}
  </AccordionItem>
</Accordion>
        )
    })}




</aside>
{/* notice */}

<footer>
<p className='rounded-lg p2-2  p-4  '>You must make all deposits from the same bank account.</p>
<p className='my-4'>Deposits are processed within UK business hours. We will email you when the deposit arrives in your BullionVault account.</p>

<p className='mt-8'>We do not accept cash deposited over the counter, banker's cheques or other methods where we cannot identify the sending party.</p>
</footer>
</div>


</section>



{/* third section */}






    </div>
  )
}

export default Page