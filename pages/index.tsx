import type { NextPage } from 'next'
import {useSession} from "next-auth/react";

const Home: NextPage = () => {
const session = useSession()
    console.log(session)

  return (
    <div>
      HOMe
    </div>
  )
}

export default Home
