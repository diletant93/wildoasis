import Link from "next/link";

export default function NavigationItem({ path, children }: { path: string; children: React.ReactNode }) {
    return (
        <li>
            <Link href={path} className="hover:text-accent-400 transition-colors capitalize flex gap-3 items-center">{children}</Link>
        </li>
    );
}
