import {Article} from "./Article";
import {Video} from "../components/Video/Video";
import {Gallery} from "../components/Gallery/Gallery";
import {ReactElement} from "react";

export class Article20170225 extends Article {

    getTitle(): string {
        return "Ostatky 2017"
    }

    getSlug(): string {
        return "ostatky-2017"
    }

    getImage(): string {
        return "/articles/ostatky_2017.jpg"
    }

    getPreheader(): string | null {
        return "V sobotu 25. 2. 2017 se Veselici konal tradiční ostatkový průvod. Sraz masek byl jako každý rok ve 12:30 u staré hasičské zbrojnice."
    }

    gallery: Array<string> = [
        "/gallery/ostatky_2017/1.jpg",
        "/gallery/ostatky_2017/2.jpg",
        "/gallery/ostatky_2017/3.jpg",
        "/gallery/ostatky_2017/4.jpg",
        "/gallery/ostatky_2017/5.jpg",
        "/gallery/ostatky_2017/6.jpg",
    ]

    getContent(): ReactElement {
        return (
            <>
                <p>V sobotu 25. 2. 2017 se Veselici konal tradiční ostatkový průvod. Sraz masek byl jako každý rok ve 12:30 u staré
                    hasičské zbrojnice. Průvodu se zúčastnilo asi 20 masek. Zakončení bylo jako loni v místním kulturním domě. Celá
                    akce se konala pod zaštitou SDH a spolku Veselská kaplička.
                </p>
                <Video src={"https://www.youtube.com/embed/27no877EabM"}/>
                <Gallery srcs={this.gallery}/>
            </>
        )
    }

    getPublishDate(): Date {
        return new Date(2017, 2, 25)
    }

}
