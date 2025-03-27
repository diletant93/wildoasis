import { format } from "date-fns";

export default function BookingDate({created_at}:{created_at:string}) {
    return (
        <p className='xs:ml-auto text-sm text-primary-400'>
             {format(new Date(created_at), 'MMM dd, p')}
        </p>
    );
}
