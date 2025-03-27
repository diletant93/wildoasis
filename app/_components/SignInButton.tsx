import Image from "next/image";
import { signInAction } from "../_actions/authActions";
function SignInButton() {
  return (
    <form action={signInAction}>
      <button className='flex items-center gap-3 xs:gap-6 text-lg border border-primary-300 px-8 xs:px-10 py-4 font-medium hover:bg-primary-400 hover:text-accent-200 transition-colors duration-300 cursor-pointer'>
        <Image
          src='https://authjs.dev/img/providers/google.svg'
          alt='Google logo'
          height='24'
          width='24'
          className="-translate-y-1"
        />
        <span>Continue with Google</span>
      </button>
    </form>
  );
}

export default SignInButton;
