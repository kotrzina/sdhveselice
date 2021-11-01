import * as React from 'react';
import {Nav} from "react-bootstrap";
import Link from "next/link";

type Props = {
    title: string
    link: string
};

export const NavItem = (props: Props) => {
    return (
        <Link href={props.link} passHref>
            <Nav.Link>{props.title}</Nav.Link>
        </Link>
    );
};
