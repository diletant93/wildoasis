import { CalendarDaysIcon, HomeIcon, UserIcon } from "@heroicons/react/24/solid";
import { AccountNavigationItem, NavigationItem } from "../_types/navigation";

export const navigationItems : NavigationItem[] =[
    {
        label:'cabins',
        path:'/cabins'
    },
    {
        label:'about',
        path:'/about'
    },
    
    {
        label:'account',
        path:'/account'
    },

]

export const accountNavigationItems : AccountNavigationItem[] = [
    {
        name: 'Home',
        href: '/account',
        icon: <HomeIcon className='h-5 w-5 text-primary-600' />,
      },
      {
        name: 'Reservations',
        href: '/account/reservations',
        icon: <CalendarDaysIcon className='h-5 w-5 text-primary-600' />,
      },
      {
        name: 'Guest profile',
        href: '/account/profile',
        icon: <UserIcon className='h-5 w-5 text-primary-600' />,
      },
]