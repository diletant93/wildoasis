import { Metadata } from "next";
import CabinsList from "../_components/CabinsList";
import { Suspense } from "react";
import Spinner from "../_components/Spinner";

export const revalidate = 0b 

export const metadata: Metadata = {
  title: 'Cabins'
}
export default async function Cabins() {
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

      <Suspense key={'unique-1'} fallback={<Spinner />}>
        <CabinsList />
      </Suspense>

    </div>
  );
}
