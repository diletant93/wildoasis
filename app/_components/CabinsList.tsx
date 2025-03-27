import { getCabins } from "../_services/data-service";
import { Cabin, CabinFilter } from "../_types/cabin";
import CabinCard from "./CabinCard";

export default async function CabinsList({ filter }: { filter: CabinFilter }) {
    const cabins = await getCabins();
    if (cabins.length <= 0) return null
    const displayedCabins = cabins.filter(cabin => {
        switch (filter) {
            case 'small': return cabin.maxCapacity <= 3
            case 'medium': return cabin.maxCapacity > 3 && cabin.maxCapacity < 8
            case 'large': return cabin.maxCapacity >= 8
            default: return true
        }
    });
    return (
        <div className="grid sm:grid-cols-1 md:grid-cols-2 p-1  sm:p-0 gap-8 lg:gap-12 xl:gap-14 ">
            {displayedCabins.map((cabin) => (
                <CabinCard cabin={cabin} key={cabin.id} />
            ))}
        </div>
    );
}
