import { BookingDatesProvider } from "../_context/BookingDatesContext";
import { auth } from "../_lib/auth";
import { getBookedDatesByCabinId, getSettings } from "../_services/data-service";
import { Cabin } from "../_types/cabin";
import DateSelector from "./DateSelector";
import ReservationForm from "./ReservationForm";
import SignInButton from "./SignInButton";

export default async function BookingSection({ cabin }: { cabin: Cabin }) {
    const [settings, bookingDates] = await Promise.all([getSettings(),
    getBookedDatesByCabinId(cabin.id)])
    const session = await auth()
    if(!session) return <SignInButton/>
    return (
        <BookingDatesProvider>
            <div className="flex gap-10 w-full flex-col md:flex-row">
                <DateSelector settings={settings} bookingDates={bookingDates} cabin={cabin} />
                <ReservationForm cabin={cabin}  session={session}/>
            </div>
        </BookingDatesProvider>
    );
}
