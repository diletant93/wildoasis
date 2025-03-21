import NextAuth, { NextAuthConfig } from "next-auth";
import Google from "next-auth/providers/google";
import { createGuest, getGuest } from "../_services/data-service";



const authConfig:NextAuthConfig ={
    providers:[
        Google({
            clientId:process.env.NEXT_PRIVATE_GOOGLE_CLIENT_ID,
            clientSecret:process.env.NEXT_PRIVATE_GOOGLE_CLIENT_SECRET
        })
    ],
    callbacks:{
        authorized({auth}){
            return Boolean(auth?.user)
        },
        async signIn({user, account,profile}){
            try {
                if(!user.email || !user.name){
                    return false
                }   
                const guest = await getGuest(user.email)
                if(!guest){
                    await createGuest({
                        fullName:user.name,
                        email:user.email
                    })
                }
                return true
            } catch (error){
                console.error(error)
                return false
            }
        },
        async session({session,user}){
            const guest = await getGuest(session.user.email)
            const modifiedSession = {
                ...session,
                user:{
                    ...session.user,
                    guestId:guest.id
                }
            }
            return modifiedSession
        }
    },
    pages:{
        signIn:'/login',
        
    },
}

export const {
    auth,
    signIn,
    signOut,
    handlers:{GET,POST}
} = NextAuth(authConfig)