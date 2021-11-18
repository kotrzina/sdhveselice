import * as React from 'react';
import {getArticles} from "../../../articles/ArticleList";
import Link from "next/link"
import {Col, Image, Pagination, Row} from 'react-bootstrap';
import {GetStaticPathsResult, GetStaticPropsContext, GetStaticPropsResult} from "next";
import listStyle from './pageList.module.css'
import {Article} from "../../../articles/Article";

const itemsPerPage = 10

type Props = {
    page: number
    pagesCount: number
};

const ArticleListPage = (props: Props) => {
    function getArticleLink(article: Article): string {
        return '/clanek/' + article.getSlug()
    }

    return (
        <>
            <Row className={'articleList'}>
                <Col lg={10}>
                    <h1>Novinky</h1>
                    <div>
                        {getArticles().slice((props.page - 1) * itemsPerPage, props.page * itemsPerPage).map((article, k) => {
                            return (
                                <div key={k} className={listStyle.article}>
                                    <Row>
                                        <Col lg={4}>
                                            <Link href={getArticleLink(article)} passHref>
                                                <a>
                                                    <Image alt={"Ilustrační obrázek pro " + article.getTitle()} src={article.getImage()} thumbnail width={"100%"}/>
                                                </a>
                                            </Link>
                                        </Col>
                                        <Col lg={8}>
                                            <Link href={getArticleLink(article)}>
                                                <a><h2>{article.getTitle()}</h2></a>
                                            </Link>
                                            <p>{article.getPreheader()}</p>
                                        </Col>
                                    </Row>
                                </div>
                            )
                        })}
                    </div>
                </Col>
            </Row>
            <Row>
                <Col lg={12}>
                    <Pagination id={'pag'}>
                        {Array.from({length: props.pagesCount}, (v, k) => k + 1).map(ia => {
                            return (
                                <Link key={ia} href={'/novinky/' + ia} passHref>
                                    <Pagination.Item active={ia == props.page}>{ia}</Pagination.Item>
                                </Link>
                            )
                        })}
                    </Pagination>
                </Col>
            </Row>
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
