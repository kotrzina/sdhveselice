import * as React from 'react';
import {Col, Image, Row} from "react-bootstrap";

type Props = {
    title?: string
    srcs: Array<string>
};

export const Gallery = (props: Props) => {

    const {srcs, title = 'Galerie:'} = props;

    return (
        <Row className={'gallery'}>
            <Col lg={12}>
                <h2>{title}</h2>
            </Col>
            {srcs.map((src, idx) => {
                return (
                    <Col lg={4} key={idx}>
                        <Image alt="Obrázek v galerii" src={src} width={'100%'}/>
                    </Col>
                )
            })}
        </Row>
    );
};
