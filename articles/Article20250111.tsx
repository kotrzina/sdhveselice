import {Article} from "./Article";
import {ReactElement} from "react";
import {Video} from "../components/Video/Video";

export class Article20250111 extends Article {

    getTitle(): string {
        return "Valná hromada za rok 2024"
    }

    getSlug(): string {
        return "valna-hromada-za-rok-2024"
    }

    getImage(): string {
        return "/articles/valna_hromada_2024.webp"
    }

    getPreheader(): string | null {
        return "Dne 11. ledna 2025 se v místní víceúčelové budově uskutečnila valná hromada SDH Veselice, na které bylo shrnuto vše podstatné z činnosti sboru v roce 2024."
    }

    getContent(): ReactElement {
        return (
            <>
                <p>
                    V sobotu 11.&nbsp;ledna&nbsp;2025 se v místní víceúčelové budově uskutečnila valná hromada SDH
                    Veselice, na které bylo shrnuto vše podstatné z činnosti sboru v roce 2024.
                </p>

                <p>
                    <Video src={"https://www.youtube.com/embed/5znCT7ldpNY"}/>
                </p>
            </>
        )
    }

    getPublishDate(): Date {
        return new Date(2025, 1, 11)
    }
}
