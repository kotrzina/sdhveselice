import {Article} from "./Article";
import {ReactElement} from "react";
import {Button} from "react-bootstrap";

export class Article20260219 extends Article {

    getTitle(): string {
        return "Pozvánka na Lesempolem 2026"
    }

    getSlug(): string {
        return "pozvanka-na-lesempolem-2026"
    }

    getImage(): string {
        return "/gallery/lesempolem_2025/1.webp"
    }

    getPreheader(): string | null {
        return "Zveme vás na další ročník běžeckého závodu Lesempolem, který se uskuteční v sobotu 16. května 2026 ve Veselici."
    }

    getContent(): ReactElement {
        return (
            <>
                <p>
                    <ul>
                        <li><strong>Kdy: </strong> 16. 5. 2026</li>
                        <li><strong>Start ultramaratonu: </strong> v 7:00</li>
                        <li><strong>Start maratonu a kola: </strong> v 11:00</li>
                        <li><strong>Kde: </strong> Víceúčelová budova ve Veselici</li>
                    </ul>
                </p>

                <p>
                    Nejen vytrvalostní běžce, ale i všechny ty, kdo milují pohyb v přírodě, zveme na další ročník
                    mezi běžci oblíbeného ultra podniku. Letos si můžete vybrat ze tří tratí – ultramaraton (84 km),
                    maraton (42 km) a jedno kolo (14 km). Maraton je zařazen do Okresní běžecké ligy Blansko.
                </p>

                <p>
                    Prezence probíhá v pátek 18:00–20:00 a v sobotu 6:00–10:45 (minimálně 15 minut před startem
                    závodu). Pro příchozí diváky bude připraven kulturní program, výčep, bohaté občerstvení
                    a napínavé doprovodné dětské běhy.
                </p>

                <h3>Startovné</h3>
                <p>
                    <ul>
                        <li><strong>Ultramaraton:</strong> 1 000 Kč (pro členy ČAU sleva 200 Kč)</li>
                        <li><strong>Maraton:</strong> 500 Kč</li>
                        <li><strong>Kolo:</strong> 200 Kč</li>
                    </ul>
                </p>

                <p>
                    <Button
                        href={"https://lesempolem.cz/informace.html"}
                        target={"_blank"}
                        variant={"success"}
                    >Více informací a registrace</Button>
                </p>
            </>
        )
    }

    getPublishDate(): Date {
        return new Date(2026, 1, 19)
    }
}
