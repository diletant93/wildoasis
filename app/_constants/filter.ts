import { FilterOption } from "../_types/filter";

export const filterOptions: { label: string; value: FilterOption }[] = [
    { label: 'All cabins', value: 'all' },
    { label: '1-3 guests', value: 'small' },
    { label: '3-8 guests', value: 'medium' },
    { label: '8-12 guests', value: 'large' },
  ];