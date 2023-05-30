import {Article} from "./Article";
import {ReactElement} from "react";

export class Article20130703 extends Article {

    getTitle(): string {
        return "Závody ve Veselici 2002"
    }

    getSlug(): string {
        return "zavody-ve-veselici-2002"
    }

    getImage(): string {
        return "/articles/zavody.jpg"
    }

    getPreheader(): string | null {
        return ""
    }

    getContent(): ReactElement {
        return (
            <>
                <h3>Ženy</h3>
                <table className="table table-bordered">
                    <tr>
                        <td>1.</td>
                        <td>Černovice</td>
                        <td>BK</td>
                        <td>26,05 s</td>
                    </tr>
                    <tr>
                        <td>2.</td>
                        <td>Míchov</td>
                        <td>BK</td>
                        <td>29,17 s</td>
                    </tr>
                    <tr>
                        <td>3.</td>
                        <td>Přívrat</td>
                        <td>UO</td>
                        <td>29,24 s</td>
                    </tr>
                    <tr>
                        <td>4.</td>
                        <td>Hoštice - Heroltice</td>
                        <td>VY</td>
                        <td>39,31 s</td>
                    </tr>
                    <tr>
                        <td>5.</td>
                        <td>Sloup</td>
                        <td>BK</td>
                        <td>63,70 s</td>
                    </tr>
                    <tr>
                        <td>6.</td>
                        <td>Vavřinec</td>
                        <td>BK</td>
                        <td>72,95 s</td>
                    </tr>
                    <tr>
                        <td>7.</td>
                        <td>Žďár</td>
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
                        <td>20,82 s</td>
                    </tr>
                    <tr>
                        <td>2.</td>
                        <td>Šošůvka</td>
                        <td>BK</td>
                        <td>20,97 s</td>
                    </tr>
                    <tr>
                        <td>3.</td>
                        <td>Hoštice - Heroltice</td>
                        <td>VY</td>
                        <td>23,20 s</td>
                    </tr>
                    <tr>
                        <td>4.</td>
                        <td>Přívrat A</td>
                        <td>UO</td>
                        <td>23,77 s</td>
                    </tr>
                    <tr>
                        <td>5.</td>
                        <td>Sebranice</td>
                        <td>BK</td>
                        <td>24,10 s</td>
                    </tr>
                    <tr>
                        <td>6.</td>
                        <td>Žernovník</td>
                        <td>BK</td>
                        <td>25,51 s</td>
                    </tr>
                    <tr>
                        <td>7.</td>
                        <td>Němčice</td>
                        <td>BK</td>
                        <td>28,09 s</td>
                    </tr>
                    <tr>
                        <td>8.</td>
                        <td>Míchov</td>
                        <td>BK</td>
                        <td>29,09 s</td>
                    </tr>
                    <tr>
                        <td>9.</td>
                        <td>Veselice</td>
                        <td>BK</td>
                        <td>35,14 s</td>
                    </tr>
                    <tr>
                        <td>10.</td>
                        <td>Vysočany</td>
                        <td>BK</td>
                        <td>40,45 s</td>
                    </tr>
                    <tr>
                        <td>11.</td>
                        <td>Ludikov</td>
                        <td>BK</td>
                        <td>42,79 s</td>
                    </tr>
                    <tr>
                        <td>&nbsp;</td>
                        <td>Přívrat B</td>
                        <td>UO</td>
                        <td>N</td>
                    </tr>
                    <tr>
                        <td>&nbsp;</td>
                        <td>Kuničky</td>
                        <td>BK</td>
                        <td>N</td>
                    </tr>
                    <tr>
                        <td>&nbsp;</td>
                        <td>Těchov</td>
                        <td>BK</td>
                        <td>N</td>
                    </tr>
                    <tr>
                        <td>&nbsp;</td>
                        <td>Žďár</td>
                        <td>BK</td>
                        <td>N</td>
                    </tr>
                    <tr>
                        <td>&nbsp;</td>
                        <td>Senetářov</td>
                        <td>BK</td>
                        <td>N</td>
                    </tr>
                    <tr>
                        <td>&nbsp;</td>
                        <td>Vavřinec</td>
                        <td>BK</td>
                        <td>N</td>
                    </tr>
                </table>
            </>
        )
    }

    getPublishDate(): Date {
        return new Date(2013, 7, 3)
    }

}
