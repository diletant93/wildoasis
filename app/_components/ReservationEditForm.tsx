'use client'
import { useRouter } from "next/navigation";
import { updateReservationAction } from "../_actions/reservationActions";
import { Booking } from "../_types/booking";
import SubmitButton from "./SubmitButton";

import { toast } from "sonner";

export default function ReservationEditForm({booking, maxCapacity}:{booking:Booking, maxCapacity:number}) {
    const {numGuests, id:bookingId, observations} = booking
    const router = useRouter()
      async function handleUpdate(formData: FormData){
           const response = await updateReservationAction(bookingId || '', formData)
           
           if(response.status === 'error'){
            toast.error(response.message)
           }
           if(response.status === 'success'){
            toast.success(response.message)
            router.push('/account/reservations')
           }
        }
    return (
        <form
            action={handleUpdate}
            className="bg-primary-900 py-8 px-12 text-lg flex gap-6 flex-col">
            <div className="space-y-2">
                <label htmlFor="numGuests">How many guests?</label>
                <select
                    name="numGuests"
                    id="numGuests"
                    className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm"
                    defaultValue={numGuests}
                    required
                >
                    <option value="" key="">
                        {`${numGuests} ${numGuests > 1 ? 'guests' : 'guest'}` || 'Select number of guest...'}
                    </option>
                    {Array.from({ length: maxCapacity }, (_, i) => i + 1).map((x) => (
                        <option value={x} key={x}>
                            {x} {x === 1 ? "guest" : "guests"}
                        </option>
                    ))}
                </select>
            </div>

            <div className="space-y-2">
                <label htmlFor="observations">
                    Anything we should know about your stay?
                </label>
                <textarea
                    name="observations"
                    className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm"
                    defaultValue={observations}
                />
            </div>

            <div className="flex justify-end items-center gap-6">
                <SubmitButton>Update reservation</SubmitButton>
            </div>
        </form>
    );
}
