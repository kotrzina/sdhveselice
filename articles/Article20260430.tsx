import {Article} from "./Article";
import {Gallery} from "../components/Gallery/Gallery";
import {ReactElement} from "react";
import {Button} from "react-bootstrap";
import {FacebookIcon} from "../components/Icons/FacebookIcon";

export class Article20260430 extends Article {

    getTitle(): string {
        return "Pálení čarodějnic ve Veselici"
    }

    getSlug(): string {
        return "paleni-carodejnic-2026"
    }

    getImage(): string {
        return "/articles/carodejnice_2026.webp"
    }

    getPreheader(): string | null {
        return "Ve čtvrtek 30. 4. 2026 jsme na Svazarmu ve Veselici uspořádali Pálení čarodějnic. Program byl letos obohacen o čarodějnické klání pro děti."
    }

    gallery: Array<string> = [
        "/gallery/carodejnice_2026/1.jpg",
        "/gallery/carodejnice_2026/2.jpg",
        "/gallery/carodejnice_2026/3.jpg",
        "/gallery/carodejnice_2026/4.jpg",
        "/gallery/carodejnice_2026/5.jpg",
        "/gallery/carodejnice_2026/6.jpg",
        "/gallery/carodejnice_2026/7.jpg",
        "/gallery/carodejnice_2026/8.jpg",
        "/gallery/carodejnice_2026/9.jpg",
    ]

    getContent(): ReactElement {
        return (
            <>
                <p>
                    Pálení čarodějnic máme za sebou. Ve čtvrtek 30. 4. 2026 jsme se sešli na Svazarmu ve Veselici,
                    abychom společně užili podvečer plný ohně a pohody.
                </p>

                <p>
                    Program byl letos obohacen o čarodějnické klání, které začalo zhruba od 17:00. Děti procházely
                    celkem patnáct stanovišť a plnily nejrůznější úkoly. Na konci na ně čekala odměna v podobě
                    objeveného pokladu.
                </p>

                <p>
                    Nechybělo ani tradiční zázemí akce — vatra, skákací hrad, opékání párků a občerstvení.
                    Děkujeme všem, kteří přišli, i těm, kteří se podíleli na přípravě.
                </p>

                <Gallery srcs={this.gallery}/>

                <p>
                    <Button
                        href={"https://www.facebook.com/events/1758452195136273/"}
                        target={"_blank"}
                        variant={"primary"}
                    ><FacebookIcon/> Událost na Facebooku</Button>
                </p>
            </>
        )
    }

    getPublishDate(): Date {
        return new Date(2026, 3, 30)
    }
}
