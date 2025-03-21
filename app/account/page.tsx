import axios from "axios";
import { auth } from "../_lib/auth";
export default async function Account() {
  const response = await auth()
  if(!response?.user?.name) return null
  return (
    <div className="h-full text-accent-500 text-xl capitalize">
      Hello, {response.user.name}
    </div>
  );
}
