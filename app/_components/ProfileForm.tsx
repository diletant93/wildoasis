"use client"

import { Suspense } from "react";
import SpinnerMini from "./SpinnerMini";
import { Guest } from "../_types/guest";
import { updateProfileAction } from "../_actions/profileActions";
import SubmitButton from "./SubmitButton";
import { toast } from "sonner";
import { useActionToast } from "../_hooks/useActionToast";

export default function ProfileForm({ CountrySelector, guest }: { CountrySelector: React.ReactNode, guest: Guest }) {
    const actionToast = useActionToast()
    async function handleUpdate(formData: FormData) {
        const response = await updateProfileAction(formData)
        actionToast(response)
    }
    return (
        <form action={handleUpdate} className="bg-primary-900 py-8 px-4 md:px-12 text-lg flex gap-6 flex-col mr-2 md:mr-0">
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
                    <label htmlFor="nationality" className="hidden md:block">Where are you from?</label>
                    <label htmlFor="nationality" className="md:hidden">Origin</label>
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

            <div className="flex justify-center items-center gap-6 xs:justify-end">
                <SubmitButton className="!w-full xs:!w-auto">Update profile</SubmitButton>
            </div>
        </form>
    );
}
