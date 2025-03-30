
import NextAuth, { NextAuthConfig } from "next-auth";
import Google from 'next-auth/providers/google'
import { createGuest, getGuest } from "../_services/data-service";

const authConfig :NextAuthConfig = {
    providers:[
        Google({clientId:process.env.AUTH_GOOGLE_ID, clientSecret:process.env.AUTH_GOOGLE_SECRET})
    ],
    callbacks:{
        authorized({auth}){
            return Boolean(auth?.user)
        },
       async signIn({user,account,profile}){
            try {
                if(!user.email || !user.name) return false

                const existingGuest = await getGuest(user.email)

                if(!existingGuest){
                    await createGuest({email:user.email,fullName:user.name})
                }

                return true
            } catch (error) {
                return false
            }
        },
        async session({session,user}){
            const guest = await getGuest(session.user.email)
            session.user.guestId = guest.id
            return session
        }
    },
    pages:{
        signIn:'/login'
    }
}

export const {
    auth,
    signIn,
    signOut,
    handlers:{GET,POST}} = NextAuth(authConfig)
    