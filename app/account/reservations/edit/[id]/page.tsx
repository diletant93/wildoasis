import ReservationEditForm from "@/app/_components/ReservationEditForm";
import { getBooking, getCabin } from "@/app/_services/data-service";

export default async function ReservationEdit({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params
    const booking = await getBooking(id)
    const {cabinId , id:bookingId} = booking
    const { maxCapacity } = await getCabin(cabinId)
    return (
        <div>
            <h2 className="font-semibold text-2xl text-accent-400 mb-7">
                Edit Reservation #{bookingId}
            </h2>
           <ReservationEditForm booking={booking} maxCapacity={maxCapacity}/>
        </div>
    );
}
