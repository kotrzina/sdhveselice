import type {AppProps} from 'next/app'
import 'bootstrap/dist/css/bootstrap.css'
import '../styles/globals.css'
import {Container} from "react-bootstrap";
import {Footer} from "../components/Footer/Footer";
import {Header} from "../components/Header/Header";
import Head from "next/head";


function MyApp({Component, pageProps}: AppProps) {
    return (
        <>
            <Head>
                <meta name="theme-color" content="#8a3815" />
            </Head>
            <Header/>
            <div className={'main'}>
                <Container>
                    <Component {...pageProps} />
                </Container>
            </div>
            <Footer/>
        </>
    )
}

export default MyApp
