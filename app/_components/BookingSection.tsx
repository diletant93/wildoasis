import { getBookedDatesByCabinId, getSettings } from "../_services/data-service";
import DateSelector from "./DateSelector";
import ReservationForm from "./ReservationForm";

export default async function BookingSection({ id }: { id: string }) {
    const [settings, bookingDates] = await Promise.all([getSettings(),
    getBookedDatesByCabinId(id)])
    return (
        <div className="flex gap-10 items-center">
            <DateSelector {...settings} />
            <ReservationForm />
        </div>
    );
}
