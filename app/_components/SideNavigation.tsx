"use client"
import SignOutButton from './SignOutButton';
import { accountNavigationItems } from '../_constants/navigation';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
function SideNavigation() {
  const pathname = usePathname()
  return (
    <nav className='border-r border-primary-900 md:h-full flex-1 sticky'>
      <ul className='flex flex-col gap-2 h-full text-lg'>
        {accountNavigationItems.map((link) => (
          <li key={link.name} >
            <Link
              className={`
                p-5
                md:py-4 md:px-6
              hover:bg-primary-900
              hover:text-primary-100
                transition-colors flex 
                items-center gap-4
                font-semibold
                lg:py-5 lg:px-10
                ${pathname === link.href ? 'bg-primary-900' : 'text-primary-200'}`}
              href={link.href}
            >
              {link.icon}
              <span className='hidden md:inline'>{link.name}</span>
            </Link>
          </li>
        ))}

        <li className='mt-auto'>
          <SignOutButton />
        </li>
      </ul>
    </nav>
  );
}

export default SideNavigation;
