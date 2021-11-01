import {Container, Nav, Navbar} from "react-bootstrap";
import {NavItem} from "./NavItem";
import Link from "next/link"
import css from './Header.module.css'

export const Header = () => {
    return (
        <Navbar className={css.navBox} expand="lg">
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className={"me-auto " + css.navBoxItem}>
                        <NavItem title={'SDH Veselice'} link={'/'}/>
                        <NavItem title={'Novinky'} link={'/novinky/1/'}/>
                        <NavItem title={'Výbor'} link={'/vybor'}/>
                        <NavItem title={'Závody ve Veselici'} link={'/zavody'}/>
                        <NavItem title={'Kontakty'} link={'/kontakty'}/>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

/*
<NavItem title={'Lesempolem'} link={'https://lesempolem.cz'}/>
 */
