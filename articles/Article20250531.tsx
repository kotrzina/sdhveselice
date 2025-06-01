import {Article} from "./Article";
import {ReactElement} from "react";
import {Gallery} from "../components/Gallery/Gallery";
import {Table} from "react-bootstrap";
import {Video} from "../components/Video/Video";

export class Article20250531 extends Article {

    getTitle(): string {
        return "Výsledky okrskové soutěže 2025"
    }

    getSlug(): string {
        return "vysledky-okrskove-souteze-2025"
    }

    getImage(): string {
        return "/gallery/okrsek_2025/thumb.webp"
    }

    getPreheader(): string | null {
        return "Dne 31. května 2025 se na letišti v Petrovicích uskutečnilo 1. kolo požárního sportu okrsku Sloup."
    }

    getContent(): ReactElement {
        return (
            <>
                <p>
                    31. května 2025 se na letišti v Petrovicích uskutečnilo 1. kolo požárního sportu okrsku Sloup. Náš
                    sbor reprezentovalo družstvo &#34;mužů&#34; do 35 let.
                </p>

                <h2>Sestava</h2>
                <ul>
                    <li>Koš - Radim Boháč</li>
                    <li>Spoj - Jirka Fabiánek</li>
                    <li>Stroj - Luba Němec</li>
                    <li>Béčka - Tom Fabiánek</li>
                    <li>Rozdělovač - Radim Jarůšek</li>
                    <li>Levý proud - Hanka Knotková</li>
                    <li>Pravý proud - Anička Nečasová</li>
                </ul>

                <Video src={'https://www.youtube.com/embed/TohKV31fEUA'}/>

                <br/>
                <h2>Výsledky</h2>
                <Table bordered={true}>
                    <tbody>
                    <tr>
                        <td colSpan={3}><strong>Muži do 35 let</strong></td>
                    </tr>
                    <tr>
                        <td>1.</td>
                        <td>Žďár</td>
                        <td>21,48 s</td>
                    </tr>
                    <tr>
                        <td>2.</td>
                        <td>Kuničky</td>
                        <td>25,44 s</td>
                    </tr>
                    <tr>
                        <td>3.</td>
                        <td>Šošůvka</td>
                        <td>27,03 s</td>
                    </tr>
                    <tr>
                        <td>4.</td>
                        <td>Sloup</td>
                        <td>34,25 s</td>
                    </tr>
                    <tr>
                        <td>5.</td>
                        <td>Veselice</td>
                        <td>35,59 s</td>
                    </tr>
                    <tr>
                        <td>6.</td>
                        <td>Petrovice</td>
                        <td>46,71 s</td>
                    </tr>
                    <tr>
                        <td colSpan={3}><strong>Ženy</strong></td>
                    </tr>
                    <tr>
                        <td>1.</td>
                        <td>Petrovice A</td>
                        <td>23,97 s</td>
                    </tr>
                    <tr>
                        <td>2.</td>
                        <td>Petrovice B</td>
                        <td>24,07 s</td>
                    </tr>
                    <tr>
                        <td>3.</td>
                        <td>Sloup</td>
                        <td>27,51 s</td>
                    </tr>
                    <tr>
                        <td colSpan={3}><strong>Muži nad 35 let</strong></td>
                    </tr>
                    <tr>
                        <td>1.</td>
                        <td>Němčice</td>
                        <td>22,73 s</td>
                    </tr>
                    <tr>
                        <td>2.</td>
                        <td>Petrovice</td>
                        <td>25,06 s</td>
                    </tr>
                    <tr>
                        <td>3.</td>
                        <td>Housko</td>
                        <td>35,66 s</td>
                    </tr>
                    <tr>
                        <td>4.</td>
                        <td>Sloup</td>
                        <td>38,92 s</td>
                    </tr>
                    <tr>
                        <td>5.</td>
                        <td>Vysočany</td>
                        <td>86,06 s</td>
                    </tr>
                    <tr>
                        <td>6.</td>
                        <td>Vavřinec</td>
                        <td>N</td>
                    </tr>
                    <tr>
                        <td colSpan={3}><strong>Dorost</strong></td>
                    </tr>
                    <tr>
                        <td>1.</td>
                        <td>Němčice</td>
                        <td>18,98 s</td>
                    </tr>
                    <tr>
                        <td>2.</td>
                        <td>Žďár</td>
                        <td>25,09 s</td>
                    </tr>
                    </tbody>
                </Table>


                <Gallery title={"Fotky"} srcs={[
                    "/gallery/okrsek_2025/1.webp",
                    "/gallery/okrsek_2025/2.webp",
                    "/gallery/okrsek_2025/3.webp",
                    "/gallery/okrsek_2025/4.webp",
                    "/gallery/okrsek_2025/5.webp",
                    "/gallery/okrsek_2025/6.webp",
                ]}/>
            </>
        )
    }

    getPublishDate(): Date {
        return new Date(2025, 5, 31)
    }
}
