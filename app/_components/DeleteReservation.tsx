"use client"
import { TrashIcon } from '@heroicons/react/24/solid';
import { useTransition } from 'react';
import SpinnerMini from './SpinnerMini';

function DeleteReservation({ bookingId, onDelete }: { bookingId: string, onDelete: (bookingId: string) => Promise<void> }) {
  const [isPending, startTransition] = useTransition()
  return (
    <button
      className='group flex items-center gap-2 uppercase text-xs font-bold text-primary-300 flex-grow px-3 hover:bg-accent-600 transition-colors hover:text-primary-900 cursor-pointer'
      onClick={async () => await onDelete(bookingId)}
      disabled={isPending}
    >
      {isPending ?
        (<div className='flex gap-2 items-center'><span className=""><SpinnerMini /></span> <span>{'Deleting'}</span></div>)
        : (<><TrashIcon className='h-5 w-5 text-primary-600 group-hover:text-primary-800 transition-colors' />{'Delete'}</>)}
    </button>
  );
}

export default DeleteReservation;
