"use client"
import { useFormStatus } from "react-dom";
import SpinnerMini from "./SpinnerMini";
import { useMediaQuery } from "../_hooks/useMediaQuery";
import { MEDIA_QUERIES } from "../_types/mediaQueries";
export default function SubmitButton({ children }: { children: React.ReactNode }) {
    const { pending } = useFormStatus()
    const matches = useMediaQuery(MEDIA_QUERIES.SM)
    return (
        <button type="submit" disabled={pending} className="bg-accent-500 px-8 py-4 text-primary-800 font-semibold hover:bg-accent-600 transition-all disabled:cursor-not-allowed disabled:bg-gray-500 disabled:text-gray-300 cursor-pointer">
            {pending ? (<><span className="float-left mr-2"><SpinnerMini /></span> <span className="float-right">{'Submitting'}</span></>) : children}
        </button>
    );
}
