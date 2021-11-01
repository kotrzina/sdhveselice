import * as React from 'react';
import {GetStaticPropsContext, GetStaticPropsResult} from "next";
import {Col, Row, Table} from "react-bootstrap";

type Member = {
    name: string
    func: string
    born: number
}

type Props = {
    members: Member[]
};

const BoardPage = (props: Props) => {
    return (
        <Row>
            <h1>Výbor SDH Veselice</h1>

            <Col lg={8}>
                <Table responsive={true}>
                    <tbody>
                    <tr>
                        <th>Funkce</th>
                        <th>Jméno</th>
                    </tr>
                    {props.members.map((person, idx) => {
                        return (
                            <tr key={idx}>
                                <td>{person.func}</td>
                                <td>{person.name}&nbsp;({person.born})</td>
                            </tr>
                        )
                    })}
                    </tbody>
                </Table>
            </Col>
        </Row>
    );
};

export default BoardPage

export async function getStaticProps(context: GetStaticPropsContext): Promise<GetStaticPropsResult<Props>> {
    return {
        props: {
            members: [
                {name: "Němec Lubomír", func: "Starosta", born: 1988},
                {name: "Novotný Miloslav", func: "Náměstek starosty:", born: 1956},
                {name: "Kozák Tomáš", func: "Jednatel", born: 1991},
                {name: "Fabiánek Milan", func: "Hospodář", born: 1969},
                {name: "Jarůšek Marek", func: "Velitel", born: 1978},
                {name: "Nečas Martin", func: "Člen výboru", born: 1987},
                {name: "Nečas Bohumil", func: "Člen výboru", born: 1977},
                {name: "Fabiánek Jan", func: "Člen výboru", born: 1991},
                {name: "Souček Pavel", func: "Člen výboru", born: 1958},
            ]
        },
    }
}
