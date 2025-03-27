import { User } from "lucide-react";

export default function GuestCount({ numGuests }: { numGuests: number }) {
    return (
        <>
            <p className='text-lg text-primary-300 hidden lg:block'>
            {numGuests} guest{numGuests > 1 && 's'}
            </p>
            <div className="flex gap-2 items-center lg:hidden">
                {numGuests}
                <User className="!h-10 aspect-square"/>
            </div>
        </>
    );
}
