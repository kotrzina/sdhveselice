import * as React from 'react';
import {Col, Row} from "react-bootstrap";
import {EmailIcon} from "../../components/Icons/EmailIcon";
import {PhoneIcon} from "../../components/Icons/PhoneIcon";
import {PersonIcon} from "../../components/Icons/PersonIcon";
import contactStyles from "./contacts.module.css"

type Contact = {
    title: string;
    name: string;
    email: string;
    phone: number;
}

const ContactPage = () => {

    const contacts: Array<Contact> = [
        {
            title: "Starosta sboru",
            name: "Lubomír Němec",
            email: "lubanemec88@gmail.com",
            phone: 728637987,
        },
        {
            title: "Správa webu",
            name: "Tomáš Kozák",
            email: "kozak@talko.cz",
            phone: 730996957,
        }
    ]

    const sdhEmail = 'info@sdhveselice.cz'

    return (
        <Row>
            <Col lg={12}>
                <h1>Kontakty</h1>
                {contacts.map((contact, contactIdx) => {
                    return (
                        <div key={contactIdx}>
                            <h2>{contact.title}</h2>
                            <ul className={contactStyles.contacts}>
                                <li><PersonIcon/>&nbsp;&nbsp;<strong>{contact.name}</strong></li>
                                <li><EmailIcon/>&nbsp;&nbsp;<a href={'mailto:' + contact.email}>{contact.email}</a></li>
                                <li><PhoneIcon/>&nbsp;&nbsp;<a href={'tel:' + contact.phone}>{contact.phone}</a></li>
                            </ul>
                        </div>
                    )
                })}

                <h2>Adresa:</h2>
                <p className={contactStyles.address}>
                    SH ČMS - Sbor dobrovolných hasičů Veselice<br/>
                    IČO: 65339851<br/>
                    Veselice 24<br/>
                    679 13 <br/><br/>
                    <EmailIcon/>&nbsp;&nbsp;<a href={'mailto:' + sdhEmail}>{sdhEmail}</a><br/>
                </p>
            </Col>
        </Row>
    );
};

export default ContactPage
