"use client"
import SignOutButton from './SignOutButton';
import { accountNavigationItems } from '../_constants/navigation';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
function SideNavigation() {
  const pathname = usePathname()
  return (
    <nav className='border-r border-primary-900 md:h-full  sticky'>
      <ul className='flex xs:flex-col xs:gap-2 xs:h-full text-lg '>
        {accountNavigationItems.map((link) => (
          <li key={link.name} className='flex justify-center items-center flex-1 xs:flex-none'>
            <Link
              className={`
                w-full h-full
                p-5
                justify-center
                xs:justify-normal
                xs:p-5
                md:py-4 md:px-6
              hover:bg-primary-900
              hover:text-primary-100
                transition-colors flex 
                items-center gap-4
                font-semibold
                lg:py-5 lg:px-10
                xs:h-auto
                ${pathname === link.href ? 'bg-primary-900' : 'text-primary-200'}`}
              href={link.href}
            >
              {link.icon}
              <span className='hidden md:inline'>{link.name}</span>
            </Link>
          </li>
        ))}

        <li className='flex justify-center items-center flex-1 xs:flex-none md:mt-auto'>
          <SignOutButton />
        </li>
      </ul>
    </nav>
  );
}

export default SideNavigation;
