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
            title: "Náměstek starosty",
            name: "Jiří Fabiánek",
            email: "fabianek.jiri@seznam.cz",
            phone: 724794221,
        },
        {
            title: "Správce webu",
            name: "Tomáš Kozák",
            email: "kozak@talko.cz",
            phone: 730996957,
        }
    ]

    const sdhEmail = 'info@sdhveselice.cz'
    const cols = 4

    return (
        <>
            <Row>
                <Col lg={12}>
                    <h1>Kontakty</h1>
                </Col>
            </Row>
            <Row>
                {contacts.map((contact, contactIdx) => {
                    return (
                        <Col md={4} key={contactIdx}>
                            <h2 className={contactStyles.name}>{contact.name}</h2>
                            <ul className={contactStyles.contacts}>
                                <li><PersonIcon/>&nbsp;&nbsp;<strong>{contact.title}</strong></li>
                                <li><EmailIcon/>&nbsp;&nbsp;<a href={'mailto:' + contact.email}>{contact.email}</a>
                                </li>
                                <li><PhoneIcon/>&nbsp;&nbsp;<a href={'tel:' + contact.phone}>{contact.phone}</a>
                                </li>
                            </ul>
                        </Col>
                    )
                })}
            </Row>
            <div className={"mt-4"}></div>
            <Row>
                <Col md={5}>
                    <h2>Adresa</h2>
                    <p>
                        <strong>SH ČMS - Sbor dobrovolných hasičů Veselice</strong><br/>
                        Veselice 17<br/>
                        679 13 <br/><br/>
                        IČO: 65339851<br/>
                        <EmailIcon/>&nbsp;&nbsp;<a href={'mailto:' + sdhEmail}>{sdhEmail}</a><br/>
                    </p>
                </Col>
                <Col md={7}>
                    <h2>Bankovní spojení</h2>
                    <p>
                        <strong>Fio banka, a.s.</strong><br/>
                        <strong>Číslo účtu:</strong>&nbsp;2000928860&nbsp;/&nbsp;2010<br/>
                        <strong>IBAN:</strong>&nbsp;CZ18&nbsp;2010&nbsp;0000&nbsp;0020&nbsp;0092&nbsp;8860
                    </p>
                </Col>
            </Row>
        </>
    );
};

export default ContactPage
