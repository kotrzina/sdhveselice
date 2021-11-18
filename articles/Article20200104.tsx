import {Article} from "./Article";
import {Video} from "../components/Video/Video";

export class Article20200104 extends Article {

    getTitle(): string {
        return "Valná hromada za rok 2019"
    }

    getSlug(): string {
        return "valna-hromada-za-rok-2019"
    }

    getImage(): string {
        return "/articles/valna_hromada_2019.jpg"
    }

    getPreheader(): string | null {
        return "Dne 4. ledna 2020 se v místní víceúčelové budově uskutečnila valná hromada SDH Veselice, na které bylo shrnuto vše podstatné z činnosti sboru v roce 2019."
    }

    getContent(): JSX.Element {
        return (
            <>
                <p>
                    Dne 4.&nbsp;ledna&nbsp;2020 se v místní víceúčelové budově uskutečnila valná hromada SDH Veselice, na které bylo shrnuto vše podstatné
                    z činnosti sboru v roce 2019.
                </p>

                <p>
                    <Video src={"https://www.youtube.com/embed/Iv3gvq5MrmA"}/>
                </p>
            </>
        )
    }

    getPublishDate(): Date {
        return new Date(2020, 1, 4)
    }

}
