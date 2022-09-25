import '../styles/globals.scss'
import type {AppProps} from 'next/app'
import Layout from "../components/ui/Layout/Layout";
import Head from "next/head";

function MyApp({Component, pageProps}: AppProps) {
    return (
        <>
            <Head>
                <title>Skiller Appsss</title>
                <meta name="description" content="Skill Matters" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Layout >
            <Component {...pageProps} />
            </Layout>
        </>
    )

}

export default MyApp
