import * as React from 'react';
import {Nav} from "react-bootstrap";
import Link from "next/link";
import css from "./Header.module.css"
import {useRouter} from "next/router";

type Props = {
    title: string
    link: string
};

export const NavItem = (props: Props) => {

    const router = useRouter()

    function isActive(link: string): boolean {
        if (link === router.route) {
            return true
        }
        if (link.includes('novinky') && router.route.includes('novinky')) {
            return true
        }
        if (link.includes('novinky') && router.route.includes('clanek')) {
            return true
        }
        return false
    }

    function getClassName(link: string): string {
        if (link.includes('lesempolem')) {
            return css.lesempolem
        }
        if (isActive(link)) {
            return css.active
        }
        return css.none
    }

    return (
        <Link href={props.link} passHref legacyBehavior>
            <Nav.Link className={getClassName(props.link)} active={isActive(props.link)}>{props.title}</Nav.Link>
        </Link>
    );
};
