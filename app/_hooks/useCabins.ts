import { useQuery } from "@tanstack/react-query";
import { getCabins } from "../_services/data-service";

export function useCabins(filter:string | undefined){
    const filterValue = filter || 'all'
    const {data:cabins, isLoading:isLoadingCabins} = useQuery({
        queryKey:['cabins',filterValue],
        queryFn:getCabins
    })
    return {cabins, isLoadingCabins}
}