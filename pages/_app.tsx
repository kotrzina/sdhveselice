import type {AppProps} from 'next/app'
import 'bootstrap/dist/css/bootstrap.css'
import '../styles/globals.css'
import {Container} from "react-bootstrap";
import {Footer} from "../components/Footer/Footer";
import {Header} from "../components/Header/Header";


function MyApp({Component, pageProps}: AppProps) {
    return (
        <>
            <Header/>
            <Container>
                <Component {...pageProps} />
            </Container>
            <Footer/>
        </>
    )
}

export default MyApp
