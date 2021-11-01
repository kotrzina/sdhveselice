import {Article} from "./Article";

export class Article20170106 extends Article {

    getTitle(): string {
        return "Pozvánka na valnou hromadu 7. 1. 2017"
    }

    getSlug(): string {
        return "pozvanka-na-valnou-hromadu-7-1-2017"
    }

    getImage(): string {
        return "/articles/valna_hromada_pozvanka_2017.jpeg"
    }

    getPreheader(): string | null {
        return "SDH Veselice zve všechny své členy a příznivce na VALNOU HROMADU, která se koná dne 7. ledna 2017 v 17:00 v sále kulturního domu."
    }

    getContent(): JSX.Element {
        return (
            <>
                SDH Veselice zve všechny své členy a příznivce na VALNOU HROMADU, která se koná dne 7. ledna 2017 v 17:00 v sále kulturního domu.
            </>
        )
    }

    getPublishDate(): Date {
        return new Date(2017, 1, 6)
    }

}
