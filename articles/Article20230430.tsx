import {Article} from "./Article";
import {Video} from "../components/Video/Video";
import {ReactElement} from "react";

export class Article20230430 extends Article {

    private ravenWeb: string = "https://www.ravenhard.cz/"
    private ravenFbEvent: string = "https://fb.me/e/2Dx5mHqmi"
    private sdhFbEvent: string = "https://fb.me/e/3eDCjHxBp"

    getTitle(): string {
        return "Pozvánka na pouť a Lesempolem 2023"
    }

    getSlug(): string {
        return "pozvanka-na-pout-a-lesempolem-2023"
    }

    getImage(): string {
        return "/articles/veselice-dron-2023.webp"
    }

    getPreheader(): string | null {
        return "Už 10. června se můžete těšit na tradiční pouť a běžecké závody Lesempolem. Startujeme už v 7:00."
    }

    getContent(): ReactElement {
        return (
            <>
                <p>
                    <ul>
                        <li><strong>Kdy:</strong> 10. - 11. 6. 2023</li>
                        <li><strong>Kde:</strong> Sportovní areál ve Veselici</li>
                    </ul>
                </p>

                <h2>Sobota:</h2>
                <ul>
                    <li><strong>07:00</strong> - Lesempolem - start závodu Mistrovství ČR v ultramaratonu (63 km)</li>
                    <li><strong>10:00</strong> - Lesempolem - start maratonu a půlmaratonu</li>
                    <li><strong>13:00</strong> - koncert
                        <a href={this.ravenWeb}
                           target={"_blank"}
                           rel={"noreferrer"}
                           title={"Webové stránky Ravenhard - Gotthard Tribute Band"}
                        > Ravenhard - Gotthard Tribute Band
                        </a></li>
                    <li><strong>15:00</strong> - seskok parašutistů</li>
                    <li><strong>15:30</strong> - Lesempolem - vyhlášení výsledků</li>
                    <li><strong>16:00</strong> - koncert Ravenhard - rockové odpoledne</li>
                    <li><strong>21:00</strong> - taneční zabava se skupinou Styl</li>
                </ul>

                <h3>Facebook:</h3>
                <ul>
                    <li>Ravenhard - Gotthard Tribute Band - <a
                        href={this.ravenFbEvent}
                        target={"_blank"}
                        rel={"noreferrer"}
                        title={"Facebooková událost Ravenhard - Gotthard Tribute Band"}
                    >{this.ravenFbEvent}</a>
                    </li>
                    <li>Pouť ve Veselici - <a
                        href={this.sdhFbEvent}
                        target={"_blank"}
                        rel={"noreferrer"}
                        title={"Facebooková událost na stránce SDH Veselice"}
                    >{this.sdhFbEvent}</a>
                    </li>
                </ul>

                <h2>Neděle</h2>
                <p>Neděle bude již tradičně spojena s posezením u dobrého jídla a piva.</p>

                <h2>Plakát:</h2>
                <img width="100%" src="/articles/plakat-pout-2023.webp" alt="Pozvánka na Pouť"/>
            </>
        )
    }

    getPublishDate(): Date {
        return new Date(2023, 4, 30)
    }

}
