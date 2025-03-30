"use server"

import { signIn, signOut } from "../_lib/auth"
import { ActionResponse } from "../_types/actionResponse"

export async function signOutAction(): Promise<ActionResponse> {
    await signOut({ redirectTo: '/cabins' })
    return {
      status: 'success',
      message: 'Signed out successfully',
    }
}

export async function signInAction() {
  await signIn('google',{redirectTo:'/account'})
}
