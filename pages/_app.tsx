import 'normalize.css/normalize.css'
import '../styles/globals.scss'
import type {AppProps} from 'next/app'
import Layout from "../components/ui/Layout/Layout";
import Head from "next/head";
import {ApolloProvider} from "@apollo/client";
import apolloClient from "../lib/apollo";
import {SessionProvider} from "next-auth/react";
import {Session} from "next-auth";

function MyApp({Component, pageProps}: AppProps<{
    session: Session;
}>) {
    return (
        <SessionProvider session={pageProps.session}>
            <ApolloProvider client={apolloClient}>
                <Head>
                    <title>Skiller Appsss</title>
                    <meta name="description" content="Skill Matters" />
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <Layout >
                    <Component {...pageProps} />
                </Layout>
            </ApolloProvider>
        </SessionProvider>

    )

}

export default MyApp
