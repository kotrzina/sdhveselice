import {Article} from "./Article";
import {Video} from "../components/Video/Video";
import {ReactElement} from "react";

export class Article20190106 extends Article {

    getTitle(): string {
        return "Valná hromada za rok 2018"
    }

    getSlug(): string {
        return "valna-hromada-za-rok-2018"
    }

    getImage(): string {
        return "/articles/valna_hromada_2018.jpg"
    }

    getPreheader(): string | null {
        return "Dne 5. ledna 2019 se v místní víceúčelové budově uskutečnila valná hromada SDH Veselice."
    }

    getContent(): ReactElement {
        return (
            <>
                <p>
                    Dne 5.&nbsp;ledna&nbsp;2019 se v místní víceúčelové budově uskutečnila valná hromada SDH Veselice. Záznam zprávy o činnosti sboru naleznete ve videu
                    níže.
                </p>

                <p>
                    <Video src={"https://www.youtube.com/embed/D8ncyk63IT4"}/>
                </p>
            </>
        )
    }

    getPublishDate(): Date {
        return new Date(2019, 1, 6)
    }

}
