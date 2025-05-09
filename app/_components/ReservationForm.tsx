"use client"
import { differenceInCalendarDays } from "date-fns";
import { useBookingDatesContext } from "../_context/BookingDatesContext";
import { Cabin } from "../_types/cabin";
import { ExtendedSession } from "../_types/extendedSession";
import Link from "next/link";
import { createBookingAction } from "../_actions/reservationActions";
import { PartialBooking } from "../_types/booking";
import SubmitButton from "./SubmitButton";
import { useActionToast } from "../_hooks/useActionToast";
import { useRouter } from "next/navigation";

function ReservationForm({ cabin, session }: { cabin: Cabin; session: ExtendedSession }) {

  const { range } = useBookingDatesContext()
  const actionToast = useActionToast()
  const router = useRouter()
  const { maxCapacity, regularPrice, discount, id } = cabin;
  const startDate = range?.from
  const endDate = range?.to
  const numberNights = differenceInCalendarDays(endDate || '', startDate || '')
  const cabinPrice = numberNights * (regularPrice - discount)

  const bookingData: PartialBooking = {
    startDate: startDate?.toISOString() || '',
    endDate: endDate?.toISOString() || '',
    numberNights,
    cabinPrice,
    cabinId: id,
  }
  const createBookingActionWithData = createBookingAction.bind(null, bookingData)
  async function createBookingWrapper(formData: FormData) {
    const response = await createBookingActionWithData(formData)
    actionToast(response)
    if (response.status === 'success') router.push('/cabins/thankyou')
  }
  if (!session.user.name || !session.user.image) return null
  return (
    <div className='flex-1 flex flex-col'>
      <div className='bg-primary-800 text-primary-300 px-2 md:px-4 flex justify-between items-center'>
        <p>Logged in as</p>

        <div className='flex gap-4 items-center'>
          <img
            referrerPolicy='no-referrer'
            className='h-8 rounded-full'
            src={session.user.image}
            alt={session?.user.name}
          />
          <Link href='/account/profile'>{session?.user.name}</Link>
        </div>
      </div>

      <form
        action={createBookingWrapper}
        className='bg-primary-900 py-10 px-3 md:px-5 text-lg flex gap-5 flex-col flex-1'>
        <div className='space-y-2 flex flex-col'>
          <label htmlFor='numGuests'>How many guests?</label>
          <select
            name='numGuests'
            id='numGuests'
            className='px-5 py-3 bg-primary-200 text-primary-800 shadow-sm rounded-sm'
            required
          >
            <option value='' key=''>
              Select number of guests...
            </option>
            {Array.from({ length: maxCapacity }, (_, i) => i + 1).map((x) => (
              <option value={x} key={x}>
                {x} {x === 1 ? 'guest' : 'guests'}
              </option>
            ))}
          </select>
        </div>

        <div className='space-y-2'>
          <label htmlFor='observations'>
            Anything we should know about your stay?
          </label>
          <textarea
            name='observations'
            id='observations'
            className='px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm'
            placeholder='Any pets, allergies, special requirements, etc.?'
          />
        </div>

        <div className='flex justify-end items-center gap-6'>
          {!(startDate && endDate) ? <p className='text-primary-300 text-base'>Start by selecting dates</p> :
            <SubmitButton>Reserve now</SubmitButton>}
        </div>
      </form>
    </div>
  );
}

export default ReservationForm;
