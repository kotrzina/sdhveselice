import {Article} from "./Article";
import {ReactElement} from "react";

export class Article20130701 extends Article {

    getTitle(): string {
        return "Závody ve Veselici 1996 - 2000"
    }

    getSlug(): string {
        return "zavody-ve-veselici-1996-2000"
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
                <p>Na této stránce lze najít výsledky ze závodů ve Veselici od roku 2006 do roku 2010. Některé ročníky jsou
                    nekompletní a jejich výsledky již nejsou dohledatelné.
                </p>

                <h2>1996 - 0. ročník</h2>
                <p>Závody se konaly 23.6.1996 a zúčastnilo se jich 9 družstvech mužů.</p>
                <table className="table table-bordered">
                    <tr>
                        <td>1.</td>
                        <td>Petrovice</td>
                    </tr>
                    <tr>
                        <td>2.-3.</td>
                        <td><strong>Veselice</strong>, Suchdol</td>
                    </tr>
                </table>
                <hr/>

                <h2>1997 - 1. ročník</h2>
                <p>Závody se konaly 8.6.1997 a zúčastnilo se jich 15 družstvech mužů.</p>
                <table className="table table-bordered">
                    <tr>
                        <td>1.</td>
                        <td>Krasová</td>
                    </tr>
                    <tr>
                        <td>2.</td>
                        <td>Černovice</td>
                    </tr>
                    <tr>
                        <td>3.</td>
                        <td>Bořitov</td>
                    </tr>
                    <tr>
                        <td>9.</td>
                        <td><strong>Veselice</strong></td>
                    </tr>
                </table>
                <hr/>
                <h2>1998 - 2.ročník</h2>
                <p>Závody se konaly 8.6.1997 a zúčastnilo se jich 16 družstvech mužů.</p>
                <table className="table table-bordered">
                    <tr>
                        <td>1.</td>
                        <td>Lelekovice</td>
                        <td>27,08 s</td>
                    </tr>
                    <tr>
                        <td>2.</td>
                        <td>Krasová</td>
                        <td>28,32 s</td>
                    </tr>
                    <tr>
                        <td>3.</td>
                        <td>Horní Poříčí</td>
                        <td>30,34 s</td>
                    </tr>
                    <tr>
                        <td>6.</td>
                        <td><strong>Veselice A</strong></td>
                        <td>35,82 s</td>
                    </tr>
                    <tr>
                        <td>11.</td>
                        <td><strong>Veselice B</strong></td>
                        <td>59,75 s</td>
                    </tr>
                </table>
                <hr/>
                <h2>1999 - 3.ročník</h2>
                <p>Závody se konaly 6.6.1999 a zúčastnilo se jich 15 družstvech mužů a 1 družstvo žen.</p>
                <table className="table table-bordered">
                    <tr>
                        <td>1.</td>
                        <td>Černovice</td>
                        <td>23,58 s</td>
                    </tr>
                    <tr>
                        <td>2.</td>
                        <td>Krasová</td>
                        <td>24,46 s</td>
                    </tr>
                    <tr>
                        <td>3.</td>
                        <td>Kotvrdovice</td>
                        <td>26,88 s</td>
                    </tr>
                    <tr>
                        <td>10.</td>
                        <td><strong>Veselice</strong></td>
                        <td>36,65 s</td>
                    </tr>
                </table>
                <hr/>
                <h2>2000 - 4.ročník</h2>
                <p>Závody se konaly 4.6.2000 a zúčastnilo se jich 20 družstvech mužů a 1 družstvo žen.</p>
                <table className="table table-bordered">
                    <tr>
                        <td>1.</td>
                        <td>Horní Poříčí A</td>
                        <td>24,75 s</td>
                    </tr>
                    <tr>
                        <td>2.</td>
                        <td>Letovice</td>
                        <td>25,98 s</td>
                    </tr>
                    <tr>
                        <td>3.</td>
                        <td>Horní Poříčí B</td>
                        <td>26,34 s</td>
                    </tr>
                    <tr>
                        <td>15.</td>
                        <td><strong>Veselice</strong></td>
                        <td>49,07 s</td>
                    </tr>
                </table>
            </>
        )
    }

    getPublishDate(): Date {
        return new Date(2013, 7, 1)
    }

}
