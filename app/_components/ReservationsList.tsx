'use client'
import { useOptimistic, useTransition } from "react";
import { Booking } from "../_types/booking";
import { deleteReservationAction } from "../_actions/reservationActions";
import { useActionToast } from "../_hooks/useActionToast";
import ReservationCard from "./ReservationCard";

export default function ReservationsList({ bookings }: { bookings: Booking[] }) {
    const [optimisticBookings, optimisticDelete] = useOptimistic(
        bookings,
        (currentBookings: Booking[], bookingId: string) => {
            return currentBookings.filter(booking => booking.id !== bookingId)
        }
    );

    const actionToast = useActionToast();
    const [_, startTransition] = useTransition()
    async function handleDelete(bookingId: string) {
        startTransition(async()=>{
            if (confirm('Are you sure you want to delete this reservation?')) {
                optimisticDelete(bookingId);
                const response = await deleteReservationAction(bookingId);
                actionToast(response);
            }
        })
    }

    return (
        <ul className="space-y-6 p-1">
            {optimisticBookings.map((booking) => (
                <ReservationCard
                    booking={booking}
                    key={booking.id}
                    onDelete={handleDelete}
                />
            ))}
        </ul>
    );
}