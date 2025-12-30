import Image from "next/image"

const EdgeAgainstCurrency = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-y-6 px-4 lg:gap-x-4 my-8">
<section className="w-full lg:w-[50%] flex items-center lg:items-start justify-center lg:justify-evenly ">

<div className="relative lg:w-[400px] lg:h-[400px] w-md:[300px] md:h-[300px] w-[200px] h-[200px]">
    <Image src={"/chart-one.svg"} 
    fill
    alt="chart-one"
    className="absolute w-full h-full"
    />
</div>
</section>

<section className="w-full lg:w-[50%] ">
    <h1 className="text-3xl font-bold text-center my-6">Hedge Against Currency Devaluations</h1>
    <article className="flex flex-col gap-y-4 text-sm">
 
    <p>Our platform gives private investors direct access to the professional bullion markets, offering some of the lowest prices for buying, selling, and storing gold, silver, and platinum.
 </p>
 <p>We are one of the leading online precious-metals services, safeguarding billions in assets.</p>
 <p>Your metal is held in secure, fully insured vaults located in Abuja, Accra or Cape Town — you choose the location. Our scale allows us to offer exceptionally low storage fees with insurance included.</p>
 <p>Sell whenever you want with no penalties, and funds are typically wired the next business day. You may also take physical delivery of your bars.</p>
 <p>Getting started is simple. You can own physical precious metals within minutes.</p>
 <p>Open a free account today — no obligation to trade — and receive 1/16 oz of silver (2 g) to try the service risk-free</p>
    </article>
</section>

    </div>
  )
}

export default EdgeAgainstCurrency