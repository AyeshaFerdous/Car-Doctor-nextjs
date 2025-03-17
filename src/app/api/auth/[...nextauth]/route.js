import { authOptions } from "@/lib/authOptions"
import NextAuth from "next-auth"

// import GitHubProvider from "next-auth/providers/github";


  
const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }