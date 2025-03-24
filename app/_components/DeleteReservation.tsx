"use client"
import { TrashIcon } from '@heroicons/react/24/solid';
import { deleteReservationAction } from '../_actions/reservationActions';
import { useTransition } from 'react';
import SpinnerMini from './SpinnerMini';

function DeleteReservation({ bookingId }: { bookingId: string }) {
  const [isPending, startTransition] = useTransition()
  function handleDelete() {
    if (confirm('Are you sure you want to delete this reservation?')) {
      startTransition(async () => await deleteReservationAction(bookingId))
    }
  }
  return (
    <button
      className='group flex items-center gap-2 uppercase text-xs font-bold text-primary-300 flex-grow px-3 hover:bg-accent-600 transition-colors hover:text-primary-900 cursor-pointer'
      onClick={handleDelete}
      disabled={isPending}
    >
      <TrashIcon className='h-5 w-5 text-primary-600 group-hover:text-primary-800 transition-colors' />
      {isPending ? (<div className='flex gap-2 items-center'><span className=""><SpinnerMini /></span> <span>{'Submitting'}</span></div>) : 'Delete'}
    </button>
  );
}

export default DeleteReservation;
