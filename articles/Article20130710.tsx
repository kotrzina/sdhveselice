import {Article} from "./Article";
import {ReactElement} from "react";

export class Article20130710 extends Article {

    getTitle(): string {
        return "Závody ve Veselici 2009"
    }

    getSlug(): string {
        return "zavody-ve-veselici-2009"
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
                <h2>Ženy</h2>
                <table className="table table-bordered">
                    <tr>
                        <th>Poř. č.</th>
                        <th>Družstvo</th>
                        <th>Okres</th>
                        <th>1. terč</th>
                        <th>2. terč</th>
                    </tr>
                    <tr>
                        <td>1.</td>
                        <td>Žernovník</td>
                        <td>BK</td>
                        <td>18,70 s</td>
                        <td>19,50 s</td>
                    </tr>
                    <tr>
                        <td>2.</td>
                        <td>Bohuňov</td>
                        <td>SY</td>
                        <td>22,90 s</td>
                        <td>21,66 s</td>
                    </tr>
                    <tr>
                        <td>3.</td>
                        <td>Černá Hora</td>
                        <td>BK</td>
                        <td>24,36 s</td>
                        <td>25,50 s</td>
                    </tr>
                    <tr>
                        <td>4.</td>
                        <td>Těchov</td>
                        <td>BK</td>
                        <td>N</td>
                        <td>N</td>
                    </tr>

                </table>
                <h2>Muži</h2>
                <table className="table table-bordered">
                    <tr>
                        <th>Poř. č.</th>
                        <th>Družstvo</th>
                        <th>Okres</th>
                        <th>1. terč</th>
                        <th>2. terč</th>
                    </tr>
                    <tr>
                        <td>1.</td>
                        <td>Černovice</td>
                        <td>BK</td>
                        <td>20,33 s</td>
                        <td>20,41 s</td>
                    </tr>
                    <tr>
                        <td>2.</td>
                        <td>Katov</td>
                        <td>BV</td>
                        <td>20,33 s</td>
                        <td>22,33 s</td>
                    </tr>
                    <tr>
                        <td>3.</td>
                        <td>Němčice</td>
                        <td>BK</td>
                        <td>20,66 s</td>
                        <td>22,61 s</td>
                    </tr>
                    <tr>
                        <td>4.</td>
                        <td>Němčice B</td>
                        <td>BK</td>
                        <td>23,68 s</td>
                        <td>22,84 s</td>
                    </tr>
                    <tr>
                        <td>5.</td>
                        <td>Sudice</td>
                        <td>BK</td>
                        <td>19,78 s</td>
                        <td>23,75 s</td>
                    </tr>
                    <tr>
                        <td>6.</td>
                        <td>Okrouhlá</td>
                        <td>BK</td>
                        <td>19,34 s</td>
                        <td>19,83 s</td>
                    </tr>
                    <tr>
                        <td>7.</td>
                        <td>Černá Hora</td>
                        <td>BK</td>
                        <td>20,00 s</td>
                        <td>20,17 s</td>
                    </tr>
                    <tr>
                        <td>8.</td>
                        <td>Jabloňany B</td>
                        <td>BK</td>
                        <td>26,04 s</td>
                        <td>26,56 s</td>
                    </tr>
                    <tr>
                        <td>9.</td>
                        <td>Černovice B</td>
                        <td>BK</td>
                        <td>27,22 s</td>
                        <td>24,08 s</td>
                    </tr>
                    <tr>
                        <td>10.</td>
                        <td>Malá Lhota</td>
                        <td>BK</td>
                        <td>29,22 s</td>
                        <td>24,58 s</td>
                    </tr>
                    <tr>
                        <td>11.</td>
                        <td>Veselice</td>
                        <td>BK</td>
                        <td>29,37 s</td>
                        <td>28,94 s</td>
                    </tr>
                    <tr>
                        <td>12.</td>
                        <td>Ostrov u Macochy</td>
                        <td>BK</td>
                        <td>30,35 s</td>
                        <td>29,36 s</td>
                    </tr>
                    <tr>
                        <td>13.</td>
                        <td>Bílovice</td>
                        <td>PV</td>
                        <td>30,66 s</td>
                        <td>32,18 s</td>
                    </tr>
                    <tr>
                        <td>14.</td>
                        <td>SK Petrovice</td>
                        <td>BK</td>
                        <td>39,61 s</td>
                        <td>38,11 s</td>
                    </tr>
                    <tr>
                        <td>15.</td>
                        <td>Bořitov</td>
                        <td>BK</td>
                        <td>43,91 s</td>
                        <td>24,83 s</td>
                    </tr>
                    <tr>
                        <td>16.</td>
                        <td>Senetářov</td>
                        <td>BK</td>
                        <td>51,23 s</td>
                        <td>51,36 s</td>
                    </tr>
                    <tr>
                        <td>17.</td>
                        <td>Žďár</td>
                        <td>BK</td>
                        <td>N</td>
                        <td>N</td>
                    </tr>
                    <tr>
                        <td>17.</td>
                        <td>Lavičky</td>
                        <td>ZR</td>
                        <td>N</td>
                        <td>N</td>
                    </tr>
                    <tr>
                        <td>17.</td>
                        <td>Jabloňany</td>
                        <td>BK</td>
                        <td>N</td>
                        <td>N</td>
                    </tr>
                </table>
            </>
        )
    }

    getPublishDate(): Date {
        return new Date(2013, 7, 10)
    }

}
