import * as React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import footerStyles from "./footer.module.css"
import {Link, LinkList} from './LinkList';

export const Footer = () => {

    const sdhEmail = 'info@sdhveselice.cz'

    const usefulLinks: Array<Link> = [
        {title: 'Běžecké závody Lesempolem', href: 'https://lesempolem.cz'},
        {title: 'Obec Vavřinec', href: 'https://vavrinec.cz'},
        {title: 'Zdrojové kody - Github', href: 'https://github.com/kotrzina/sdhveselice'},
    ]

    const nearSdh: Array<Link> = [
        {title: 'SDH Vavřinec', href: 'http://sdh.vavrinec.cz/'},
        {title: 'SDH Šošuvka', href: 'http://sdh.sosuvka.cz/'},
    ]

    function getYear(): number {
        const now = new Date()
        return now.getFullYear()
    }

    return (
        <div className={footerStyles.footer}>
            <Container>
                <Row>
                    <Col lg={4}>
                        <h4>Kontakty</h4>
                        <div className={footerStyles.copy}>
                            <p>
                                Sbor dobrovolných hasičů Veselice
                                <br/>
                                email: <a href={'mailto:' + sdhEmail}>{sdhEmail}</a>
                                <br/>
                                &copy; SDH Veselice 1921 - {getYear()}
                            </p>
                        </div>
                    </Col>
                    <Col lg={4}>
                        <LinkList title={'Užitečné odkazy'} links={usefulLinks}/>
                    </Col>
                    <Col lg={4}>
                        <LinkList title={'Sbory v okolí'} links={nearSdh}/>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};
