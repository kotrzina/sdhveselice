import {getArticleBySlug, getArticles} from "../../../articles/ArticleList";
import {GetStaticPathsResult, GetStaticPropsContext, GetStaticPropsResult} from "next";
import {Col, Row} from "react-bootstrap";
import Head from "next/head";
import * as React from "react";


type Props = {
    title: string
    content: string
};

const ArticlePage = (props: Props) => {
    return (
        <>
            <Head>
                <title>{props.title} | SDH Veselice</title>
            </Head>
            <Row>
                <Col lg={12}>
                    <h1>{props.title}</h1>
                </Col>
            </Row>
            <Row>
                <Col lg={12} dangerouslySetInnerHTML={{__html: props.content}}/>
            </Row>
        </>
    );
};

export default ArticlePage

/**
 * Returns article props base on slug
 * All slugs are generated in the getStaticPaths function
 */
export async function getStaticProps(context: GetStaticPropsContext): Promise<GetStaticPropsResult<Props>> {
    if (context.params === undefined) {
        throw new Error("could not find context parameters")
    }

    const {slug} = context.params
    const article = getArticleBySlug(slug as string)

    const ReactDOMServer = require('react-dom/server');
    const renderedContent = ReactDOMServer.renderToStaticMarkup(article.getContent())

    return {
        props: {
            title: article.getTitle(),
            content: renderedContent,
        },
    }
}

/**
 * Function generates all possible paths (articles)
 */
export async function getStaticPaths(): Promise<GetStaticPathsResult> {
    const paths = getArticles().map(article => {
        return {
            params: {
                slug: article.getSlug(),
            }
        }
    })

    return {
        paths: paths,
        fallback: false,
    };
}
