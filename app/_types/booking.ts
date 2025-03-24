type BookingStatus = 'unconfirmed' | 'checked-out' | 'checked-in'

export type Booking = {
  id: string;
  created_at: string;
  startDate: string;
  endDate: string;
  numberNights: number;
  numGuests: number;
  totalPrice: number;
  guestId: string;
  cabinId: string;
  status: BookingStatus;
  observations?:string;
  cabins: {
      name: string;
      image: string;
  }[];
  };
  