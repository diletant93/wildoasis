"use client"
import { ErrorPageProps } from "./_types/error";

export default function ErrorPage({error, reset}:ErrorPageProps) {
    return (
      <main className='flex justify-center items-center flex-col gap-6'>
        <h1 className='text-3xl font-semibold'>Something went wrong!</h1>
        <p className='text-lg'>{error.message}</p>
  
        <button onClick={reset} className='inline-block bg-accent-500 text-primary-800 px-6 py-3 text-lg cursor-pointer hover:bg-accent-400 duration-300 transition-colors'>
          Try again
        </button>
      </main>
    );
  }
  