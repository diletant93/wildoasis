"use client"
import { ArrowRightOnRectangleIcon } from '@heroicons/react/24/solid';
import { signOutAction } from '../_actions/authActions';
import { useActionToast } from '../_hooks/useActionToast';

function SignOutButton() {
  const actionToast = useActionToast()
  async function handleSignIn() {
    const response = await signOutAction()
    actionToast(response)
  }
  return (
    <form action={handleSignIn}>
      <button className='xs:py-3 xs:px-5 hover:bg-primary-900 hover:text-primary-100 transition-colors flex items-center gap-4 font-semibold text-primary-200 w-full cursor-pointer'>
        <ArrowRightOnRectangleIcon className='h-5 w-5 text-primary-600' />
        <span className='hidden md:inline'>Sign out</span>
      </button>
    </form>
  );
}

export default SignOutButton;
