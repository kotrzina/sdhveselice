import {Article} from "./Article";

export class Article20151228 extends Article {

    getTitle(): string {
        return "Pozvánka na valnou hromadu 9. ledna 2016"
    }

    getSlug(): string {
        return "pozvanka-na-valnou-hromadu-9-ledna-2016"
    }

    getImage(): string {
        return "/articles/pozvanka_na_valnou_hromadu_2016.jpg"
    }

    getPreheader(): string | null {
        return "SDH Veselice zve všechny své členy a příznivce na VALNOU HROMADU, která se koná dne 9. ledna 2016 v 17:00 v sále kulturního domu."
    }

    getContent(): JSX.Element {
        return (
            <>
                <p>SDH Veselice zve všechny své členy a příznivce na <strong>VALNOU HROMADU</strong>, která se koná dne 9. ledna
                    2016 v 17:00 v sále kulturního domu.</p>
            </>
        )
    }

    getPublishDate(): Date {
        return new Date(2015, 12, 28)
    }

}
