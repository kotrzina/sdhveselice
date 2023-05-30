import {Article} from "./Article";
import {Gallery} from "../components/Gallery/Gallery";
import {Video} from "../components/Video/Video";
import {ReactElement} from "react";

export class Article20150902 extends Article {

    getTitle(): string {
        return "Zakončení prázdnin s orlojem"
    }

    getSlug(): string {
        return "zakonceni-prazdnin-s-orlojem"
    }

    getImage(): string {
        return "/articles/zakonceni_prazdnin_s_orlojem.jpg"
    }

    getPreheader(): string | null {
        return "V pátek 28. 8. 2015 se za spoluúčasti sdružení Kotržina konalo rozloučení s letními prázdninami."
    }

    gallery: Array<string> = [
        "/gallery/zakonceni_prazdnin_s_orlojem/1.jpg",
        "/gallery/zakonceni_prazdnin_s_orlojem/2.jpg",
        "/gallery/zakonceni_prazdnin_s_orlojem/3.jpg",
        "/gallery/zakonceni_prazdnin_s_orlojem/4.jpg",
        "/gallery/zakonceni_prazdnin_s_orlojem/5.jpg",
        "/gallery/zakonceni_prazdnin_s_orlojem/6.jpg",
        "/gallery/zakonceni_prazdnin_s_orlojem/7.jpg",
    ]

    getContent(): ReactElement {
        return (
            <>
                <p>V pátek 28. 8. 2015 se za spoluúčasti sdružení Kotržina konalo rozloučení s letními prázdninami. Celá akce
                    odstartovala v 17:45, kdy na poli pod rozhlednou seskočili tři parašutisti. Ihned po seskoku se šlo na
                    rozhlednu, kde byly nachystány pravidelné závody ve výběhu. Tentokrát s doprovodnou disciplínou slaňování, která
                    byla úrčena pro všechny odvážné účastníky. V tu dobu již bylo nachystáno sousedské posezení v parku, na které s
                    přibývajícím časem přicházelo čím dál tím více lidí. Celá akce pak vyvrcholila živým orlojem, na jehož záznam se
                    můžete podívat v krátkém video pod článkem. Celý večer pak uzavřel připravený ohňostroj.
                </p>

                <Video src={'https://www.youtube.com/embed/DFu8ODBwMp0'}/>

                <Gallery srcs={this.gallery}/>
            </>
        )
    }

    getPublishDate(): Date {
        return new Date(2015, 9, 2)
    }

}
