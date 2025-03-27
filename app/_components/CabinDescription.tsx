'use client'

import { useMediaQuery } from "../_hooks/useMediaQuery";
import { MEDIA_QUERIES } from "../_types/mediaQueries";

export default function CabinDescription() {
    const matches = useMediaQuery(MEDIA_QUERIES.MD)
    if (matches) return (
        <p className="text-primary-200 mb-5 px-3">
            Luxurious cabins in the Dolomites. 
            Wake up to mountain views,
             explore forests, or unwind in a hot tub under the stars.
        </p>
    )
    return (
        <p className="text-primary-200 mb-10 text-lg lg:text-xl 2xl:text-4xl">
            Cozy yet luxurious cabins, located right in the heart of the Italian
            Dolomites. Imagine waking up to beautiful mountain views, spending your
            days exploring the dark forests around, or just relaxing in your private
            hot tub under the stars. Enjoy nature's beauty in your own little home
            away from home. The perfect spot for a peaceful, calm vacation. Welcome
            to paradise.
        </p>
    );
}
