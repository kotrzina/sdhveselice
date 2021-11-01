import * as React from 'react';
import {Col, Row} from "react-bootstrap";


const ContactPage = () => {
    return (
        <Row>
            <Col lg={12}>
                <h1>Kontakty</h1>
                Lubomír Němec
                Starosta SDH Veselice
                Email: lubanemec88@gmail.com

                Tomáš Kozák
                Správa webu
                Email: kozak@talko.cz

                <h2>Adresa:</h2>
                <p>
                    SH ČMS - Sbor dobrovolných hasičů Veselice<br/>
                    IČO: 65339851<br/>
                    Veselice 24<br/>
                    Vavřinec<br/>
                    679 13
                </p>
            </Col>
        </Row>
    );
};

export default ContactPage
