'use client'
import { PencilSquareIcon } from '@heroicons/react/24/solid';
import { format, formatDistance, isPast, isToday, parseISO } from 'date-fns';
import DeleteReservation from './DeleteReservation';
import { Booking } from '../_types/booking';
import Image from 'next/image';
import Link from 'next/link';
import StayPeriod from './StayPeriod';
import GuestCount from './GuestCount';
import BookingDate from './BookingDate';

export const formatDistanceFromNow = (dateStr: string) =>
  formatDistance(parseISO(dateStr), new Date(), {
    addSuffix: true,
  }).replace('about ', '');

function ReservationCard({ booking, onDelete }: { booking: Booking; onDelete:(bookingId:string)=>Promise<void>}) {
  const {
    id,
    guestId,
    startDate,
    endDate,
    numberNights,
    totalPrice,
    numGuests,
    status,
    created_at,
    cabins,
  } = booking;

  //since TS thinks the cabins is an array of {name,string} but it's actually an object of {name,string}
  //we need to bypass the TS behavior (clearly the supabase fault)

  if(!cabins || !id || !created_at) return null
  let name: string = 'name' in cabins ? cabins.name as string : '';
  let image: string = 'image' in cabins ? cabins.image as string : '';


  return (
    <div className='flex border border-primary-800 flex-col xs:flex-row'>
      <div className='relative xs:h-35 lg:h-40 aspect-video xs:aspect-square'>
        <Image
          src={image}
          alt={`Cabin ${name}`}
          fill
          className='object-cover border-r border-primary-800'
        />
      </div>

      <div className='flex-grow px-4 lg:px-6 py-3 flex flex-col'>
        <div className='flex items-center justify-between'>
          <h3 className='text-xl font-semibold'>
            {numberNights} nights
          </h3>
          {isPast(new Date(startDate)) ? (
            <span className='bg-yellow-800 text-yellow-200 h-7 px-3 uppercase text-[10px] xs:text-xs font-bold flex items-center rounded-sm'>
              past
            </span>
          ) : (
            <span className='bg-green-800 text-green-200 h-7 px-3 uppercase text-[10px] xs:text-xs  font-bold flex items-center rounded-sm'>
              upcoming
            </span>
          )}
        </div>

       <StayPeriod startDate={startDate} endDate={endDate}/>

        <div className='flex gap-2  mt-auto items-baseline flex-wrap xs:flex-nowrap xs:gap-5'>
          <p className='text-xl font-semibold text-accent-400'>${totalPrice}</p>
          <p className='text-primary-300'>&bull;</p>
          <GuestCount numGuests={numGuests}/>
          <BookingDate created_at={created_at}/>
        </div>
      </div>

      {!isPast(startDate) &&
        <div className='flex xs:flex-col items-center xs:justify-center border-t xs:border-t-0 xs:border-l border-primary-800 '>
          <Link
            href={`/account/reservations/edit/${id}`}
            className='group flex-1 w-full justify-center  xs:flex-none flex items-center xs:px-5 xs:py-0 gap-2 uppercase text-xs font-bold text-primary-300 border-r xs:border-r-0 xs:border-b border-primary-800 p-3  md:px-3 xs:h-1/2  flex-grow hover:bg-accent-600 transition-colors hover:text-primary-900'
          >
            <PencilSquareIcon className='h-5 w-5 text-primary-600 group-hover:text-primary-800 transition-colors' />
            <span className='mt-1 hidden lg:inline'>Edit</span>
          </Link>
          <DeleteReservation bookingId={id} onDelete={onDelete}/>
        </div>}
    </div>
  );
}

export default ReservationCard;
