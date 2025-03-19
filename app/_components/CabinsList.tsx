import { getCabins } from "../_services/data-service";
import CabinCard from "./CabinCard";

export default async function CabinsList() {
    const cabins = await getCabins();
    if (cabins.length <= 0) return null
    return (
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-14">
            {cabins.map((cabin) => (
                <CabinCard cabin={cabin} key={cabin.id} />
            ))}
        </div>
    );
}
