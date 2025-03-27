'use client';
import { useState } from "react";
import { FilterOption } from "../_types/filter";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { filterOptions } from "../_constants/filter";
export default function Filter() {
    const [_, setOption] = useState<FilterOption>('all')

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
                <button
                    key={option.value}
                    onClick={() => handleFilter(option.value)}
                    className={`px-2  py-3 hover:bg-primary-700 cursor-pointer sm:px-4 2xl:text-2xl 2xl:px-5 2xl:py-4 ${option.value === activeFilter && 'bg-primary-700'}`}>
                    {option.label}
                </button>
            ))}
        </div>
    );
}
