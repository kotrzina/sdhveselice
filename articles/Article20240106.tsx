import {Article} from "./Article";
import {ReactElement} from "react";
import {Video} from "../components/Video/Video";

export class Article20240106 extends Article {

    getTitle(): string {
        return "Valná hromada za rok 2023"
    }

    getSlug(): string {
        return "valna-hromada-za-rok-2023"
    }

    getImage(): string {
        return "/articles/valna_hromada_2023.webp"
    }

    getPreheader(): string | null {
        return "Dne 6. ledna 2024 se v místní víceúčelové budově uskutečnila valná hromada SDH Veselice, na které bylo shrnuto vše podstatné z činnosti sboru v roce 2023."
    }

    getContent(): ReactElement {
        return (
            <>
                <p>
                    V sobotu 6.&nbsp;ledna&nbsp;2024 se v místní víceúčelové budově uskutečnila valná hromada SDH
                    Veselice, na které bylo shrnuto vše podstatné z činnosti sboru v letech 2023.
                </p>

                <p>
                    <Video src={"https://www.youtube.com/embed/T1ylWnyQeRc"}/>
                </p>
            </>
        )
    }

    getPublishDate(): Date {
        return new Date(2024, 1, 6)
    }
}
