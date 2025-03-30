import { auth } from "../_lib/auth";

export default async function AuthCheck() {
  const response = await auth()
  return (
    <div className="fixed top-1/2 left-1/2">
      {response?.user.email}
    </div>
  );
}
