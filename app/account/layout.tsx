import SideNavigation from "../_components/SideNavigation";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex-1 grid grid-cols-[auto_1fr] h-full gap-5 lg:gap-20 relative">
      <SideNavigation />
      {children}
    </div>
  );
}
