import NextAuth, {NextAuthOptions, RequestInternal} from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

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
                const {email, password} = credentials
                const foundUser = await prisma.user.findFirst({
                    where: {
                        email
                    }
                })

                if (foundUser) {
                    if (foundUser.password === password) {
                        return foundUser
                    } else {
                        return null
                    }
                } else {
                    return null
                }
            }
        })
    ],
    callbacks: {
      async redirect({url, baseUrl}) {
          return baseUrl + '/main/skills'
      }
    },
    pages: {
        signIn: '/auth'
    }
}

export default NextAuth(authOptions)