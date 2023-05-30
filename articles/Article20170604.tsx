import {Article} from "./Article";
import {Video} from "../components/Video/Video";
import {ReactElement} from "react";

export class Article20170604 extends Article {

    getTitle(): string {
        return "Požár suchdolské zastávky"
    }

    getSlug(): string {
        return "pozar-suchdolske-zastavky"
    }

    getImage(): string {
        return "/articles/pozar_suchdolske_zastavky.jpg"
    }

    getPreheader(): string | null {
        return "Dne 4. červen 2017 ve 12:23 byl nahlášen požár nízké budovy v Suchdole. Po příjezdu bylo zjištěno, že hoří místní autobusová zastávka."
    }

    getContent(): ReactElement {
        return (
            <>
                <p>Dne 4. červen 2017 ve 12:23 byl nahlášen požár nízké budovy v Suchdole. Po příjezdu bylo zjištěno, že hoří místní
                    autobusová zastávka. Likvidace proběhla zhruba v půl hodině - oficiální čas 12:54. Z veselského družstva k
                    události
                    vyjelo celkem 6 hasičů: Lubomír Němec, Tomáš Kozák, Jiří Fabiánek, Jan Fabiánek, Milan Fabiánek a Filip
                    Fabiánek. Po ukončení hasebních prací a práce vyšetřovatelů byl zbytek zastávky rovou rozebrán a převezen na
                    sběrný
                    dvůr.</p>
                <p>
                    <a className="btn btn-danger"
                       href="http://www.firebrno.cz/modules/incidents/detail.php?filter[id]=224668062&district_id=3701"
                       target="_blank">Více informací na webu Firebrno.
                    </a>
                </p>

                <Video src={"https://www.youtube.com/embed/BC1PTHY1m8k"} title={"Video - hořící zastávka"}/>
            </>
        )
    }

    getPublishDate(): Date {
        return new Date(2017, 6, 4)
    }

}
