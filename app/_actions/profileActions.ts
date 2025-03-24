"use server"

import { revalidatePath } from "next/cache"
import { auth } from "../_lib/auth"
import supabase from "../_lib/supabase"
import { ProfileData } from "../_types/profileData"

export async function updateProfileAction(formData: FormData): Promise<void> {
  const session = await auth()
  if (!session?.user) throw new Error('User is not authenticated')

  const { nationalID, nationalityFlagCountry } = Object.fromEntries(formData) as ProfileData

  if (!nationalID) throw new Error("National ID is required.")
  if (!nationalID.match(/^[A-Za-z0-9]{6,12}$/))
    throw new Error("National ID must be 6 to 12 characters long and contain only letters and numbers.")
  if (!nationalityFlagCountry) throw new Error("Nationality must be specified.")

  const [country, flag] = nationalityFlagCountry.split('%')
  const updatedFields = {
    nationality: country,
    countryFlag: flag,
    nationalID
  }

  const { data, error } = await supabase
    .from('guests')
    .update(updatedFields)
    .eq('id', session.user.guestId)
    .select()
    .single()

  if (error) {
    console.error(error)
    throw new Error('Guest could not be updated')
  }
  revalidatePath('/account/profile')
}
