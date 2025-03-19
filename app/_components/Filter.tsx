'use client';
import { useState } from "react";
import { FilterOption } from "../_types/filter";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function Filter() {
    const [option, setOption] = useState<FilterOption>('all')
    const searchParams = useSearchParams()
    const router = useRouter()
    const pathname = usePathname()
    function handleFilter(filter:FilterOption){
        setOption(filter)
        const params = new URLSearchParams(searchParams)
        params.set('capacity', filter)
        router.replace(`${pathname}?${params.toString()}`,{scroll:false})
    }
    return (
        <div className="flex gap-3   my-5 border border-primary-700">
            <button onClick={()=>handleFilter('all')} className="px-4 py-3 hover:bg-primary-900 cursor-pointer">
                All cabins
            </button>
            <button onClick={()=>handleFilter('small')}  className="px-4 py-3 hover:bg-primary-900 cursor-pointer">
                1&mdash;3
            </button>
            <button onClick={()=>handleFilter('medium')}  className="px-4 py-3 hover:bg-primary-900 cursor-pointer">
                4&mdash;7
            </button>
            <button onClick={()=>handleFilter('large')}  className="px-4 py-3 hover:bg-primary-900 cursor-pointer">
                8&mdash;12
            </button>
        </div>
    );
}
