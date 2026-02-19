import {Article} from "./Article";
import {Gallery} from "../components/Gallery/Gallery";
import {ReactElement} from "react";

export class Article20260214 extends Article {

    getTitle(): string {
        return "Ostatky 2026"
    }

    getSlug(): string {
        return "ostatky-2026"
    }

    getImage(): string {
        return "/articles/ostatky_2026.jpg"
    }

    getPreheader(): string | null {
        return "V sobotu 14. 2. 2026 se ve Veselici konal tradiční ostatkový průvod. Sraz masek byl ve 13:00 u kapličky."
    }

    gallery: Array<string> = [
        "/gallery/ostatky_2026/1.jpg",
        "/gallery/ostatky_2026/2.jpg",
        "/gallery/ostatky_2026/3.jpg",
        "/gallery/ostatky_2026/4.jpg",
        "/gallery/ostatky_2026/5.jpg",
        "/gallery/ostatky_2026/6.jpg",
    ]

    getContent(): ReactElement {
        return (
            <>
                <p>V sobotu 14. 2. 2026 se ve Veselici konal tradiční ostatkový průvod. Sraz masek byl ve 13:00
                    u kapličky. Průvodu se zúčastnilo asi 50 masek. Zakončení proběhlo ve víceúčelové budově. Celá
                    akce se konala pod záštitou SDH Veselice a spolku Veselická kaplička.
                </p>
                <Gallery srcs={this.gallery}/>
            </>
        )
    }

    getPublishDate(): Date {
        return new Date(2026, 1, 14)
    }

}
