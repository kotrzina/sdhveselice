import {Article} from "./Article";
import {ReactElement} from "react";
import {Gallery} from "../components/Gallery/Gallery";

export class Article20250510 extends Article {

    getTitle(): string {
        return "Lesempolem 2025"
    }

    getSlug(): string {
        return "lesempolem-2025"
    }

    getImage(): string {
        return "/gallery/lesempolem_2025/1.webp"
    }

    getPreheader(): string | null {
        return "Běžecký závod Lesempolem 2025 ve Veselici."
    }

    getContent(): ReactElement {
        const resultsURL = "https://lesempolem.cz/vysledky-2025.html";
        return (
            <>
                <p>
                    10. května 2025 se ve Veselici uskutečnil již tradiční běžecký závod Lesempolem. Závodníci si mohli
                    vybrat z tratí 14, 42 a 84 km, které vedly krásnou přírodou kolem vesnice. Počasí bylo ideální a
                    závod se vydařil. Celkově se zúčastnilo 86 běžců.
                </p>

                <p>
                    Kompletní výsledky závodu naleznete na <a href={resultsURL}
                                                              target={"_blank"}>lesempolem.cz</a>.
                </p>

                <Gallery title={"Fotky"} srcs={[
                    "/gallery/lesempolem_2025/1.webp",
                    "/gallery/lesempolem_2025/2.webp",
                    "/gallery/lesempolem_2025/3.webp",
                ]}/>
            </>
        )
    }

    getPublishDate(): Date {
        return new Date(2025, 5, 10)
    }
}
