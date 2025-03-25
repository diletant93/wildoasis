"use server"
import { revalidatePath } from "next/cache";
import { auth } from "../_lib/auth"
import supabase from "../_lib/supabase";
import { createBooking, getBookings } from "../_services/data-service";
import { Booking, PartialBooking } from "../_types/booking";
import { redirect } from "next/navigation";
import { ActionResponse } from "../_types/actionResponse";

export async function deleteReservationAction(bookingId:string) : Promise<ActionResponse>{
    const session = await auth()
    if (!session?.user.guestId) {
        return {
            status:'error',
            message:'You are not authenticated'
        }
    }
    
    const guestBookings = await getBookings(session.user.guestId)
    const bookingIds = guestBookings.map(booking => booking.id)
    if(!bookingIds.includes(bookingId)){
        return {
            status:'error',
            message:'You are not allowed to delete this booking'
        }
    } 
            
    const {error } = await supabase.from('bookings').delete().eq('id', bookingId);
    
    if (error) {
        console.error(error);
        return {
            status:'error',
            message:'Booking could not be deleted'
        }
    }
    
    revalidatePath('/account/reservations')
    return {
        status:'success',
        message:'Reservation deleted',
    }
}
export async function updateReservationAction(bookingId: string, formData: FormData): Promise<ActionResponse> {
    const session = await auth();
    if (!session?.user.guestId) {
        return {
            status: 'error',
            message: 'You are not authenticated',
        };
    }

    const guestBookings = await getBookings(session.user.guestId);
    const bookingIds = guestBookings.map(booking => booking.id);
    if (!bookingIds.includes(bookingId)) {
        return {
            status: 'error',
            message: 'You are not allowed to update this booking',
        };
    }

    const booking = Object.fromEntries(formData) as unknown as Booking;
    console.log(booking);

    const { error } = await supabase
        .from('bookings')
        .update(booking)
        .eq('id', bookingId);

    if (error) {
        console.error(error);
        return {
            status: 'error',
            message: 'Booking could not be updated',
        };
    }

    revalidatePath('/account/reservations');
    return {
        status: 'success',
        message: 'Reservation updated successfully',
    };

}

export async function createBookingAction(bookingData:PartialBooking,formData: FormData){
    const session = await auth()
    if (!session?.user.guestId) throw new Error('User is not authenticated')
    const formDataValues = {...Object.fromEntries(formData.entries()) as unknown as {numGuests:number; observations:string;}}
    formDataValues.numGuests = +formDataValues.numGuests
    const newBooking:Booking = {
        ...bookingData,
        numGuests:formDataValues.numGuests,
        guestId:session.user.guestId,
        observations:formDataValues.observations.slice(0,1000),
        totalPrice:bookingData.cabinPrice,
        status:'unconfirmed',
        extrasPrice:0,
        isPaid:false,
        hasBreakfast:false,
    }
    await createBooking(newBooking)
    revalidatePath('/account/reservations')
    revalidatePath(`/cabins/${bookingData.cabinId}`)
    redirect('/cabins/thankyou')
}