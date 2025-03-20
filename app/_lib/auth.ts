import NextAuth, { NextAuthConfig } from "next-auth";
import Google from "next-auth/providers/google";



const authConfig:NextAuthConfig ={
    providers:[
        Google({
            clientId:process.env.NEXT_PRIVATE_GOOGLE_CLIENT_ID,
            clientSecret:process.env.NEXT_PRIVATE_GOOGLE_CLIENT_SECRET
        })
    ],
    callbacks:undefined,
    pages:undefined,
}

export const {
    auth,
    signIn,
    signOut,
    handlers:{GET,POST}
} = NextAuth(authConfig)