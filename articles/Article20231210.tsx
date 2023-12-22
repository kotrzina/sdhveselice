import {Article} from "./Article";
import {Gallery} from "../components/Gallery/Gallery";
import {ReactElement} from "react";

export class Article20231210 extends Article {

    getTitle(): string {
        return "Běh na historických lyžích"
    }

    getSlug(): string {
        return "beh-na-historickych-lyzich-2023"
    }

    getImage(): string {
        return "/gallery/lyze_2023/5.webp"
    }

    getPreheader(): string | null {
        return "Dne 10. prosince 2023 se vedle kulturního domu konal závod v běhu na historických lyžích."
    }

    gallery: Array<string> = [
        "/gallery/lyze_2023/1.webp",
        "/gallery/lyze_2023/3.webp",
        "/gallery/lyze_2023/4.webp",
        "/gallery/lyze_2023/5.webp",
    ]

    getContent(): ReactElement {
        return (
            <>
                <p>
                    Dne 10. prosince 2023 se ve Veselici vedle kulturního domu uskutečnil druhý ročník závodu na
                    historických lyžích. Tento rok se na start postavilo celkem pět závodníků v nelítostném souboji na
                    tři okruhy kolem kulturního domu.
                </p>

                <Gallery srcs={this.gallery}/>

            </>
        )
    }

    getPublishDate(): Date {
        return new Date(2023, 12, 10)
    }

}
