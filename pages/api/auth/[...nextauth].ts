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
                username: {
                    label: 'Username',
                    type: 'text',
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
                const {username, password} = credentials
                console.log(username, password)
                return null
            }
        })
    ],
    pages: {
        signIn: '/auth'
    }
}

export default NextAuth(authOptions)