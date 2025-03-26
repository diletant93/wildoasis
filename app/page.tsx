import Image from "next/image";
import Link from "next/link";
import bg from '@/public/bg.png'
import LinkButton from "./_components/LinkButton";
export default async function Home() {
  return (
    <div className="mt-5 place-self-end justify-self-center sm:justify-self-auto sm:place-self-auto">
      <Image src={bg} fill className="object-cover object-top absolute inset-0" placeholder="blur" quality={100} alt="Mountains and forests with two cabins" />

      <div className="relative z-10 text-center">
        <h1 className="text-2xl md:text-8xl text-primary-50 mb-7 md:mb-10 tracking-tight font-normal">
          Welcome to paradise.
        </h1>
        <LinkButton href="/cabins">Explore luxury cabins</LinkButton>
      </div>
    </div>
  );
}
