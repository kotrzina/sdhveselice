import React from "react";
import {Col, Row} from 'react-bootstrap';
import {ArticleBar} from "../components/ArticleBar/ArticleBar";
import {GetStaticPropsContext, GetStaticPropsResult} from "next";
import {getArticles} from "../articles/ArticleList";
import Head from "next/head";


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
                <Head>
                    <title>SDH Veselice</title>
                </Head>

                <h1>SDH Veselice</h1>

                <p>
                    Sbor je nejstarším spolkem v obci, který bez přerušení vyvíjí činnost. Velkou měrou k jeho založení
                    přispěl ničivý požár v červenci roku 1917, kdy vyhořelo 17 domů. Ustavující valná hromada se konala
                    v <strong>září roku 1921</strong>, z podnětu tehdejšího starosty obce Františka Sedláka. Na konci
                    roku 1921 měl sbor 21 činných členů a 51 přispívajících. V roce 1922 nově založený sbor zakoupil za
                    cenu 25 000 Kč svojí první stříkačku od firmy R.A. Smejkal z továrny v Čechách na Hané.
                </p>
                <p>
                    Členové sboru od jeho založení významným způsobem ovlivňují společenský život v obci. Po celou dobu
                    své existence sbor pořádá různé akce za účelem získání finančních prostředků na činnost, ale také na
                    zakoupení potřebné techniky. V meziválečném období to byly např. taneční zábavy, plesy a hraní
                    amatérského divadla. Vedle toho byli také organizátory dožínek, ostatků apod.
                </p>
                <p>
                    Z podnětu sboru bylo v roce 1927 založeno v Malé Veselici výletiště, které se postupem času stalo
                    místem k pořádání letních slavností, pouťí a také např. oslav výročí sboru. V roce 1932, v době
                    vrcholící hospodářské krize, se členové sboru podíleli na rekonstrukci obecní budovy, v níž bylo
                    umístěno hasičské skladiště.
                </p>
                <p>
                    Od roku 1996 do roku 2010 sbor pořádal <a href={"/zavody"}>závody v požárním útoku</a>. Řada těchto
                    závodů byla zařazena do prestižní série Velké ceny Blanenska. Výsledkem dobré práce s mládeží od 80.
                    let je skutečnost, že se Marek Jarůšek stal členem reprezentace ČR v požárním sportu profesionálních
                    hasičů.
                </p>
                <p>
                    V roce 2011 se hasičská technika přestěhovala do nové zbrojnice, která poskytuje velice kvalitní a
                    komfortní zázemí pro činnost družstva zásahové jednotky tvořené členy našeho sboru.
                </p>
                <p>
                    V současné době, kdy hasičská tématika ustupuje do pozadí, se sbor snaží pořádat i jiné sportovní či
                    kulturní akce. Za zmínku stoji běžecké závody <a href={"https://lesempolem.cz"}
                                                                     target={"_blank"}>Lesempolem</a>, které v letech
                    2021 a 2023 byly oficiálním závodem mistrovství české republiky v ultramaratonu.
                </p>
            </Col>

            <ArticleBar articles={props.articles} lg={4}/>
        </Row>
    )
}

export default Home


export async function getStaticProps(context: GetStaticPropsContext): Promise<GetStaticPropsResult<Props>> {
    const articles = getArticles().slice(0, 4)
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
