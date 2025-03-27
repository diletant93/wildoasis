import ReservationCard from "@/app/_components/ReservationCard";
import ReservationsList from "@/app/_components/ReservationsList";
import { auth } from "@/app/_lib/auth";
import { getBookings } from "@/app/_services/data-service";
import { Metadata } from "next";
import Link from "next/link";

// import ReservationCard from "./ReservationCard";
export const metadata : Metadata = {
  title:'Reservations'
}
export default async function Page() {
  const session = await auth()
  if(!session?.user.guestId) return null

  const {guestId} = session.user
  const bookings = await getBookings(guestId)
  console.log(bookings)
  return (
    <div className="">
      <h2 className="font-semibold text-2xl text-accent-400 my-7">
        Your reservations
      </h2>

      {bookings.length === 0 ? (
        <p className="text-lg">
          You have no reservations yet. Check out our{" "}
          <Link className="underline text-accent-500" href="/cabins">
            luxury cabins &rarr;
          </Link>
        </p>
      ) : (
        <ReservationsList bookings={bookings}/>
      )}
    </div>
  );
}
