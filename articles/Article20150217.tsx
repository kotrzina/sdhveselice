import {Article} from "./Article";
import {Gallery} from "../components/Gallery/Gallery";

export class Article20150217 extends Article {

    getTitle(): string {
        return "Ostatky 2015 - fotogalerie"
    }

    getSlug(): string {
        return "ostatky-2015-fotogalerie"
    }

    getImage(): string {
        return "/articles/ostatky_2015.jpg"
    }

    getPreheader(): string | null {
        return "Dne 14. 2. 2015 se ve Veselici uskutečnil tradiční ostatkový průvod obcí. Celé akce se zúčastnilo asi 15 masek."
    }

    gallery: Array<string> = [
        "/gallery/ostatky_2015/1.jpg",
        "/gallery/ostatky_2015/2.jpg",
        "/gallery/ostatky_2015/3.jpg",
        "/gallery/ostatky_2015/4.jpg",
        "/gallery/ostatky_2015/5.jpg",
        "/gallery/ostatky_2015/6.jpg",
        "/gallery/ostatky_2015/7.jpg",
        "/gallery/ostatky_2015/8.jpg",
        "/gallery/ostatky_2015/9.jpg",
        "/gallery/ostatky_2015/10.jpg",
        "/gallery/ostatky_2015/11.jpg",
        "/gallery/ostatky_2015/12.jpg",
        "/gallery/ostatky_2015/13.jpg",
        "/gallery/ostatky_2015/14.jpg",
        "/gallery/ostatky_2015/15.jpg",
    ]

    getContent(): JSX.Element {
        return (
            <>
                Dne 14. 2. 2015 se ve Veselici uskutečnil tradiční ostatkový průvod obcí. Celé akce se zúčastnilo asi 15 masek. Celé akci nechyběla
                <a target="_blank" href="https://www.youtube.com/watch?v=7mWA9kl-728&feature=youtu.be">dobrá
                    zábava</a>. Všem zúčastněným děkujeme!

                <Gallery srcs={this.gallery}/>
            </>
        )
    }

    getPublishDate(): Date {
        return new Date(2015, 2, 17)
    }

}
