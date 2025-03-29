"use client"
import "react-day-picker/dist/style.css";
import { Settings } from "../_types/settings";
import { Cabin } from "../_types/cabin";
import { useDateSelector } from "../_hooks/useDateSelector";
import { Calendar } from "@/components/ui/calendar";

type DateSelectorProps = {
  settings: Settings;
  bookingDates: Date[];
  cabin: Cabin;
}

function DateSelector({ settings, bookingDates, cabin }: DateSelectorProps) {
  const { displayRange, handleRange,
    totalPrice, numberNights,
    discount, regularPrice,
    minBookingLength, maxBookingLength,
    handleDisabled
  } = useDateSelector(cabin, settings, bookingDates)
  return (
    <div className="flex flex-col justify-between flex-1 self-stretch ">
      <Calendar
        mode="range"
        selected={displayRange}
        onSelect={handleRange}
        className="rounded-md border place-self-center !p-5 sm:!p-10"
        classNames={{
          nav_button: '!w-10 !h-10 flex items-center justify-center hover:!bg-primary-700 !rounded-full',
          day_selected: '!bg-primary-600',
          cell: '!text-sm',
          caption_label: "text-xl font-bold",

        }}
        fromDate={new Date()}
        toDate={new Date(new Date().setFullYear(new Date().getFullYear() + 1))}
        min={2}
        max={maxBookingLength}
        disabled={handleDisabled}
       
      />
      <div className="flex items-center justify-between px-3 bg-accent-500 text-primary-800 h-[72px]">
        <div className="flex items-center gap-2 md:gap-6">
          <p className="flex gap-2 items-baseline">
            {discount > 0 ? (
              <>
                <span className="text-xl">${regularPrice - discount}</span>
                <span className="text-sm line-through font-semibold text-primary-700">
                  ${regularPrice}
                </span>
              </>
            ) : (
              <span className="text-2xl">${regularPrice}</span>
            )}
            <span className="">{!displayRange?.to && '/night'}</span>
          </p>
          {numberNights ? (
            <>
              <p className="bg-accent-600 px-3 py-2 text-2xl">
                <span>&times;</span> <span>{numberNights}</span>
              </p>
              <p>
                <span className="text-sm md:text-lg font-bold uppercase">Total</span>{" "}
                <span className="text-lg md:text-2xl font-semibold">${totalPrice}</span>
              </p>
            </>
          ) : null}
        </div>

        {displayRange && (displayRange.from || displayRange.to) ? (
          <button
            className="border border-primary-800 py-3 px-4 text-sm font-semibold cursor-pointer"
            onClick={() => handleRange(undefined)}
          >
            Clear
          </button>
        ) : null}
      </div>
    </div>
  );
}

export default DateSelector;
