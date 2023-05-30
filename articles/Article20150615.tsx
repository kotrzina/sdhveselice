import {Article} from "./Article";
import {Gallery} from "../components/Gallery/Gallery";
import {ReactElement} from "react";

export class Article20150615 extends Article {

    getTitle(): string {
        return "Závody Lesempolem 2015"
    }

    getSlug(): string {
        return "zavody-lesempolem-2015"
    }

    getImage(): string {
        return "/articles/lesempolem_2015.jpg"
    }

    getPreheader(): string | null {
        return "Stalo se již tradicí, že se hasiči z Veselice podílí na pořádání běžeckých závodů Lesempolem, které se konají na tratích kolem naší rozhledny."
    }

    gallery: Array<string> = [
        "/gallery/lesempolem_2015/1.jpg",
        "/gallery/lesempolem_2015/2.jpg",
        "/gallery/lesempolem_2015/3.jpg",
        "/gallery/lesempolem_2015/4.jpg",
        "/gallery/lesempolem_2015/5.jpg",
    ]

    getContent(): ReactElement {
        return (
            <>
                <p>Stalo se již tradicí, že se hasiči z Veselice podílí na pořádání běžeckých závodů Lesempolem, které se konají na
                    tratích kolem naší rozhledny. Letoší rok nebyl výjimkou a do Veselice opět dorazili běžci. Závody se uskutečnily
                    13. 6. 2015 a naši členové pomáhali při navigaci účastníků na trati, registraci a vyhodnocení výsledků. Více
                    informací naleznete přímo na <a href="http://lesempolem.cz/">webových stránkách závodu Lesempolem</a>.</p>

                <h2>Zajímavé odkazy</h2>
                <ul>
                    <li><a target="_blank" href="http://lesempolem.cz/vysledky.html">Výsledky závodu</a></li>
                    <li><a target="_blank" href="http://www.oblblansko.cz/8-slider/210-lesem-polem-a-na-slunci">Článek na OBL</a></li>
                    <li><a target="_blank" href="http://nikol9.rajce.idnes.cz/Lesempolem_13._6._2015/">Fotogalerie</a></li>
                </ul>

                <Gallery srcs={this.gallery}/>
            </>
        )
    }

    getPublishDate(): Date {
        return new Date(2015, 6, 15)
    }

}
