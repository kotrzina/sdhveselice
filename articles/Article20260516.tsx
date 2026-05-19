import {Article} from "./Article";
import {ReactElement} from "react";
import {Button} from "react-bootstrap";
import {FacebookIcon} from "../components/Icons/FacebookIcon";
import {Gallery} from "../components/Gallery/Gallery";

export class Article20260516 extends Article {

    getTitle(): string {
        return "Lesempolem 2026"
    }

    getSlug(): string {
        return "lesempolem-2026"
    }

    getImage(): string {
        return "/articles/lesempolem_2026.webp"
    }

    getPreheader(): string | null {
        return "V sobotu 16. 5. 2026 se ve Veselici uskutečnil další ročník běžeckého závodu Lesempolem. Skoro celý den pršelo, ale i tak dorazilo přes osmdesát závodníků."
    }

    gallery: Array<string> = [
        "/gallery/lesempolem_2026/1.jpg",
        "/gallery/lesempolem_2026/2.jpg",
        "/gallery/lesempolem_2026/3.jpg",
        "/gallery/lesempolem_2026/4.jpg",
        "/gallery/lesempolem_2026/5.jpg",
        "/gallery/lesempolem_2026/6.jpg",
        "/gallery/lesempolem_2026/7.jpg",
        "/gallery/lesempolem_2026/8.jpg",
        "/gallery/lesempolem_2026/9.jpg",
    ]

    getContent(): ReactElement {
        const resultsURL = "https://lesempolem.cz/vysledky-2026.html";
        return (
            <>
                <p>
                    V sobotu 16. května 2026 se ve Veselici uskutečnil další ročník
                    běžeckého závodu Lesempolem. Skoro celý den pršelo, přesto dorazilo
                    přes osmdesát závodníků na třech tratích — ultramaratonu (84 km),
                    maratonu (42 km) a jednom kole (14 km).
                </p>

                <p>
                    V ultramaratonu si pro vítězství doběhli Jan Šunka (KDPM Brno) a
                    Jana Šošolíková (SIS Construction). Maraton ovládli David Musil
                    (No Miles No Smiles) a Dana Urbánová (Letovice). Na nejkratší trati
                    byli nejrychlejší Adam Vybíhal (Cope de Bois) a Vanda Nováková
                    (Moravské Knínice). Kompletní výsledky najdete
                    na <a href={resultsURL} target={"_blank"}>lesempolem.cz</a>.
                </p>

                <p>
                    Pro nejmenší byly připraveny doprovodné dětské běhy a po slavnostním
                    vyhlášení vítězů následovalo loutkové divadlo, na které se přišly
                    podívat děti i samotní závodníci.
                </p>

                <p>
                    Děkujeme všem závodníkům, dobrovolníkům i divákům, kteří navzdory
                    dešti dorazili a vytvořili skvělou atmosféru.
                </p>

                <Gallery srcs={this.gallery}/>

                <p>
                    <Button
                        href={"https://www.facebook.com/events/1592463581972768/"}
                        target={"_blank"}
                        variant={"primary"}
                    ><FacebookIcon/> Událost na Facebooku</Button>
                </p>
            </>
        )
    }

    getPublishDate(): Date {
        return new Date(2026, 4, 16)
    }
}
