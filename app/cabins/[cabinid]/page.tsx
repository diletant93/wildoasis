import BookingSection from "@/app/_components/BookingSection";
import CabinComponent from "@/app/_components/CabinComponent";
import Spinner from "@/app/_components/Spinner";
import {  getCabin, getCabins } from "@/app/_services/data-service";
import { Metadata } from "next";
import { Suspense } from "react";
type CabinProps = {
    params: Promise<{ cabinid: string; }>
}

export async function generateMetadata({ params }: { params: CabinProps['params'] }): Promise<Metadata> {
    const { cabinid: id } = await params
    const { name } = await getCabin(id)
    return {
        title: `Cabin ${name}`
    }
}

export async function generateStaticParams() {
    const cabins = await getCabins()
    const ids = cabins.map(cabin => { return { cabinid: String(cabin.id) } })
    return ids
}

export default async function Cabin({ params }: CabinProps) {
    const { cabinid: id } = await params
    const cabin = await getCabin(id)
    return (
        <div className="max-w-6xl mx-auto mt-8">
            <CabinComponent cabin={cabin}/>
            <div className="space-y-10">
                <h2 className="text-5xl font-semibold text-center">
                    Reserve {cabin.name} today. Pay on arrival.
                </h2>
                <Suspense fallback={<Spinner />} key={id}>
                    <BookingSection cabin={cabin} />
                </Suspense>
            </div>
        </div>
    );
}
