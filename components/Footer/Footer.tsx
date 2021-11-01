import * as React from 'react';
import {Container} from "react-bootstrap";
import footerStyles from "./footer.module.css"
import Image from "next/image"
import {ImageLoaderProps} from "next/dist/client/image";


export const Footer = () => {

    function getYear(): number {
        const now = new Date()
        return now.getFullYear()
    }

    const imageLoader = (params: ImageLoaderProps): string => {
        return `/images/footer/${params.src}?w=${params.width}`
    }

    return (
        <div className={footerStyles.footer}>
            <Container>
                <div className={footerStyles.links}>
                    <a
                        target="_blank"
                        rel="noreferrer"
                        title="obec Vavřinec"
                        href="https://vavrinec.cz">
                        <Image src="vavrinec.png" width={27} height={32} alt="Logo obce Vavřinec" loader={imageLoader}/>
                    </a>
                    <a
                        target="_blank"
                        rel="noreferrer"
                        title="Běžecké závody Lesempolem"
                        href="https://lesempolem.cz">
                        <Image src="lp.png" width={32} height={32} alt="logo běžeckých závodů Lesempolem" loader={imageLoader}/>
                    </a>
                    <a
                        target="_blank"
                        rel="noreferrer"
                        title="sdhveselice.cz na Githubu"
                        href="https://lesempolem.cz">
                        <Image src="github-logo.svg" width={32} height={32} alt="Github logo" loader={imageLoader}/>
                    </a>
                </div>
                <div className={footerStyles.copy}>&copy; SDH Veselice 1921 - {getYear()}</div>
            </Container>
        </div>
    );
};
