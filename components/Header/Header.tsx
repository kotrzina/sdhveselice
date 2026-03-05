import {useState} from "react";
import {Container, Nav, Navbar} from "react-bootstrap";
import {NavItem} from "./NavItem";
import Link from "next/link"
import css from './Header.module.css'

export const Header = () => {
    const [expanded, setExpanded] = useState(false);

    return (
        <Navbar className={css.navBox} expand="lg" expanded={expanded} onToggle={setExpanded}>
            <Container>
                <Navbar.Brand as={Link} href="/" className={css.brand}>SDH Veselice</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className={"me-auto"} id={css.navBoxList} onClick={() => setExpanded(false)}>
                        <NavItem title={'Novinky'} link={'/novinky/1/'}/>
                        <NavItem title={'Výbor'} link={'/vybor'}/>
                        <NavItem title={'Závody ve Veselici'} link={'/zavody'}/>
                        <NavItem title={'Kontakty'} link={'/kontakty'}/>
                        <NavItem title={'Kalendář akcí'} link={'/akce'}/>
                        <NavItem title={'Lesempolem 🏃'} link={'https://lesempolem.cz'}/>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};
