'use client'
import { useOptimistic } from "react";
import { Booking } from "../_types/booking";
import ReservationCard from "./ReservationCard";
import { deleteReservationAction } from "../_actions/reservationActions";
export default function ReservationsList({ bookings }: { bookings: Booking[] }) {
    
    const [optimisticBookings, optimisticDelete] = useOptimistic(bookings, (currentBookings:Booking[], bookingId:string)=>{
        return currentBookings.filter(booking => booking.id !== bookingId)
    })

    async function handleDelete(bookingId:string) {
        if (confirm('Are you sure you want to delete this reservation?')) {
            optimisticDelete(bookingId)
            await deleteReservationAction(bookingId)
        }
    }
    return (
        <ul className="space-y-6">
            {optimisticBookings.map((booking) => (
                <ReservationCard booking={booking} key={booking.id} onDelete={handleDelete}/>
            ))}
        </ul>
    );
}
