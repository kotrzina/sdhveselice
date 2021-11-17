import {Article} from "./Article";
import {Gallery} from "../components/Gallery/Gallery";

export class Article20180225 extends Article {

    getTitle(): string {
        return "Běh na historických lyžích"
    }

    getSlug(): string {
        return "beh-na-historickych-lyzich-2018"
    }

    getImage(): string {
        return "/articles/lyze_2018.jpg"
    }

    getPreheader(): string | null {
        return "Dne 25. února 2018 se na poli pod rozhlednou konal vůbec první běh na historických lyžích."
    }

    gallery: Array<string> = [
        "/gallery/lyze_2018/1.jpg",
        "/gallery/lyze_2018/2.jpg",
        "/gallery/lyze_2018/3.jpg",
        "/gallery/lyze_2018/4.jpg",
        "/gallery/lyze_2018/5.jpg",
        "/gallery/lyze_2018/6.jpg",
    ]

    getContent(): JSX.Element {
        return (
            <>
                <p>
                    Dne 25. února 2018 se na poli pod rozhlednou konal vůbec první běh na historických lyžích. Start hlavního závodu
                    byl připraven na 14:30 a závodu se zúčastnilo cca 25 závodníků. I přes zabavný charakter akce a mrazivých - 15°C
                    se bojovalo až do posledních metrů. Předání cen a ukončení akce proběhlo v Hospůdce na Kasárnách.
                </p>

                <Gallery srcs={this.gallery}/>

            </>
        )
    }

    getPublishDate(): Date {
        return new Date(2018, 2, 25)
    }

}
