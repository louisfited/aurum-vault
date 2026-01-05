import { Rocket } from 'lucide-react'
import Image from 'next/image'



const dataForWhyAu = [
    {
        id:1,
        title:"Ease of Use",
        description:"A clean, intuitive platform that makes purchasing and managing your bullion effortless.",
        icon:Rocket 
    },
    {
        id:2,
        title:"Safety",
        description:"Your gold, silver, and platinum are protected in fully insured, high-security vaults around the world.",
        icon:Rocket 
    },
    {
        id:3,
        title:"Low Charges",
        description:"Industry-leading storage and transaction fees help you keep more of your investment.",
        icon:Rocket 
    },
    {
        id:4,
        title:"Fast Transaction",
        description:"Buy or sell instantly, with quick settlement and prompt transfers when you need your funds.",
        icon:Rocket 
    },
    {
        id:5,
        title:"Educational Recourses",
        description:"Clear guides and helpful insights to support smarter bullion decisions.",
        icon:Rocket 
    },
    {
        id:6,
        title:"Fast Support",
        description:"Assistance whenever you need help or have questions.",
        icon:Rocket 
    },
]
const WhyAu = () => {
  return (
    <div className='px-4 my-8 '>

    <header className="text-center py-8">
    <h1 className=" font-semibold text-3xl">Why AURUM</h1>
    <p className="text-sm lg:w-[50%] mx-auto">At AU, we make buying, selling, and storing precious metals simple, secure, and
    cost-effective — here's what sets us apart.

    why-nextrade-image
    Ease of Use</p>
    </header>


<section className='flex lg:flex-row flex-col  flex-col-reverse gap-y-8'>
{/* first  */}
    <aside className='lg:w-[60%]  w-full flex flex-wrap gap-y-4'>
{dataForWhyAu.map((item,index)=>{

    return <div key={index} className='lg:w-[50%] w-full'>
        <header className='flex items-center gap-4'>
            <span className='text-blue-700'><item.icon /></span>
            <h1 className='text-lg font-semibold'>{item.title}</h1>
        </header>
        <div className='text-gray-700'>
            {item.description}
        </div>
    </div>
})}
    </aside>

    {/* Second */}
    <div className='lg:w-[40%] h-50 w-full relative'>
        <Image src={"/whyaurum2.jpg"}
        fill
        className='absolute w-full h-full object-cover'
        alt="question-mark" />
    </div>
</section>


    </div>
  )
}

export default WhyAu