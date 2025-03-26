import Link from "next/link";

export default function LinkButton({ href, children }: { href: string; children: React.ReactNode }) {
    return (
        <Link
            href={href}
            className="px-8 py-6 bg-accent-500 text-primary-800 text-lg font-semibold hover:bg-accent-600 transition-all "
        >
            {children}
        </Link>
    );
}
