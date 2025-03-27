'use client'
import Link from "next/link";
import { useMediaQuery } from "../_hooks/useMediaQuery";
import { MEDIA_QUERIES } from "../_types/mediaQueries";
type NavigationItemProps = {
    path: string;
    children: React.ReactNode;
    iconForSmallDevices: React.ReactNode;
}
export default function NavigationItem({ path, iconForSmallDevices, children }: NavigationItemProps) {
    const matches = useMediaQuery(MEDIA_QUERIES.SM)
    return (
        <Link href={path} className="flex-1 sm:flex-none py-3 px-1">
            <li
                className="hover:text-accent-400
                transition-colors capitalize flex
                justify-center gap-3 items-center
                px-2 py-2 bg-accent-600
                rounded-full sm:bg-transparent 
                sm:text-lg 
                lg:text-xl
                xl:text-2xl
                2xl:text-3xl">
                {matches ? iconForSmallDevices : children}
            </li>
        </Link>
    );
}
