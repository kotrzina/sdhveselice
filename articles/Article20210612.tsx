import {Article} from "./Article";
import {Gallery} from "../components/Gallery/Gallery";

export class Article20210612 extends Article {

    getTitle(): string {
        return "Lesempolem 2021"
    }

    getSlug(): string {
        return "lesempolem-2021"
    }

    getImage(): string {
        return "/articles/lesempolem_2021.jpg"
    }

    getPreheader(): string | null {
        return "Dne 12. června 2021 jsme spolupořádali běžecké závody Lesempolem."
    }

    gallery: Array<string> = [
        "/gallery/lesempolem_2021/1.jpg",
        "/gallery/lesempolem_2021/2.jpg",
        "/gallery/lesempolem_2021/3.jpg",
        "/gallery/lesempolem_2021/4.jpg",
        "/gallery/lesempolem_2021/5.jpg",
        "/gallery/lesempolem_2021/6.jpg",
    ]

    getContent(): JSX.Element {
        return (
            <>
                <p>
                    Dne 12. června 2021 jsme spolupořádali běžecké závody Lesempolem. Tentokrát byl závod o něco delší, protože Lesempolem bylo zároveň
                    mistrovstvím České republiky v ultramaratonu. Mimo 63km dlouhou trať byl rovněž připraven maraton (42 km) a 10,5 km trať pro OBL. Kompletní
                    výsledky a další informace můžete najít na <a href={"https://lesempolem.cz/vysledky-2021.html"} target={"_blank"}>stránkách Lesempolem</a>.
                </p>

                <p>Doprovodný program byl také pestrý. Zdeněk Špíšek připravil pochoutky z hmyzu a zahrály nám dvě kapely - LeeBanda a Hovaduo.</p>

                <Gallery srcs={this.gallery}/>

                <p>Fotky: <a href={"https://dao.rajce.idnes.cz/Lesempolem_-_MCR_v_ultratrailu_2021"} target={"_blank"}>Daniel Orálek</a></p>
            </>
        )
    }

    getPublishDate(): Date {
        return new Date(2021, 6, 12)
    }

}
