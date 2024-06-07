import {Article} from "./Article";
import {ReactElement} from "react";

export class Article20240607 extends Article {


    getTitle(): string {
        return "Pozvánka na pouť 2024"
    }

    getSlug(): string {
        return "pozvanka-na-pout-2024"
    }

    getImage(): string {
        return "/articles/pout_2014.jpg"
    }

    getPreheader(): string | null {
        return "14. června se můžete těšit na tradiční pouť. Tento rok i s nedělní dechovou muzikou."
    }

    getContent(): ReactElement {
        return (
            <>
                <p>
                    <ul>
                        <li><strong>Kdy:</strong> 14. - 16. 6. 2024</li>
                        <li><strong>Kde:</strong> Sportovní areál ve Veselici</li>
                    </ul>
                </p>

                <h2>Pátek</h2>
                <ul>
                    <li><strong>18:00</strong> - loutkové divadlo</li>
                    <li>reprodukovaná hudba</li>
                </ul>

                <h2>Sobota:</h2>
                <ul>
                    <li><strong>14:00</strong> - raketové odpoledne plné her</li>
                    <ul>
                        <li>výcvik kosmonautů</li>
                        <li>přetahování Bobka</li>
                        <li>běh mléčnou dráhou</li>
                        <li>tref leticí raketu</li>
                        <li>start rakety</li>
                    </ul>
                    <li><strong>21:00</strong> - pouťová zábava se skupinou <strong>Trio Kent</strong></li>
                </ul>

                <h2>Neděle</h2>
                <ul>
                    <li><strong>12:00</strong> - pouťová neděle</li>
                    <li><strong>14:00</strong> - dechovka - <strong>Královská hudba</strong> ze Křtin</li>
                </ul>

                <h2>Plakát:</h2>
                <img width="100%" src="/articles/pout_2024.webp" alt="Plakát na Pouť"/>
            </>
        )
    }

    getPublishDate(): Date {
        return new Date(2024, 6, 7)
    }
}
