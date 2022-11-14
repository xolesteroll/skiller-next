import type { NextPage } from 'next'
import {useSession} from "next-auth/react";

const Home: NextPage = () => {
const session = useSession()
  return (
    <div>
      HOMe
    </div>
  )
}

export default Home
