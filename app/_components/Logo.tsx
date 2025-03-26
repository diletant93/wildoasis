import Image from "next/image";
import logo from '@/public/logo.png'
import Link from "next/link";
export function Logo() {
  return (
    <Link href="/" className="flex flex-1 sm:flex-none items-center gap-4 z-10">
      <Image src={logo} height={60} width={60} alt="The Wild Oasis logo" />
      <span className="hidden md:inline text-xl font-semibold text-primary-100">
        The Wild Oasis
      </span>
    </Link>
  );
}

export default Logo;
