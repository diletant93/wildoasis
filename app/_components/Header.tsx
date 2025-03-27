import Navigation from '@/app/_components/Navigation';
import Logo from '@/app/_components/Logo';

function Header() {
  return (
    <header className='border-b border-primary-900 px-8 py-5 order-1 sm:order-0'>
      <div className='flex sm:justify-between items-cente max-w-7xl mx-auto z-[100]'>
        <Logo />
        <Navigation />
      </div>
    </header>
  );
}

export default Header;
