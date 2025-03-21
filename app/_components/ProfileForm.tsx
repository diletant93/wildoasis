"use client"
import { Suspense } from "react";
import SpinnerMini from "./SpinnerMini";
import { Guest } from "../_types/guest";
import { useGuestProfile } from "../_hooks/useGuestProfile";

export default async function ProfileForm({CountrySelector, guest}:{CountrySelector:React.ReactNode, guest:Guest}) {
    const {
        name, setName,
        email,setEmail,
        nationality, setNationality,
        nationalID, setNationalID
    } = useGuestProfile(guest)
    return (
        <form className="bg-primary-900 py-8 px-12 text-lg flex gap-6 flex-col">
            <div className="space-y-2">
                <label>Full name</label>
                <input
                    disabled
                    className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-gray-400"
                    value={name}
                />
            </div>

            <div className="space-y-2">
                <label>Email address</label>
                <input
                    disabled
                    className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-gray-400"
                    value={email}
                />
            </div>

            <div className="space-y-2">
                <div className="flex items-center justify-between">
                    <label htmlFor="nationality">Where are you from?</label>
                    <img
                        src={nationality}
                        alt="Country flag"
                        className="h-5 rounded-sm"
                    />
                </div>
                <Suspense fallback={<SpinnerMini />} >
                   {CountrySelector}
                </Suspense>
            </div>

            <div className="space-y-2">
                <label htmlFor="nationalID">National ID number</label>
                <input
                    name="nationalID"
                    className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm"
                    value={nationalID}
                />
            </div>

            <div className="flex justify-end items-center gap-6">
                <button className="bg-accent-500 px-8 py-4 text-primary-800 font-semibold hover:bg-accent-600 transition-all disabled:cursor-not-allowed disabled:bg-gray-500 disabled:text-gray-300">
                    Update profile
                </button>
            </div>
        </form>
    );
}
