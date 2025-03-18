import Link from "next/link";
import { navigationItems } from "../_constants/navigation";

export default function Navigation() {
  return (
    <nav className="z-10 text-xl">
      <ul className="flex gap-16 items-center">
        {navigationItems.map(item => (
          <li key={item.label}>
            <Link href={item.path} className="hover:text-accent-400 transition-colors capitalize">{item.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
