import Image from "next/image"


const dataForServices = [
    {id:1,
     title:"Live Bullion Pricing",
     description:"Track real-time gold, silver, and platinum prices so you can buy or sell at the moment that suits you."
    },
    {id:2,
     title:"Secure Storage Options",
     description:"Store your bullion in fully insured, professional-grade vaults across global locations of your choice."
    },
    {id:3,
     title:"Market Insights & Guidance",
     description:"Stay informed with clear insights and helpful resources designed to support smarter precious-metal decisions."
    },
    {id:4,
     title:"Simple, Intuitive Platform",
     description:"Buy, sell, or withdraw your bullion effortlessly through a clean and easy-to-use interface"
    },
    {id:5,
     title:"Wide Selection of Metals",
     description:"Access physical gold, silver, and platinum in various forms and quantities to suit your investment goals."
    },
    {id:6,
     title:"Integrated Account Management",
     description:"Manage your holdings, view your balances, and request withdrawals seamlessly — all in one secure account."
    },
]

const BullionServices = () => {
  return (
    <div className="px-4 my-4">

        <header className="text-center py-4">
            <h1 className=" font-semibold text-3xl">Explore Our Bullion Services</h1>
            <p className="text-sm">Access everything you need to buy, sell, and securely store physical gold, silver, and platinum with confidence.</p>
        </header>

        <section className="flex flex-wrap items-center justify-center gap-4">
{dataForServices.map((item,index)=>{

    return <aside data-aos="zoom-in-up" key={index} className="lg:w-[30%] w-full bg-card rounded-md px-2 pt-3  py-6 flex flex-col gap-y-2  text-sm">
        <div className="flex items-center gap-x-2">
          <img className="w-5 h-5"  src={"/bank-one.svg"}  alt="" />
          <h1 className="text-md font-semibold">{item.title}</h1>
        </div>
        <div>
            {item.description}
        </div>
    </aside>
})}

        </section>
    </div>
  )
}

export default BullionServices