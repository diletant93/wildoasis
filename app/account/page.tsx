import { auth } from "../_lib/auth";
export default async function Account() {
  const session = await auth()
  console.log(session)
  if(!session?.user?.name) return null
  return (
    <div className="h-full text-accent-500 lg:text-xl md:text-xl capitalize p-2 pt-5 md:p-0">
      Hello, {session.user.name}
    </div>
  );
}
