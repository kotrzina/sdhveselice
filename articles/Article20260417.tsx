import {Article} from "./Article";
import {ReactElement} from "react";
import {Button} from "react-bootstrap";
import {FacebookIcon} from "../components/Icons/FacebookIcon";

export class Article20260417 extends Article {

    getTitle(): string {
        return "Pouť a IV. sjezd rodáků ve Veselici"
    }

    getSlug(): string {
        return "pout-a-sjezd-rodaku-2026"
    }

    getImage(): string {
        return "/articles/sjezd_rodaku_2026.webp"
    }

    getPreheader(): string | null {
        return "Srdečně zveme rodáky, obyvatele, příbuzné i přátele na pouť a IV. sjezd rodáků ve Veselici 13. a 14. června 2026."
    }

    getContent(): ReactElement {
        return (
            <>
                <p>
                    Srdečně zveme rodáky, obyvatele, příbuzné i přátele na tradiční pouť a IV. sjezd rodáků.
                    Letos navíc slavíme <strong>780 let Veselice</strong> (první písemná zmínka z roku 1246).
                </p>

                <p>
                    <ul>
                        <li><strong>Kdy:</strong> sobota 13. a neděle 14. června 2026</li>
                        <li><strong>Kde:</strong> Veselice</li>
                    </ul>
                </p>

                <h3>Sobota 13. 6. — Pouť</h3>
                <p>
                    <ul>
                        <li><strong>12:00</strong> zahájení pouti, hry pro děti</li>
                        <li>pohádkoví Pat a Mat</li>
                        <li>loutkové divadlo <em>O kohoutkovi a slepičce</em></li>
                        <li><strong>21:00</strong> taneční zábava — k tanci hraje Trio Kent</li>
                    </ul>
                </p>

                <h3>Neděle 14. 6. — Sjezd rodáků</h3>
                <p>
                    <ul>
                        <li><strong>13:00</strong> přivítání rodáků, beseda v kulturním domě</li>
                        <li>odpoledne volný program</li>
                        <li>křest fotoknihy Veselice</li>
                        <li>k poslechu hraje kapela Frívajvl</li>
                    </ul>
                </p>

                <h3>Po oba dny</h3>
                <p>
                    <ul>
                        <li>panelová výstava fotografií</li>
                        <li>promítání videí</li>
                        <li>výstavka kronik</li>
                        <li>rozhledna Podvrší</li>
                        <li>skákací hrad a trampolína pro děti</li>
                        <li>občerstvení zajištěno</li>
                    </ul>
                </p>

                <p>
                    Srdečně zvou <strong>SDH Veselice</strong> a <strong>Osadní výbor Veselice</strong>.
                    Těšíme se na Vás!
                </p>

                <p>
                    <Button
                        href={"https://www.facebook.com/events/1497640201808642/"}
                        target={"_blank"}
                        variant={"primary"}
                    ><FacebookIcon/> Událost na Facebooku</Button>
                </p>
            </>
        )
    }

    getPublishDate(): Date {
        return new Date(2026, 3, 17)
    }
}
