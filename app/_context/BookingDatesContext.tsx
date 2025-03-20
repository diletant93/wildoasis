'use client'
import { createContext, useContext, useState } from "react";
import { DateRange } from "react-day-picker";
type BookingDatesContextState = {
    range: DateRange | undefined;
    handleRange: (range: DateRange | undefined) => void
}
const INITIAL_STATE: BookingDatesContextState = {
    range: undefined,
    handleRange: () => { }
}
const BookingDatesContext = createContext(INITIAL_STATE)
function BookingDatesProvider({ children }: { children: React.ReactNode }) {
    const [range, setRange] = useState<DateRange | undefined>(undefined)
    const value = {
        range,
        handleRange: (range: DateRange | undefined) => setRange(range)
    }
    return (
        <BookingDatesContext.Provider value={value} >
            {children}
        </BookingDatesContext.Provider>
    )

}
function useBookingDatesContext() {
    const context = useContext<BookingDatesContextState>(BookingDatesContext)
    if (context === undefined) throw new Error('CitiesContext was used outside of CitiesProvider');
    return context;
}
export { BookingDatesProvider, useBookingDatesContext }