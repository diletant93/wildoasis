"use client"
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { Settings } from "../_types/settings";
import { Cabin } from "../_types/cabin";
import { useDateSelector } from "../_hooks/useDateSelector";
import { isPast } from "date-fns";


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
    <div className="flex flex-col justify-between flex-1 ">
      <DayPicker
        selected={displayRange}
        onSelect={handleRange}
        className="place-self-center"
        mode="range"
        min={minBookingLength + 1}
        max={maxBookingLength}
        startMonth={new Date()}
        endMonth={new Date(new Date().getFullYear(), 5 * 12)}
        captionLayout="dropdown"
        numberOfMonths={1}
        disabled={handleDisabled}
      />

      <div className="flex items-center justify-between px-8 bg-accent-500 text-primary-800 h-[72px]">
        <div className="flex items-center gap-6">
          <p className="flex gap-2 items-baseline">
            {discount > 0 ? (
              <>
                <span className="text-2xl">${regularPrice - discount}</span>
                <span className="line-through font-semibold text-primary-700">
                  ${regularPrice}
                </span>
              </>
            ) : (
              <span className="text-2xl">${regularPrice}</span>
            )}
            <span className="">/night</span>
          </p>
          {numberNights ? (
            <>
              <p className="bg-accent-600 px-3 py-2 text-2xl">
                <span>&times;</span> <span>{numberNights}</span>
              </p>
              <p>
                <span className="text-lg font-bold uppercase">Total</span>{" "}
                <span className="text-2xl font-semibold">${totalPrice}</span>
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
