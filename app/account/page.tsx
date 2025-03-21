import { auth } from "../_lib/auth";
export default async function Account() {
  const session = await auth()
  console.log(session)
  if(!session?.user?.name) return null
  return (
    <div className="h-full text-accent-500 text-xl capitalize">
      Hello, {session.user.name}
    </div>
  );
}
