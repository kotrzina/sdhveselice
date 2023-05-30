import {Article} from "./Article";
import {Video} from "../components/Video/Video";
import {ReactElement} from "react";

export class Article20230107 extends Article {

    getTitle(): string {
        return "Valná hromada za rok 2022"
    }

    getSlug(): string {
        return "valna-hromada-za-rok-2022"
    }

    getImage(): string {
        return "/articles/valna_hromada_2022.webp"
    }

    getPreheader(): string | null {
        return "Dne 7. ledna 2023 se v místní víceúčelové budově uskutečnila valná hromada SDH Veselice, na které bylo shrnuto vše podstatné z činnosti sboru v roce 2022."
    }

    getContent(): ReactElement {
        return (
            <>
                <p>
                    Dne 7.&nbsp;ledna&nbsp;2023 se v místní víceúčelové budově uskutečnila valná hromada SDH Veselice, na které bylo shrnuto vše podstatné
                    z činnosti sboru v letech 2022.
                </p>

                <p>
                    <Video src={"https://www.youtube.com/embed/ka_GQYJZTVM"}/>
                </p>
            </>
        )
    }

    getPublishDate(): Date {
        return new Date(2023, 1, 7)
    }

}
