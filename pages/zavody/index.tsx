import * as React from 'react';
import {getRacesArticles} from "../../articles/ArticleList";
import {Col, Row} from "react-bootstrap";
import Link from "next/link"

const Races = () => {
    return (
        <Row>
            <Col lg={12}>

                <h1>Závody ve Veselici</h1>

                <p>
                    Od roku 1996 do roku 2010 pořádal sbor dobrovolných hasičů z Veselice závody v požárním sportu družstev.
                    Konkrétní disciplínou byl požární útok.
                    Některé z ročníků byly dokonce zařazenydo prestižní soutěže Velké ceny Blanenska v požárním útoku.
                </p>

                <h2>Výsledky jednotlivých ročníků:</h2>
                <ul>
                    {getRacesArticles().map((article, idx) => {
                        return (
                            <li key={idx}>
                                <Link href={"/clanek/" + article.getSlug()} legacyBehavior>
                                    {article.getTitle()}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </Col>
        </Row>
    );
};

export default Races
