import {Article} from "./Article";
import {Video} from "../components/Video/Video";
import {ReactElement} from "react";

export class Article20180106 extends Article {

    getTitle(): string {
        return "Valná hromada za rok 2017"
    }

    getSlug(): string {
        return "valna-hromada-za-rok-2017"
    }

    getImage(): string {
        return "/articles/valna_hromada_2017.png"
    }

    getPreheader(): string | null {
        return "Dne 6. ledna 2018 se v místní víceúčelové budově uskutečnila valná hromada SDH Veselice."
    }

    getContent(): ReactElement {
        return (
            <>
                <p>
                    Dne 6.&nbps;ledna 2018 se v místní víceúčelové budově uskutečnila valná hromada SDH Veselice. Zúčastnilo se celkem 24 členů a 8 hostů.
                </p>

                <Video src={"https://www.youtube.com/embed/4MyI6jUgqHI"} title={"Prezentace činnosti za rok 2017"}/>
            </>
        )
    }

    getPublishDate(): Date {
        return new Date(2018, 1, 6)
    }

}
