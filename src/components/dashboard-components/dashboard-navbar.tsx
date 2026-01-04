"use client"
import { LogOut, Moon, Settings, Sun, User } from 'lucide-react'
import Link from 'next/link'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from '../ui/button'
import { useTheme } from 'next-themes'
import { SidebarTrigger } from '../ui/sidebar'
import { signout } from '@/libs/actions/auth-actions'
import { useRouter } from 'next/navigation'

const DashboardNavbar = () => {
  const {theme,setTheme} = useTheme()

  const router = useRouter()
  return (
    <div className='flex items-center justify-between py-4'>
{/* <button>collapse</button> */}
<SidebarTrigger/>
<div className='flex items-center justify-evenly lg:w-[10%] w-[40%]'>
  {/* <Link href={"/"}>Dashboard</Link>  */}
  {/* Theme mode */}

  <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>



{/* Avatar */}
<DropdownMenu>
  <DropdownMenuTrigger>  <Avatar>
  <AvatarImage src="https://github.com/shadcn.png" />
  <AvatarFallback>AU</AvatarFallback>
</Avatar> </DropdownMenuTrigger>
  <DropdownMenuContent sideOffset={10}>
    <DropdownMenuLabel>My Account</DropdownMenuLabel> 
    <DropdownMenuSeparator />
    <DropdownMenuItem>
      <User className='w-[1.2rem] h-[1.2rem] mr-2'/>
      Profile</DropdownMenuItem> 
    <DropdownMenuItem>
      <Settings className='w-[1.2rem] h-[1.2rem] mr-2'/>
      Settings
      </DropdownMenuItem>
   
    <DropdownMenuItem
    onClick={async()=> {

  
        const res = await signout()
        if (res.success) {
         router.push("/auth/signin")
        }
       
       
    }}
      variant='destructive'><LogOut className='w-[1.2rem] h-[1.2rem] mr-2'/>  Logout</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>
</div>

    </div>
  )
}

export default DashboardNavbar