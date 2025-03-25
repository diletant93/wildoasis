"use server"

import { revalidatePath } from "next/cache"
import { auth } from "../_lib/auth"
import supabase from "../_lib/supabase"
import { ProfileData } from "../_types/profileData"
import { ActionResponse } from "../_types/actionResponse"

export async function updateProfileAction(formData: FormData): Promise<ActionResponse> {
  const session = await auth();
  if (!session?.user) {
      return {
          status: 'error',
          message: 'You are not authenticated',
      };
  }

  const { nationalID, nationalityFlagCountry } = Object.fromEntries(formData) as ProfileData;

  if (!nationalID) {
      return {
          status: 'error',
          message: 'National ID is required.',
      };
  }
  if (!nationalID.match(/^[A-Za-z0-9]{6,12}$/)) {
      return {
          status: 'error',
          message: 'National ID must be 6 to 12 characters long and contain only letters and numbers.',
      };
  }
  if (!nationalityFlagCountry) {
      return {
          status: 'error',
          message: 'Nationality must be specified.',
      };
  }

  const [country, flag] = nationalityFlagCountry.split('%');
  const updatedFields = {
      nationality: country,
      countryFlag: flag,
      nationalID,
  };

  const { error } = await supabase
      .from('guests')
      .update(updatedFields)
      .eq('id', session.user.guestId);

  if (error) {
      console.error(error);
      return {
          status: 'error',
          message: 'Guest could not be updated',
      };
  }

  revalidatePath('/account/profile');

  return {
      status: 'success',
      message: 'Profile updated successfully',
  };
}
