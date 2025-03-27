import { Metadata } from "next";
import CabinsList from "../_components/CabinsList";
import { CabinFilter } from "../_types/cabin";
import Filter from "../_components/Filter";
import CabinDescription from "../_components/CabinDescription";


export const metadata: Metadata = {
  title: 'Cabins'
}
export async function generateStaticParams(){
  return [
    {capacity:'all'},
    {capacity:'small'},
    {capacity:'medium'},
    {capacity:'large'},
  ]
}
type CabinsProps = {
  searchParams: Promise<{ capacity?: CabinFilter }>
}

export default async function Cabins({ searchParams }: CabinsProps) {
  const filter: CabinFilter = (await searchParams).capacity || 'all'
  return (
      <div>
        <h1 className="text-2xl md:text-4xl mb-5 text-accent-400 font-medium px-4 md:px-0 2xl:text-6xl">
          Our Luxury Cabins
        </h1>
        <CabinDescription/>
        <div className="px-1 flex justify-end">
          <Filter />
        </div>
          <CabinsList filter={filter} />
      </div>
  );
}
