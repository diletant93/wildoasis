
import { navigationItems } from "../_constants/navigation";
import NavigationItem from "./NavigationItem";
import { auth } from "../_lib/auth";
import Image from "next/image";

export default async function Navigation() {
  const session = await auth()
  return (
    <nav className="z-10 text-xl">
      <ul className="flex gap-16 items-center">
        {navigationItems.map(item => item.label === 'account' && session?.user?.image ? (
          <NavigationItem key={item.label} path={item.path}>
            <Image
              src={session?.user.image}
              width={30}
              height={30}
              alt="user avatar"
              className="rounded-full -translate-y-[3px]"
            />
            <span>
              {session.user.name}
            </span>
          </NavigationItem>
        ) : <NavigationItem key={item.label} path={item.path}>{item.label}</NavigationItem>
        )}
      </ul>
    </nav>
  );
}
