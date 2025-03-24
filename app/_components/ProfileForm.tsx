import { Suspense } from "react";
import SpinnerMini from "./SpinnerMini";
import { Guest } from "../_types/guest";
import { updateProfileAction } from "../_actions/profileActions";
import SubmitButton from "./SubmitButton";

export default function ProfileForm({ CountrySelector, guest }: { CountrySelector: React.ReactNode, guest: Guest }) {
    return (
        <form action={updateProfileAction} className="bg-primary-900 py-8 px-12 text-lg flex gap-6 flex-col">
            <div className="space-y-2">
                <label>Full name</label>
                <input
                    disabled
                    className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-gray-400"
                    name="fullName"
                    defaultValue={guest.fullName}
                />
            </div>

            <div className="space-y-2">
                <label>Email address</label>
                <input
                    disabled
                    className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-gray-400"
                    name="email"
                    defaultValue={guest.email}
                />
            </div>

            <div className="space-y-2">
                <div className="flex items-center justify-between">
                    <label htmlFor="nationality">Where are you from?</label>
                    <img
                        src={guest.countryFlag}
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
                />
            </div>

            <div className="flex justify-end items-center gap-6">
               <SubmitButton>Update profile</SubmitButton>
            </div>
        </form>
    );
}
