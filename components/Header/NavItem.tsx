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

    function getClassName(link: string): string {
        if (link === router.route) {
            return css.active
        }

        if (link.includes('novinky') && router.route.includes('novinky')) {
            return css.active
        }

        if (link.includes('novinky') && router.route.includes('clanek')) {
            return css.active
        }

        return css.none
    }

    return (
        <Link href={props.link} passHref>
            <Nav.Link className={getClassName(props.link)} active={true}>{props.title}</Nav.Link>
        </Link>
    );
};
