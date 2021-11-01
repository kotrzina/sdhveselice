// @flow
import {getArticleBySlug, getArticles} from "../../../articles/ArticleList";
import {GetStaticPathsResult, GetStaticPropsContext, GetStaticPropsResult} from "next";


type Props = {
    title: string
    content: string
};

const ArticlePage = (props: Props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            <div dangerouslySetInnerHTML={{__html: props.content}}/>
        </div>
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
