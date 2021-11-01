import {Article} from "./Article";

export class Article20130702 extends Article {

    getTitle(): string {
        return "Závody ve Veselici 2001"
    }

    getSlug(): string {
        return "zavody-ve-veselici-2001"
    }

    getImage(): string {
        return "/articles/zavody.jpg"
    }

    getPreheader(): string | null {
        return ""
    }

    getContent(): JSX.Element {
        return (
            <>
                <h3>Ženy</h3>
                <table className="table table-bordered">
                    <tr>
                        <td>1.</td>
                        <td>Bohuňov</td>
                        <td>ZR</td>
                        <td>25,59 s</td>
                    </tr>
                    <tr>
                        <td>2.</td>
                        <td>Černovice</td>
                        <td>BK</td>
                        <td>26,49 s</td>
                    </tr>
                    <tr>
                        <td>3.</td>
                        <td>Žernovník</td>
                        <td>BK</td>
                        <td>31,30 s</td>
                    </tr>
                    <tr>
                        <td>4.</td>
                        <td>Žďár</td>
                        <td>BK</td>
                        <td>35,88 s</td>
                    </tr>
                    <tr>
                        <td>5.</td>
                        <td>Velké Opatovice</td>
                        <td>BK</td>
                        <td>47,41 s</td>
                    </tr>
                    <tr>
                        <td>6.</td>
                        <td>Míchov</td>
                        <td>BK</td>
                        <td>N</td>
                    </tr>
                </table>

                <h3>Muži</h3>
                <table className="table table-bordered">
                    <tr>
                        <td>1.</td>
                        <td>Černovice</td>
                        <td>BK</td>
                        <td>21,32 s</td>
                    </tr>
                    <tr>
                        <td>2.</td>
                        <td>Bořitov</td>
                        <td>BK</td>
                        <td>21,38 s</td>
                    </tr>
                    <tr>
                        <td>3.</td>
                        <td>Šošůvka</td>
                        <td>BK</td>
                        <td>21,73 s</td>
                    </tr>
                    <tr>
                        <td>4.</td>
                        <td>Němčice</td>
                        <td>BK</td>
                        <td>21,99 s</td>
                    </tr>
                    <tr>
                        <td>5.</td>
                        <td>Senetářov</td>
                        <td>BK</td>
                        <td>22,08 s</td>
                    </tr>
                    <tr>
                        <td>6.</td>
                        <td>Kuničky</td>
                        <td>BK</td>
                        <td>28,66 s</td>
                    </tr>
                    <tr>
                        <td>7.</td>
                        <td>Sebranice</td>
                        <td>BK</td>
                        <td>28,91 s</td>
                    </tr>
                    <tr>
                        <td>8.</td>
                        <td>Brťov - Jeneč</td>
                        <td>BK</td>
                        <td>30,95 s</td>
                    </tr>
                    <tr>
                        <td>9.</td>
                        <td>Petrovice</td>
                        <td>BK</td>
                        <td>34,16 s</td>
                    </tr>
                    <tr>
                        <td>10.</td>
                        <td>Rozhrání</td>
                        <td>BK</td>
                        <td>35,66 s</td>
                    </tr>
                    <tr>
                        <td>11.</td>
                        <td>Veselice</td>
                        <td>BK</td>
                        <td>36,49 s</td>
                    </tr>
                    <tr>
                        <td>12.</td>
                        <td>Velké Opatovice</td>
                        <td>BK</td>
                        <td>37,21 s</td>
                    </tr>
                    <tr>
                        <td>13.</td>
                        <td>Míchov</td>
                        <td>BK</td>
                        <td>37,23 s</td>
                    </tr>
                    <tr>
                        <td>14.</td>
                        <td>Sudice</td>
                        <td>BK</td>
                        <td>37,75 s</td>
                    </tr>
                    <tr>
                        <td>15.</td>
                        <td>Vysočany</td>
                        <td>BK</td>
                        <td>39,41s</td>
                    </tr>
                    <tr>
                        <td>16.</td>
                        <td>Těchov</td>
                        <td>BK</td>
                        <td>48,60 s</td>
                    </tr>
                    <tr>
                        <td>17.</td>
                        <td>Žernovník</td>
                        <td>BK</td>
                        <td>49,80 s</td>
                    </tr>
                    <tr>
                        <td>&nbsp;</td>
                        <td>Horní Poříčí</td>
                        <td>BK</td>
                        <td>N</td>
                    </tr>
                    <tr>
                        <td>&nbsp;</td>
                        <td>Těchov A</td>
                        <td>BK</td>
                        <td>N</td>
                    </tr>
                    <tr>
                        <td>&nbsp;</td>
                        <td>Dolní Lhota</td>
                        <td>BK</td>
                        <td>N</td>
                    </tr>
                </table>
            </>
        )
    }

    getPublishDate(): Date {
        return new Date(2013, 7, 2)
    }

}
