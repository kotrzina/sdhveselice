import {Article} from "./Article";
import {ReactElement} from "react";

export class Article20171227 extends Article {

    getTitle(): string {
        return "Pozvánka na valnou hromadu 6. 1. 2018"
    }

    getSlug(): string {
        return "pozvanka-na-valnou-hromadu-6-1-2018"
    }

    getImage(): string {
        return "/articles/pozvanka_valna_hromada_2017.jpg"
    }

    getPreheader(): string | null {
        return "SDH Veselice zve všechny své členy a příznivce na VALNOU HROMADU, která se koná 6. ledna 2018 v 18:00 v sále kulturního domu."
    }

    getContent(): ReactElement {
        return (
            <>
                <p>SDH Veselice zve všechny své členy a příznivce na VALNOU HROMADU, která se koná 6. ledna 2018 v 18:00 v sále
                    kulturního domu.
                </p>
            </>
        )
    }

    getPublishDate(): Date {
        return new Date(2017, 12, 27)
    }

}
