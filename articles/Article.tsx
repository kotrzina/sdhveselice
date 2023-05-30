import {ReactElement} from "react";
import {ReactElement} from "react";

export abstract class Article {
    abstract getTitle(): string;

    abstract getSlug(): string;

    abstract getImage(): string;

    abstract getPreheader(): string | null;

    abstract getContent(): ReactElement;

    abstract getPublishDate(): Date;
}

