import { BanknoteArrowDown, ChartCandlestick, Landmark } from "lucide-react"




const howItWorks = [
   {
        id:1,
        title:"Deposit",
        description:"Create an account and add funds.",
        icon:Landmark
   },
   {
        id:2,
        title:"Trade",
        description:"Buy, trade and store gold, silver and platinum.",
        icon:ChartCandlestick 
   },
   {
        id:3,
        title:"Withdraw",
        description:"Get funds easily to your bank.",
        icon:BanknoteArrowDown
   },
   
]
const HowItWorks = () => {
  return (
    <div className="my-4 ">

        <h1 className="lg:text-5xl md:text-4xl  md:font-bold text-3xl font-semibold text-center my-4">How it Works</h1>

        <section className="flex lg:flex-row flex-col justify-between gap-y-6 lg:gap-y-0  px-4 overflow-y-hidden">
            {howItWorks.map((item,index)=>{

                return  <aside data-aos-delay={index == 0 ? "0" : index == 1 ? "500" : "1000"} data-aos="fade-down" key={index} className="rounded-md px-4 lg:w-[30%] w-full shadow-xl  bg-card py-4 hover-lift" >
<div className="flex  items-center gap-x-4 ">
    <span>< item.icon  size={"20"}/></span>
    <h1 className="scroll-m-20 text-lg font-semibold tracking-tight">{item.title}</h1>
</div>
<p>{item.description}</p>
                </aside>
            })}
        </section>
    </div>
  )
}

export default HowItWorks