export {default} from "next-auth/middleware"

export const config = {matcher: ["/skills"], secret: process.env.NEXTAUTH_SECRET}