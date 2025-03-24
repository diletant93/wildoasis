import { BookingDatesProvider } from "../_context/BookingDatesContext";
import { getBookedDatesByCabinId, getSettings } from "../_services/data-service";
import { Cabin } from "../_types/cabin";
import DateSelector from "./DateSelector";
import ReservationForm from "./ReservationForm";

export default async function BookingSection({ cabin }: { cabin: Cabin }) {
    const [settings, bookingDates] = await Promise.all([getSettings(),
    getBookedDatesByCabinId(cabin.id)])
    return (
        <BookingDatesProvider>
            <div className="flex gap-10 items-center w-full">
                <DateSelector settings={settings} bookingDates={bookingDates} cabin={cabin} />
                <ReservationForm cabin={cabin} />
            </div>
        </BookingDatesProvider>
    );
}
