import {Article} from "./Article";

export class Article20141221 extends Article {

    getTitle(): string {
        return "Pozvánka na valnou hromadu 3. ledna 2015"
    }

    getSlug(): string {
        return "pozvanka-na-valnou-hromadu-3-ledna-2015"
    }

    getImage(): string {
        return "/articles/pozvanka_valna_hromada_2015.jpg"
    }

    getPreheader(): string | null {
        return "SDH Veselice Vás zve na VALNOU HROMADU, která se koná dne 3. ledna 2015 v 17:00 v herně stolního tenisu."
    }

    getContent(): JSX.Element {
        return (
            <>
                <p>SDH Veselice Vás zve na VALNOU HROMADU, která se koná dne <strong>3. ledna 2015 v 17:00 v herně stolního
                    tenisu.</strong></p>
                <p>Zve výbor SDH.</p>
            </>
        )
    }

    getPublishDate(): Date {
        return new Date(2014, 12, 21)
    }

}
