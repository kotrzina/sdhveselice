import React from "react";
import {Col, Row} from 'react-bootstrap';
import {ArticleBar} from "../components/ArticleBar/ArticleBar";
import {GetStaticPropsContext, GetStaticPropsResult} from "next";
import {getArticles} from "../articles/ArticleList";


type ArticleListItem = {
    title: string
    slug: string
    preheader: string | null
}

type Props = {
    articles: Array<ArticleListItem>
}

const Home = (props: Props) => {
    return (
        <Row>
            <Col lg={8}>
                <h1>Domů</h1>

                <p>
                    Vážený návštěvníku,
                    <br/><br/>
                    právě jste navštívil oficiální webové stránky SDH Veselice, malé obce ležící v Moravském krase nedaleko
                    světoznámé propasti Macocha. Tyto stránky poskytnou jeho návštěvníkům především informace o historii sboru,
                    jeho činnosti, funkcionářích, ale také informace o sportovních výsledcích sboru, činnosti Okrsku Sloup,
                    jehož je náš sbor členem. Náš sbor byl založený v roce 1921. V současné době je podle stanov SH ČMS jeho
                    organizační složkou. Jeho činnost je řízena 9-ti členným výborem sboru. Členská základna čítá 46 členů. Ke
                    své činnosti využívá nově zřízené hasičské zbrojnice, která je součástí budovy kulturního domu Veselice,
                    stojící ve Veselici v sousedství knihovny, turistického informačního centra a muzea včelařství. Sbor vznikl
                    jako jeden z posledních v regionu. Hasičské sbory vznikaly ve druhé polovině 19. století jako nutná potřeba
                    ochránit majetek a životy obyvatel.
                    <br/><br/>
                    V regionu Sloup pracuje Okrsek Sloup, a to opět jako jedna z organizačních složek SH ČMS. Jeho členy jsou
                    zástupci celkem 11 sborů dobrovolných hasičů ze 7 obcí a 1 městyse. Výbor okrsku organizuje pravidelně každý
                    rok soutěž v požárním sportu, a to jak pro mladé hasiče, tak pro družstva mužů i žen.
                </p>
            </Col>

            <ArticleBar articles={props.articles} lg={4}/>
        </Row>
    )
}

export default Home


export async function getStaticProps(context: GetStaticPropsContext): Promise<GetStaticPropsResult<Props>> {
    const articles = getArticles().slice(0, 3)
    const list = articles.map(article => {
        return {
            title: article.getTitle(),
            slug: article.getSlug(),
            preheader: article.getPreheader(),
        }
    })

    return {
        props: {
            articles: list,
        },
    }
}
