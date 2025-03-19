import { Metadata } from "next";
import CabinsList from "../_components/CabinsList";
import { Suspense } from "react";
import Spinner from "../_components/Spinner";
import { CabinFilter } from "../_types/cabin";
import Filter from "../_components/Filter";

export const metadata: Metadata = {
  title: 'Cabins'
}
type CabinsProps = {
  searchParams: Promise<{ capacity?: string }>
}

export default async function Cabins({ searchParams }: CabinsProps) {
  const filter: CabinFilter = (await searchParams).capacity || 'all'
  return (
    <div>
      <h1 className="text-4xl mb-5 text-accent-400 font-medium">
        Our Luxury Cabins
      </h1>
      <p className="text-primary-200 text-lg mb-10">
        Cozy yet luxurious cabins, located right in the heart of the Italian
        Dolomites. Imagine waking up to beautiful mountain views, spending your
        days exploring the dark forests around, or just relaxing in your private
        hot tub under the stars. Enjoy nature's beauty in your own little home
        away from home. The perfect spot for a peaceful, calm vacation. Welcome
        to paradise.
      </p>
      <div className="px-1 flex justify-end">
        <Filter />
      </div>
      <Suspense key={filter} fallback={<Spinner />}>
        <CabinsList filter={filter} />
      </Suspense>

    </div>
  );
}
