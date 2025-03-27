import Link from "next/link";
import { cn } from "../_utils/cn";

export default function LinkButton({ href, className, children }: { href: string; className?:string; children: React.ReactNode }) {
    return (
        <Link
            href={href}
            className={cn(`px-8 py-6 bg-accent-500 text-primary-800 text-lg font-semibold hover:bg-accent-600 transition-all active:bg-accent-400 shadow-xl active:shadow-lg duration-300 2xl:text-2xl 2xl:py-10 2xl:px-10`, className)}
        >
            {children}
        </Link>
    );
}
