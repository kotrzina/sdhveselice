import {Article} from "./Article";

export class Article20130709 extends Article {

    getTitle(): string {
        return "Závody ve Veselici 2008"
    }

    getSlug(): string {
        return "zavody-ve-veselici-2008"
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
                <div className="clear"></div>
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
                        <td>Lhotky</td>
                        <td>ZR</td>
                        <td>19,34 s</td>
                        <td>19,38 s</td>
                    </tr>
                    <tr>
                        <td>2.</td>
                        <td>Žernovník</td>
                        <td>BK</td>
                        <td>19,70 s</td>
                        <td>20,86 s</td>
                    </tr>
                    <tr>
                        <td>3.</td>
                        <td>Šošůvka</td>
                        <td>BK</td>
                        <td>21,05 s</td>
                        <td>21,49 s</td>
                    </tr>
                    <tr>
                        <td>4.</td>
                        <td>Černá Hora</td>
                        <td>BK</td>
                        <td>22,73 s</td>
                        <td>22,94 s</td>
                    </tr>
                    <tr>
                        <td>5.</td>
                        <td>Sychotín</td>
                        <td>BK</td>
                        <td>25,09 s</td>
                        <td>25,09 s</td>
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
                        <td>Stanoviště</td>
                        <td>Brno - venkov</td>
                        <td>17,90 s</td>
                        <td>18,49 s</td>
                    </tr>
                    <tr>
                        <td>2.</td>
                        <td>Petrovice</td>
                        <td>TR</td>
                        <td>18,50 s</td>
                        <td>18,58 s</td>
                    </tr>
                    <tr>
                        <td>3.</td>
                        <td>Sychotín</td>
                        <td>BK</td>
                        <td>18,18 s</td>
                        <td>18,75 s</td>
                    </tr>
                    <tr>
                        <td>4.</td>
                        <td>Žernovník</td>
                        <td>BK</td>
                        <td>18,68 s</td>
                        <td>19,13 s</td>
                    </tr>
                    <tr>
                        <td>5.</td>
                        <td>Hluboké</td>
                        <td>..</td>
                        <td>17,94 s</td>
                        <td>19,51 s</td>
                    </tr>
                    <tr>
                        <td>6.</td>
                        <td>Němčice</td>
                        <td>BK</td>
                        <td>19,34 s</td>
                        <td>19,83 s</td>
                    </tr>
                    <tr>
                        <td>7.</td>
                        <td>Jabloňany A</td>
                        <td>BK</td>
                        <td>20,00 s</td>
                        <td>20,17 s</td>
                    </tr>
                    <tr>
                        <td>8.</td>
                        <td>Lomnice</td>
                        <td>BK</td>
                        <td>19,24 s</td>
                        <td>20,78 s</td>
                    </tr>
                    <tr>
                        <td>9.</td>
                        <td>Sudice</td>
                        <td>BK</td>
                        <td>21,27 s</td>
                        <td>21,28 s</td>
                    </tr>
                    <tr>
                        <td>10.</td>
                        <td>Senetářov</td>
                        <td>BK</td>
                        <td>20,01 s</td>
                        <td>21,74 s</td>
                    </tr>
                    <tr>
                        <td>11.</td>
                        <td>Šošůvka</td>
                        <td>BK</td>
                        <td>20,94 s</td>
                        <td>21,84 s</td>
                    </tr>
                    <tr>
                        <td>12.</td>
                        <td>Jabloňany B</td>
                        <td>BK</td>
                        <td>21,86 s</td>
                        <td>22,65 s</td>
                    </tr>
                    <tr>
                        <td>13.</td>
                        <td>Veselice</td>
                        <td>BK</td>
                        <td>24,93 s</td>
                        <td>25,02 s</td>
                    </tr>
                    <tr>
                        <td>14.</td>
                        <td>Černá Hora</td>
                        <td>BK</td>
                        <td>N</td>
                        <td>N</td>
                    </tr>
                </table>
            </>
        )
    }

    getPublishDate(): Date {
        return new Date(2013, 7, 9)
    }

}
