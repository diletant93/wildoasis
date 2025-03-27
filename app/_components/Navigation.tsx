import { navigationItems } from "../_constants/navigation";
import NavigationItem from "./NavigationItem";
import { auth } from "../_lib/auth";
import Image from "next/image";

export default async function Navigation() {
  const session = await auth()
  return (
    <nav className="z-10 text-xl flex-1 sm:flex-none">
      <ul className="flex gap-3 md:gap-10 items-center">
        {navigationItems.map(item => item.label === 'account' && session?.user?.image ? (
          <NavigationItem key={item.label} path={item.path} iconForSmallDevices={item.iconForSmallDevices}>
            <div className="w-[30px] 2xl:w-[50px] aspect-square relative 2xl:mr-2">
              <Image
                src={session?.user.image}
                fill
                alt="user avatar"
                className="rounded-full -translate-y-[3px]"
              />
            </div>
            <span>
              {session.user.name}
            </span>
          </NavigationItem>
        ) : <NavigationItem key={item.label} path={item.path} iconForSmallDevices={item.iconForSmallDevices}>{item.label}</NavigationItem>
        )}
      </ul>
    </nav>
  );
}
