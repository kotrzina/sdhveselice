import * as React from 'react';
import css from "./homepage.module.css";
import Link from "next/link";
import {Col} from "react-bootstrap";

type ArticleListItem = {
    title: string
    slug: string
    preheader: string | null
}

type Props = {
    lg: number,
    articles: Array<ArticleListItem>
}

export const ArticleBar = (props: Props) => {
    return (
        <Col lg={props.lg}>
            <div className={css.newsBox}>
                <h2><Link href="/novinky/1/">Novinky</Link></h2>
                {props.articles.map((article, idx) => {
                    return (
                        <div key={idx} className={css.newsBoxItem}>
                            <h3>
                                <a href={"/clanek/" + article.slug}>{article.title}</a>
                            </h3>
                            <p>{article.preheader}</p>
                        </div>
                    )
                })}
            </div>

        </Col>
    );
};
