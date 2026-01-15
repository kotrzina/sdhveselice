import {Article} from "./Article";
import {ReactElement} from "react";
import {Video} from "../components/Video/Video";

export class Article20260103 extends Article {

    getTitle(): string {
        return "Valná hromada za rok 2025"
    }

    getSlug(): string {
        return "valna-hromada-za-rok-2025"
    }

    getImage(): string {
        return "/articles/valna_hromada_2025.webp"
    }

    getPreheader(): string | null {
        return "Dne 3. ledna 2026 se v místní víceúčelové budově uskutečnila valná hromada SDH Veselice, na které bylo shrnuto vše podstatné z činnosti sboru v roce 2025."
    }

    getContent(): ReactElement {
        return (
            <>
                <p>
                    V sobotu 3.&nbsp;ledna&nbsp;2026 se v místní víceúčelové budově uskutečnila valná hromada SDH
                    Veselice, na které bylo shrnuto vše podstatné z činnosti sboru v roce 2025.
                </p>

                <p>
                    <Video src={"https://www.youtube.com/embed/gWfBisiP6-4"}/>
                </p>
            </>
        )
    }

    getPublishDate(): Date {
        return new Date(2026, 0, 3)
    }
}
