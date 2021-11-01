import * as React from 'react';
import {getArticles} from "../../../articles/ArticleList";
import Link from "next/link"
import {Col, Image, Pagination, Row} from 'react-bootstrap';
import {GetStaticPathsResult, GetStaticPropsContext, GetStaticPropsResult} from "next";
import listStyle from './pageList.module.css'

const itemsPerPage = 15

type Props = {
    page: number
    pagesCount: number
};

const ArticleListPage = (props: Props) => {
    return (
        <>
            <h1>Novinky</h1>
            <div>
                {getArticles().slice((props.page - 1) * itemsPerPage, props.page * itemsPerPage).map((article, k) => {
                    return (
                        <div key={k} className={listStyle.article}>
                            <Link href={"/clanek/" + article.getSlug()}>
                                <a><h2>{article.getTitle()}</h2></a>
                            </Link>

                            <Row>
                                <Col lg={3}>
                                    <Image src={article.getImage()} thumbnail/>
                                </Col>
                                <Col lg={9}>
                                    <p>{article.getPreheader()}</p>
                                </Col>
                            </Row>
                        </div>
                    )
                })}
            </div>

            <Pagination>
                {Array.from({length: props.pagesCount}, (v, k) => k + 1).map(ia => {
                    return (
                        <Link key={ia} href={'/novinky/' + ia} passHref>
                            <Pagination.Item active={ia == props.page}>{ia}</Pagination.Item>
                        </Link>
                    )
                })}
            </Pagination>

        </>
    );
};

function calculatePagesCount(): number {
    const itemsCount = getArticles().length
    return Math.ceil(itemsCount / itemsPerPage)
}

export async function getStaticProps(context: GetStaticPropsContext): Promise<GetStaticPropsResult<Props>> {
    if (context.params === undefined) {
        throw new Error("could not find context parameters")
    }

    const {page} = context.params

    return {
        props: {
            page: page as unknown as number,
            pagesCount: calculatePagesCount(),
        },
    }
}

export async function getStaticPaths(): Promise<GetStaticPathsResult> {
    const pagesCount = calculatePagesCount()
    const paths = Array.from({length: pagesCount}, (v, k) => {
        return {
            params: {
                page: (k + 1).toString()
            }
        }
    })

    return {
        paths: paths,
        fallback: false,
    };
}


export default ArticleListPage
