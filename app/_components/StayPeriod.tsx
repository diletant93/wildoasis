import { format, isToday } from "date-fns";
import { formatDistanceFromNow } from "./ReservationCard";

export default function StayPeriod({ startDate, endDate }: { startDate: string; endDate: string }) {
    return (
        <>
            <p className='text-lg text-primary-300  my-1 hidden lg:block'>
                {format(new Date(startDate), 'EEE, MMM dd yyyy')} (
                {isToday(new Date(startDate))
                    ? 'Today'
                    : formatDistanceFromNow(startDate)}
                ) &mdash; {format(new Date(endDate), 'EEE, MMM dd yyyy')}
            </p>
            <p className='text-base text-primary-300 my-1 hidden xs:block lg:hidden'>
                {format(new Date(startDate), 'MMM dd, yyyy')} {' '}
                &mdash; {format(new Date(endDate), 'MMM dd, yyyy')}
            </p>
            <p className="text-sm text-primary-300 my-1 block xs:hidden">
                {format(new Date(startDate), 'MM/dd/yyyy')} {' '}
                &mdash; {format(new Date(endDate), 'MM/dd/yyyy')}
            </p>
        </>
    );
}
