"use server"

import { signIn, signOut } from "../_lib/auth"
import { ActionResponse } from "../_types/actionResponse"

export async function signOutAction(): Promise<ActionResponse> {
  try {
    await signOut({ redirectTo: '/' })
    return {
      status: 'success',
      message: 'Signed out successfully',
    }
  } catch (error) {
    if (error instanceof Error) {
      return {
        status: 'error',
        message: error.message,
      }
    }
    return {
      status: 'error',
      message: 'An unexpected error occurred',
    }
  }
}

export async function signInAction(): Promise<ActionResponse> {
  try {
    await signIn('google', { redirectTo: '/account' })
    return {
      status: 'success',
      message: 'Signed in successfully',
    }
  } catch (error) {
    if (error instanceof Error) {
      return {
        status: 'error',
        message: error.message,
      }
    }
    return {
      status: 'error',
      message: 'An unexpected error occurred',
    }
  }
}
