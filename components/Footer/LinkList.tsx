import * as React from 'react';

export type Link = {
    title: string
    href: string
}

type Props = {
    title: string
    links: Array<Link>
};

export const LinkList = (props: Props) => {
    return (
        <>
            <h4>{props.title}</h4>
            <ul>
                {props.links.map((link, idx) => {
                    return (
                        <li key={idx}>
                            <a rel={'noreferrer'} target={'_blank'} href={link.href}>{link.title}</a>
                        </li>
                    )
                })}
            </ul>
        </>
    )

};
