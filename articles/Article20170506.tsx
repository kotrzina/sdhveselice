import {Article} from "./Article";
import {Video} from "../components/Video/Video";
import {Gallery} from "../components/Gallery/Gallery";

export class Article20170506 extends Article {

    getTitle(): string {
        return "Lampionový průvod 2017"
    }

    getSlug(): string {
        return "lampionovy-pruvod-2017"
    }

    getImage(): string {
        return "/articles/lampionovy_pruvod_2017.jpg"
    }

    getPreheader(): string | null {
        return "Dne 6. května 2017 se již podruhé uskutečnil lampionový průvod. Akce se uskutečnila v prostorech veselského sportovního areálu."
    }

    gallery: Array<string> = [
        "/gallery/lampionovy_pruvod_2017/1.jpg",
        "/gallery/lampionovy_pruvod_2017/2.jpg",
        "/gallery/lampionovy_pruvod_2017/3.jpg",
        "/gallery/lampionovy_pruvod_2017/4.jpg",
        "/gallery/lampionovy_pruvod_2017/5.jpg",
        "/gallery/lampionovy_pruvod_2017/6.jpg",
    ]

    getContent(): JSX.Element {
        return (
            <>
                <p>Dne 6. května 2017 se již podruhé uskutečnil lampionový průvod. Děti již v odpoledních hodinách měli k dispozici
                    trampolínu a také si mohli vyzkoušet střelbu ze vzduchovky. K večeru s lampiony obešli Veselici a vrátili se
                    zpět na hřiště, kde již byla nachystána vatra.</p>

                <Video src={"https://www.youtube.com/embed/FV2bi_0C-gU"}/>
                <Gallery srcs={this.gallery}/>
            </>
        )
    }

    getPublishDate(): Date {
        return new Date(2017, 5, 6)
    }

}
