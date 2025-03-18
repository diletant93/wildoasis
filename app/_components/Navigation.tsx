import Link from "next/link";
import { navigationItems } from "../_constants/navigation";

export default function Navigation() {
  return (
    <nav>
      <ul>
        {navigationItems.map(item => (
          <li key={item.label}>
            <Link href={item.path} className="hover:text-accent-400 transition-colors">{item.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
