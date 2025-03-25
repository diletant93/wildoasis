export type Cabin = {
    id: string;
    name: string;
    maxCapacity: number;
    regularPrice: number;
    discount: number;
    description:string;
    image: string;
  };
export type CabinFilter = 'all' | 'small' | 'medium' | 'large' | string