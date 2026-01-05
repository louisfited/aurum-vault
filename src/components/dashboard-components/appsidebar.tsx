
"use client"
import { ArrowDownRight, ArrowDownToLine, ArrowUpFromLine, ArrowUpRight, Calendar, ChevronDown, ChevronUp, ClipboardList, Home, Inbox, Receipt, Search, Settings, Sun, User2, Wallet } from 'lucide-react'

import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '../ui/sidebar'
import Link from 'next/link'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@radix-ui/react-dropdown-menu'
import { Collapsible, CollapsibleContent } from '../ui/collapsible'
import { CollapsibleTrigger } from '@radix-ui/react-collapsible'
import { signout } from '@/libs/actions/auth-actions'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { createClient } from '@/utils/supabase/client'


const items = [
  {
    title: "Home ",
    url: "#",
    icon: Home,
  },
  {
    title: "Inbox",
    url: "#",
    icon: Inbox,
  },
  {
    title: "Calendar",
    url: "#",
    icon: Calendar,
  },
  {
    title: "Search",
    url: "#",
    icon: Search,
  }, 
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
]


const menu = [
  {
    id:1,
    title:"Account",
    subMenu:[{name:"Balance",icon:Wallet,link:"/dashboard/balance"},{name:"Deposit Funds",icon:ArrowDownToLine,link:"/dashboard/deposit-funds"},{name:"Withdraw Funds",icon:ArrowUpRight, link:"/dashboard/withdraw-funds"}]
  },
  {
    id:2,
    title:"History",
    subMenu:[{name:"Orders",icon:ClipboardList,link:"/"},{name:"Deposits",icon:Receipt,link:"/"},{name:"Withdrawals",icon:ArrowUpFromLine,link:"/"}]
  },
  {
    id:3,
    title:"Buy/Sell",
    subMenu:[{name:"Buy",icon:ArrowUpRight,link:"/"},{name:"Sell",icon:ArrowDownRight,link:"/"}]
  }
]



const AppSidebar = () => {

  const router = useRouter()
  const [userName,setUserName] = useState<string | null>(null)




         const checkUser = async () => {
          const supabase = createClient()
    const { data: { user }, error } = await supabase.auth.getUser()
    
    setUserName(user?.user_metadata.full_name.split(" ")[0] || user?.user_metadata.name.split(" ")[0])
    if (user) {
      console.log("Logged in as:", user)
    } else {
      console.log("No user is signed in")
    }
  }
  
  
  useEffect(()=>{
  checkUser()
  },[])
  return (
    

    <Sidebar collapsible='icon'>
<SidebarHeader>
<SidebarMenu>
  <SidebarMenuItem>
    <SidebarMenuButton>
      <Sun/>
      <span>Aurum</span>
    </SidebarMenuButton>
  </SidebarMenuItem>
</SidebarMenu>
</SidebarHeader>

{/* side bar content */}
<SidebarContent>
{/* <SidebarGroup>
<SidebarGroupLabel>Applications</SidebarGroupLabel>

<SidebarGroupContent>
  <SidebarMenu>
    {items.map((item,index)=>{

return <SidebarMenuItem key={item.title}>
<SidebarMenuButton asChild>
  <Link href={item.url}>
  <item.icon/>
  <span>{item.title}</span>
  </Link>
</SidebarMenuButton>
</SidebarMenuItem>

})}
  </SidebarMenu>
</SidebarGroupContent>

</SidebarGroup> */}




 {menu.map((item,index)=>{

  
   return   <Collapsible key={index + 1} defaultOpen className="group/collapsible">
  <SidebarGroup>
  <SidebarGroupLabel asChild>
    <CollapsibleTrigger className="flex w-full items-center">
      {item.title}
      <ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
    </CollapsibleTrigger>
  </SidebarGroupLabel>

  <CollapsibleContent>
    <SidebarGroupContent>
      <SidebarMenu>
     {item.subMenu.map((subItem,index)=>{

      return    <SidebarMenuItem key={index}>
      <SidebarMenuButton asChild>
        <Link href={subItem.link}>
          <subItem.icon />
          <span>{subItem.name}</span>
        </Link>
      </SidebarMenuButton>
    </SidebarMenuItem>
     })}
      </SidebarMenu>
    </SidebarGroupContent>
  </CollapsibleContent>
</SidebarGroup>
</Collapsible>
 })}


</SidebarContent>

{/*  */}


{/* Sidebar Footer */}
<SidebarFooter>
<SidebarMenu>
  <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <SidebarMenuButton className='flex justify-between'> <User2 className='h-[1.2rem w-[1.2rem]'/> {userName ? userName  : "Me"}<ChevronUp className='ml-auto'/></SidebarMenuButton>
    </DropdownMenuTrigger>

    <DropdownMenuContent  className="text-sm border border-border rounded-md shadow-md w-48 flex flex-col gap-y-2 px-2 " align='end' >

      {["Account","Settings","SignOut"].map((item,index)=>{
        
        return <DropdownMenuItem
key={index + 1}
        onClick={async()=>{
if (item == "SignOut") {
 const res = await signout()
 if (res.success) {
  router.push("/auth/signin")
 }
}


        }}
        className="
        cursor-pointer
        focus:bg-accent focus:text-accent-foreground
        hover:bg-accent hover:text-accent-foreground
        focus:outline-none rounded-md px-2"
        >{item}</DropdownMenuItem>
      })}

    </DropdownMenuContent>
  </DropdownMenu>
</SidebarMenu>
</SidebarFooter>
    </Sidebar>

  )
}

export default AppSidebar