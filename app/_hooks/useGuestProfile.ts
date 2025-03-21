import { useState } from "react";
import { Guest } from "../_types/guest";

export function useGuestProfile(guest:Guest){
    const [name, setName] = useState<string>(guest.fullName || '')
    const [email, setEmail] = useState<string>(guest.email || '')
    const [nationality, setNationality] = useState<string>(guest.nationality || '')
    const [nationalID, setNationalID] = useState<string>(guest.nationalID || '')

    return {
        name, setName,
        email,setEmail,
        nationality, setNationality,
        nationalID, setNationalID
    }
}