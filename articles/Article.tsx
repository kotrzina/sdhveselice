export abstract class Article {
    abstract getTitle(): string;

    abstract getSlug(): string;

    abstract getImage(): string;

    abstract getPreheader(): string | null;

    abstract getContent(): JSX.Element;

    abstract getPublishDate(): Date;
}

