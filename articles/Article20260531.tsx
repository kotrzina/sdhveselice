import {Article} from "./Article";
import {ReactElement} from "react";
import {Gallery} from "../components/Gallery/Gallery";
import {Table} from "react-bootstrap";
import {Video} from "../components/Video/Video";

export class Article20260531 extends Article {

    getTitle(): string {
        return "Výsledky okrskové soutěže 2026"
    }

    getSlug(): string {
        return "vysledky-okrskove-souteze-2026"
    }

    getImage(): string {
        return "/gallery/okrsek_2026/thumb.webp"
    }

    getPreheader(): string | null {
        return "Dne 30. května 2026 se na letišti v Petrovicích uskutečnilo 1. kolo požárního sportu okrsku Sloup."
    }

    getContent(): ReactElement {
        return (
            <>
                <p>
                    30. května 2026 se na letišti v Petrovicích uskutečnilo 1. kolo požárního sportu okrsku Sloup. Náš
                    sbor reprezentovalo družstvo &#34;mužů&#34; do 35 let.
                </p>

                <h2>Sestava</h2>
                <ul>
                    <li>Koš - Hanka Knotková</li>
                    <li>Spoj - Jirka Fabiánek</li>
                    <li>Stroj - Luba Němec</li>
                    <li>Béčka - Tomáš Fabiánek</li>
                    <li>Rozdělovač - Radim Jarůšek</li>
                    <li>Levý proud - Radim Boháč</li>
                    <li>Pravý proud - Tomáš Kozák</li>
                </ul>

                <Video src={'https://www.youtube.com/embed/0yPC_954lqY'}/>

                <br/>
                <h2>Výsledky</h2>
                <Table bordered={true}>
                    <tbody>
                    <tr>
                        <td colSpan={3}><strong>Muži do 35 let</strong></td>
                    </tr>
                    <tr>
                        <td>1.</td>
                        <td>Šošůvka</td>
                        <td>24,01 s</td>
                    </tr>
                    <tr>
                        <td>2.</td>
                        <td>Žďár</td>
                        <td>24,05 s</td>
                    </tr>
                    <tr>
                        <td>3.</td>
                        <td>Kuničky</td>
                        <td>26,21 s</td>
                    </tr>
                    <tr>
                        <td>4.</td>
                        <td>Petrovice</td>
                        <td>26,28 s</td>
                    </tr>
                    <tr>
                        <td>5.</td>
                        <td>Sloup</td>
                        <td>29,17 s</td>
                    </tr>
                    <tr>
                        <td>6.</td>
                        <td>Veselice</td>
                        <td>58,76 s</td>
                    </tr>
                    <tr>
                        <td colSpan={3}><strong>Ženy</strong></td>
                    </tr>
                    <tr>
                        <td>1.</td>
                        <td>Petrovice</td>
                        <td>29,42 s</td>
                    </tr>
                    <tr>
                        <td>2.</td>
                        <td>Sloup</td>
                        <td>N</td>
                    </tr>
                    <tr>
                        <td colSpan={3}><strong>Muži nad 35 let</strong></td>
                    </tr>
                    <tr>
                        <td>1.</td>
                        <td>Němčice</td>
                        <td>22,58 s</td>
                    </tr>
                    <tr>
                        <td>2.</td>
                        <td>Petrovice</td>
                        <td>24,68 s</td>
                    </tr>
                    <tr>
                        <td>3.</td>
                        <td>Vavřinec</td>
                        <td>29,23 s</td>
                    </tr>
                    <tr>
                        <td>4.</td>
                        <td>Sloup</td>
                        <td>33,53 s</td>
                    </tr>
                    <tr>
                        <td>5.</td>
                        <td>Suchdol</td>
                        <td>39,68 s</td>
                    </tr>
                    <tr>
                        <td>6.</td>
                        <td>Housko</td>
                        <td>46,66 s</td>
                    </tr>
                    <tr>
                        <td>7.</td>
                        <td>Vysočany</td>
                        <td>N</td>
                    </tr>
                    <tr>
                        <td colSpan={3}><strong>Dorost</strong></td>
                    </tr>
                    <tr>
                        <td>1.</td>
                        <td>Žďár</td>
                        <td>18,53 s</td>
                    </tr>
                    <tr>
                        <td>2.</td>
                        <td>Vysočany</td>
                        <td>66,66 s</td>
                    </tr>
                    <tr>
                        <td>3.</td>
                        <td>Kuničky</td>
                        <td>N</td>
                    </tr>
                    </tbody>
                </Table>


                <Gallery title={"Fotky"} srcs={[
                    "/gallery/okrsek_2026/1.webp",
                    "/gallery/okrsek_2026/2.webp",
                    "/gallery/okrsek_2026/3.webp",
                    "/gallery/okrsek_2026/4.webp",
                    "/gallery/okrsek_2026/5.webp",
                    "/gallery/okrsek_2026/6.webp",
                    "/gallery/okrsek_2026/7.webp",
                ]}/>
            </>
        )
    }

    getPublishDate(): Date {
        return new Date(2026, 4, 31)
    }
}
