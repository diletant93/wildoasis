'use client';
import { useState } from "react";
import { FilterOption } from "../_types/filter";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { filterOptions } from "../_constants/filter";

export default function Filter() {
    const [option, setOption] = useState<FilterOption>('all')
    const searchParams = useSearchParams()
    const router = useRouter()
    const pathname = usePathname()

    const activeFilter = searchParams.get('capacity') ?? 'all' as FilterOption
    function handleFilter(filter: FilterOption) {
        setOption(filter)
        const params = new URLSearchParams(searchParams)
        params.set('capacity', filter)
        router.replace(`${pathname}?${params.toString()}`, { scroll: false })
    }

    return (
        <div className="flex  my-5 border border-primary-700">
            {filterOptions.map(option => (
                <button key={option.value} onClick={() => handleFilter(option.value)} className={`px-4 py-3 hover:bg-primary-700 cursor-pointer ${option.value === activeFilter && 'bg-primary-700'}`}>
                    {option.label}
                </button>
            ))} 
        </div>
    );
}
