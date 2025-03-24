import { differenceInCalendarDays, isPast, isSameDay, isWithinInterval } from "date-fns";
import { useBookingDatesContext } from "../_context/BookingDatesContext";
import { Cabin } from "../_types/cabin";
import { Settings } from "../_types/settings";
import { DateRange } from "react-day-picker";

export function useDateSelector(cabin: Cabin, settings: Settings, bookedDates:Date[]) {
  const { range, handleRange } = useBookingDatesContext()
  const { regularPrice, discount } = cabin
  const cabinPrice = regularPrice - discount

  let totalPrice: number = 0;
  let numberNights: number = 0
  if (range?.from && range.to) {
    numberNights = differenceInCalendarDays(range?.to, range?.from)
    totalPrice = numberNights * cabinPrice
  }

  function isAlreadyBooked(range: DateRange | undefined, datesArr: Date[]) {
    if (range &&range.from && range.to) {
      return datesArr.some((date: Date) => 
        isWithinInterval(date, { 
            //not working as expected (we checked above the range from and to but still telling us it can possibly be undefined)
            //so to buypass we 'possibly' return new Date() even tho it will never work 
          start: range!.from || new Date(),
          end:range!.to || new Date()
        })
      );
    }
    return false;
  }
  const displayRange = isAlreadyBooked(range, bookedDates) ? undefined : range
  function handleDisabled(currentDate:Date){
    return isPast(currentDate) || bookedDates.some(date => isSameDay(date, currentDate)) 
  }
  const { minBookingLength, maxBookingLength } = settings;
  return { totalPrice, discount, regularPrice, numberNights, displayRange, handleRange, minBookingLength, maxBookingLength,handleDisabled }
}