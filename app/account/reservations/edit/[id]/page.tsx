import { updateReservationAction } from "@/app/_actions/reservationActions";
import SubmitButton from "@/app/_components/SubmitButton";
import { getBooking, getCabin } from "@/app/_services/data-service";

export default async function ReservationEdit({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params
    const booking = await getBooking(id)
    const {numGuests, cabinId , id:bookingId, observations} = booking
    const { maxCapacity } = await getCabin(cabinId)
    async function handleUpdate(formData: FormData){
        'use server'
        await updateReservationAction(bookingId, formData)
    }
    return (
        <div>
            <h2 className="font-semibold text-2xl text-accent-400 mb-7">
                Edit Reservation #{bookingId}
            </h2>

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
                            {`${numGuests} ${numGuests>1? 'guests' :'guest'}` || 'Select number of guest...'}
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
        </div>
    );
}
