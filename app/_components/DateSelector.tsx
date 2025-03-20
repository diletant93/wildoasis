"use client"
import { differenceInCalendarDays, isWithinInterval } from "date-fns";
import { DayPicker } from "react-day-picker";
import { DateRange } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { Settings } from "../_types/settings";
import { Cabin } from "../_types/cabin";
import { useState } from "react";
import { useBookingDatesContext } from "../_context/BookingDatesContext";

// function isAlreadyBooked(range:DateRange, datesArr) {
//   return (
//     range.from &&
//     range.to &&
//     datesArr.some((date: Date) =>
//       isWithinInterval(date, { start: range.from, end: range.to })
//     )
//   );
// }
type DateSelectorProps = {
  settings: Settings;
  bookingDates: Date[];
  cabin: Cabin;
}
function DateSelector({ settings, bookingDates, cabin }: DateSelectorProps) {
  // CHANGE
  const regularPrice = 23;
  const discount = 23;
  const numNights = 23;
  const cabinPrice = 23;
  const { range, handleRange } = useBookingDatesContext()
  console.log(range)
  const { minBookingLength, maxBookingLength } = settings;
  let totalPrice: number = 0;
  if (range?.from && range.to) {
    totalPrice = differenceInCalendarDays(range?.to, range?.from) * cabinPrice
  }
  return (
    <div className="flex flex-col justify-between">
      <DayPicker
        selected={range}
        onSelect={handleRange}
        className="place-self-center"
        mode="range"
        min={minBookingLength + 1}
        max={maxBookingLength}
        startMonth={new Date()}
        hidden={{ before: new Date() }}
        endMonth={new Date(new Date().getFullYear(), 5 * 12)}
        captionLayout="dropdown"
        numberOfMonths={1}
      />

      <div className="flex items-center justify-between px-8 bg-accent-500 text-primary-800 h-[72px]">
        <div className="flex items-baseline gap-6">
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
          {numNights ? (
            <>
              <p className="bg-accent-600 px-3 py-2 text-2xl">
                <span>&times;</span> <span>{numNights}</span>
              </p>
              <p>
                <span className="text-lg font-bold uppercase">Total</span>{" "}
                <span className="text-2xl font-semibold">${totalPrice}</span>
              </p>
            </>
          ) : null}
        </div>

        {range && (range.from || range.to) ? (
          <button
            className="border border-primary-800 py-3 px-4 text-sm font-semibold cursor-pointer"
            onClick={()=>handleRange(undefined)}
          >
            Clear
          </button>
        ) : null}
      </div>
    </div>
  );
}

export default DateSelector;
