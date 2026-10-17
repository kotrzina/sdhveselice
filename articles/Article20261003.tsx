import {Article} from "./Article";
import {ReactElement} from "react";
import {Gallery} from "../components/Gallery/Gallery";

export class Article20261003 extends Article {

    getTitle(): string {
        return "Strašidelný les 2026"
    }

    getSlug(): string {
        return "strasidelny-les-2026"
    }

    getImage(): string {
        return "/gallery/strasidelny_les_2026/thumb.webp"
    }

    getPreheader(): string | null {
        return "V sobotu 3. října 2026 se v lese u Veselice znovu probudila strašidla. Tradiční Strašidelný les jako každý rok připravily holky ze spolku Veselická kaplička."
    }

    getContent(): ReactElement {
        return (
            <>
                <p>
                    Tradiční <strong>Strašidelný les</strong> každý rok připravují holky ze spolku
                    {" "}<strong>Veselická kaplička</strong>. Akci sice nepořádá náš sbor, ale v roli strašidel se jí
                    zúčastnila řada našich členů, a tak se o ni rádi podělíme i tady.
                </p>

                <p>
                    V sobotu 3. října se děti s rodiči podvečer vydaly na trasu lesem. Cestou potkávaly kata
                    s gilotinou, mnicha s jeptiškou, bílé nevěsty, klauny, čerty, dřevorubce s motorovou pilou,
                    obřího pavouka, zombíky i lesní mužíky s muchomůrkou. Kdo prošel celou trasu, mohl se na konci
                    zahřát v sále u strašidelných dobrot.
                </p>

                <p>
                    Velké díky patří holkám z Veselické kapličky za přípravu a všem strašidlům za odvahu
                    a skvělé masky. Těšíme se zase příští rok!
                </p>

                <Gallery title={"Fotky"} srcs={[
                    "/gallery/strasidelny_les_2026/1.webp",
                    "/gallery/strasidelny_les_2026/2.webp",
                    "/gallery/strasidelny_les_2026/3.webp",
                    "/gallery/strasidelny_les_2026/4.webp",
                    "/gallery/strasidelny_les_2026/5.webp",
                    "/gallery/strasidelny_les_2026/6.webp",
                    "/gallery/strasidelny_les_2026/7.webp",
                    "/gallery/strasidelny_les_2026/8.webp",
                    "/gallery/strasidelny_les_2026/9.webp",
                    "/gallery/strasidelny_les_2026/10.webp",
                    "/gallery/strasidelny_les_2026/11.webp",
                    "/gallery/strasidelny_les_2026/12.webp",
                    "/gallery/strasidelny_les_2026/13.webp",
                    "/gallery/strasidelny_les_2026/14.webp",
                    "/gallery/strasidelny_les_2026/15.webp",
                    "/gallery/strasidelny_les_2026/16.webp",
                    "/gallery/strasidelny_les_2026/17.webp",
                    "/gallery/strasidelny_les_2026/18.webp",
                ]}/>
            </>
        )
    }

    getPublishDate(): Date {
        return new Date(2026, 9, 3)
    }
}
