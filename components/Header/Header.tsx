import {Container, Nav, Navbar} from "react-bootstrap";
import {NavItem} from "../NavItem/NavItem";
import Link from "next/link"

export const Header = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Link href={"/"} passHref>
                    <Navbar.Brand>SDH Veselice</Navbar.Brand>
                </Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavItem title={'Domů'} link={'/'}/>
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
