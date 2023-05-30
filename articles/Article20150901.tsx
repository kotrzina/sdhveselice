import {Article} from "./Article";
import {Gallery} from "../components/Gallery/Gallery";
import {ReactElement} from "react";

export class Article20150901 extends Article {

    getTitle(): string {
        return "Opakovaný požár trávy v Suchdole"
    }

    getSlug(): string {
        return "opakovany-pozar-travy-v-suchdole"
    }

    getImage(): string {
        return "/articles/pozar_travy_v_suchdole.jpg"
    }

    getPreheader(): string | null {
        return "V dnech 8. a 9. srpna 2015 naše jednotka vyjela k požáru trávy do Suchdolu. Hořela zahrada nad autobusovou zastávkou směrem do Veselice."
    }

    gallery: Array<string> = [
        "/gallery/pozar_v_suchdole/1.jpg",
        "/gallery/pozar_v_suchdole/2.jpg",
        "/gallery/pozar_v_suchdole/3.jpg",
        "/gallery/pozar_v_suchdole/4.jpg",
        "/gallery/pozar_v_suchdole/5.jpg",
        "/gallery/pozar_v_suchdole/6.jpg",
    ]

    getContent(): ReactElement {
        return (
            <>
                <p>V dnech 8. a 9. srpna 2015 naše jednotka vyjela k požáru trávy do Suchdolu. Hořela zahrada nad autobusovou
                    zastávkou směrem do Veselice. V sobotu 8. srpna začalo hořet hned v raních hodinách. Poplach byl vyhlášen v
                    5:34. Znovu začalo hořet následující den v 15:27. Složení našeho družstva bylo po dobu obou výjezdů stejné a to:
                    Lubomír Němec, Martin Nečas, Milan Fabiánek, Lukáš Souček a Tomáš Kozák.
                </p>

                <Gallery srcs={this.gallery}/>
            </>
        )
    }

    getPublishDate(): Date {
        return new Date(2015, 9, 1)
    }

}
