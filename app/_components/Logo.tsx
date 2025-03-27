import Image from "next/image";
import logo from '@/public/logo.png'
import Link from "next/link";
export function Logo() {
  return (
    <Link href="/" className="flex flex-1 sm:flex-none items-center gap-4 z-10 ">
      <div className="w-[60px] 2xl:w-[100px] aspect-square relative">
        <Image src={logo} fill className="object-cover" alt="The Wild Oasis logo" />
      </div>
      <span className="hidden md:inline text-xl font-semibold text-primary-100 transition-all duration-300 hover:text-accent-400 2xl:text-3xl">
        The Wild Oasis
      </span>
    </Link>
  );
}

export default Logo;
