import NextAuth, {NextAuthOptions, RequestInternal} from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import {PrismaClient} from "@prisma/client";

const prisma = new PrismaClient()

const authOptions: NextAuthOptions = {
    session: {
        strategy: 'jwt'
    },
    providers: [
        CredentialsProvider({
            type: 'credentials',
            credentials: {
                email: {
                    label: 'Email',
                    type: 'email',
                },
                password: {
                    label: 'Password',
                    type: 'password'
                }
            },
            async authorize(
                credentials: any,
                req: Pick<RequestInternal, "body" | "query" | "headers" | "method">
            ) {
                try {
                    const {email, password} = credentials
                    const foundUser = await prisma.user.findFirst({
                        where: {
                            email
                        }
                    })
                    console.log(foundUser)
                    if (!foundUser || foundUser.password !== password) {
                        return null
                    }

                    return foundUser
                } catch (e: any) {
                    console.log(e.message)
                    return null
                }

            }
        })
    ],
    callbacks: {
      async redirect({url, baseUrl}) {
          return baseUrl + '/skills'
      }
    },
    pages: {
        signIn: '/auth'
    }
}

export default NextAuth(authOptions)