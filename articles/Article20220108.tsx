import {Article} from "./Article";
import {Video} from "../components/Video/Video";

export class Article20220108 extends Article {

    getTitle(): string {
        return "Valná hromada za rok 2020 a 2021"
    }

    getSlug(): string {
        return "valna-hromada-za-rok-2020-a-2021"
    }

    getImage(): string {
        return "/articles/valna_hromada_2020.jpg"
    }

    getPreheader(): string | null {
        return "Dne 8. ledna 2022 se v místní víceúčelové budově uskutečnila valná hromada SDH Veselice, na které bylo shrnuto vše podstatné z činnosti sboru v roce 2020 a 2021."
    }

    getContent(): JSX.Element {
        return (
            <>
                <p>
                    Dne 8.&nbsp;ledna&nbsp;2022 se v místní víceúčelové budově uskutečnila valná hromada SDH Veselice, na které bylo shrnuto vše podstatné
                    z činnosti sboru v letech 2020 a 2021.
                </p>

                <p>
                    <Video src={"https://www.youtube.com/embed/lczHqau7oAs"}/>
                </p>
            </>
        )
    }

    getPublishDate(): Date {
        return new Date(2022, 1, 8)
    }

}
