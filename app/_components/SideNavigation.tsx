"use client"
import SignOutButton from './SignOutButton';
import { accountNavigationItems } from '../_constants/navigation';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
function SideNavigation() {
  const pathname = usePathname()
  return (
    <nav className='border-r border-primary-900 h-full'>
      <ul className='flex flex-col gap-2 h-full text-lg'>
        {accountNavigationItems.map((link) => (
          <li key={link.name} >
            <Link
              className={`py-3 px-5 hover:bg-primary-900 hover:text-primary-100 transition-colors flex items-center gap-4 font-semibold  ${pathname === link.href ? 'bg-primary-900' : 'text-primary-200'}`}
              href={link.href}
            >
              {link.icon}
              <span>{link.name}</span>
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
