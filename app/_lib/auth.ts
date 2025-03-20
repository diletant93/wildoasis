import NextAuth, { NextAuthConfig } from "next-auth";
import Google from "next-auth/providers/google";



const authConfig:NextAuthConfig ={
    providers:[
        Google({
            clientId:process.env.NEXT_PRIVATE_GOOGLE_CLIENT_ID,
            clientSecret:process.env.NEXT_PRIVATE_GOOGLE_CLIENT_SECRET
        })
    ]
}

const {
    auth,
    handlers:{GET,POST}
} = NextAuth(authConfig)