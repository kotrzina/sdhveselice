import {Article} from "./Article";

export class Article20170527 extends Article {

    getTitle(): string {
        return "Výsledky okrskové soutěže 2017"
    }

    getSlug(): string {
        return "vysledky-okrskove-souteze-2017"
    }

    getImage(): string {
        return "/articles/okrsek_2017.jpg"
    }

    getPreheader(): string | null {
        return "Dne 27. května se ve sportovním areálu ve Vavřinci uskutečnilo 1. kolo požárního sportu okrsku Sloup. Veselské družstvo zde mělo zastoupení pouze v kategorii mužů do 35 let."
    }

    getContent(): JSX.Element {
        return (
            <>
                <p>Dne 27. května se ve sportovním areálu ve Vavřinci uskutečnilo 1. kolo požárního sportu okrsku Sloup. Veselské
                    družstvo zde mělo zastoupení pouze v kategorii mužů do 35 let.</p>
                <p>Ke štafetě nastoupil na okno Lubomír Němec, bariéru přeskočil Jirka Fabiánek, hadice s kladinou zdolal Tomáš
                    Kozák a s hasicím přístrojem uzavíral štafetu Martin Nečas. Složení útoku pro tento rok bylo docela divoké,
                    protože díky nedostatku lidí jsme museli sáhnout i do řad členů, kteří nikdy požární sport aktivně nedělali. Na
                    proudy byli nasazeni Aleš Kozák a Jirka Skoták, s rozdělovačem šel Ruda Skoumal, bečka Tomáš Kozák, mašinu
                    obsloužil Martin Nečas a nalití vody Jirka Fabiánek na koši a Lubomír Němec na narážce. V tomto složení se
                    našemu sboru podařilo vybojovat krásné 5. místo.</p>

                <div className="clear"></div>

                <h2>Video ze štafety:</h2>
                <div className="responsive-video">
                    <iframe src="https://www.youtube.com/embed/DFAh72Doswo" frameBorder="0" allowFullScreen/>
                </div>

                <h2>Video z útoku:</h2>
                <div className="responsive-video">
                    <iframe src="https://www.youtube.com/embed/AiIydcuntIg" frameBorder="0" allowFullScreen/>
                </div>

                <br/>

                <h2>Muži</h2>
                <table className="table table-bordered">
                    <thead>
                    <tr>
                        <th rowSpan={2}>#</th>
                        <th rowSpan={2}>Družstvo</th>
                        <th colSpan={2}>Požární útok</th>
                        <th colSpan={2}>Štafeta 4x100 m</th>
                        <th rowSpan={2}>Součet bodů</th>
                    </tr>
                    <tr>
                        <th>Čas</th>
                        <th>Body</th>
                        <th>Čas</th>
                        <th>Body</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>1.</td>
                        <td>Žďár</td>
                        <td>20,93</td>
                        <td>1</td>
                        <td>68,40</td>
                        <td>1</td>
                        <td>2</td>
                    </tr>
                    <tr>
                        <td>2.</td>
                        <td>Vavřinec</td>
                        <td>26,06</td>
                        <td>4</td>
                        <td>71,20</td>
                        <td>2</td>
                        <td>6</td>
                    </tr>
                    <tr>
                        <td>3.</td>
                        <td>Němčice</td>
                        <td>22,73</td>
                        <td>2</td>
                        <td>75,89</td>
                        <td>5</td>
                        <td>7</td>
                    </tr>
                    <tr>
                        <td>4.</td>
                        <td>Petrovice</td>
                        <td>24,18</td>
                        <td>3</td>
                        <td>79,60</td>
                        <td>6</td>
                        <td>9</td>
                    </tr>
                    <tr>
                        <td>5.</td>
                        <td>Veselice</td>
                        <td>34,05</td>
                        <td>6</td>
                        <td>73,20</td>
                        <td>4</td>
                        <td>10</td>
                    </tr>
                    <tr>
                        <td>6.</td>
                        <td>Šošůvka</td>
                        <td>36,17</td>
                        <td>8</td>
                        <td>72,28</td>
                        <td>3</td>
                        <td>11</td>
                    </tr>
                    <tr>
                        <td>7.</td>
                        <td>Vysočany</td>
                        <td>27,63</td>
                        <td>5</td>
                        <td>93,80</td>
                        <td>9</td>
                        <td>14</td>
                    </tr>
                    <tr>
                        <td>8.</td>
                        <td>Sloup</td>
                        <td>34,13</td>
                        <td>7</td>
                        <td>90,50</td>
                        <td>7</td>
                        <td>14</td>
                    </tr>
                    <tr>
                        <td>9.</td>
                        <td>Housko</td>
                        <td>62,52</td>
                        <td>9</td>
                        <td>92,20</td>
                        <td>8</td>
                        <td>17</td>
                    </tr>
                    </tbody>
                </table>


                <h2>Muži nad 35 let</h2>
                <table className="table table-bordered">
                    <thead>
                    <tr>
                        <th rowSpan={2}>#</th>
                        <th rowSpan={2}>Družstvo</th>
                        <th>Požární útok</th>
                    </tr>
                    </thead>

                    <tbody>
                    <tr>
                        <td>1.</td>
                        <td>Vavřinec B</td>
                        <td>28,27</td>
                    </tr>
                    <tr>
                        <td>2.</td>
                        <td>Vavřinec A</td>
                        <td>31,80</td>
                    </tr>
                    <tr>
                        <td>3.</td>
                        <td>Housko</td>
                        <td>32,85</td>
                    </tr>
                    <tr>
                        <td>4.</td>
                        <td>Žďár</td>
                        <td>79,24</td>
                    </tr>
                    <tr>
                        <td>5.</td>
                        <td>Vysočany</td>
                        <td>116,80</td>
                    </tr>
                    </tbody>
                </table>


                <h2>Ženy</h2>
                <table className="table table-bordered">
                    <thead>
                    <tr>
                        <th rowSpan={2}>#</th>
                        <th rowSpan={2}>Družstvo</th>
                        <th colSpan={2}>Požární útok</th>
                        <th colSpan={2}>Štafeta 4x100 m</th>
                        <th rowSpan={2}>Součet bodů</th>
                    </tr>
                    <tr>
                        <th>Čas</th>
                        <th>Body</th>
                        <th>Čas</th>
                        <th>Body</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>1.</td>
                        <td>Němčice</td>
                        <td>18,66</td>
                        <td>1</td>
                        <td>82,70</td>
                        <td>2</td>
                        <td>3</td>
                    </tr>
                    <tr>
                        <td>2.</td>
                        <td>Žďár</td>
                        <td>38,07</td>
                        <td>3</td>
                        <td>81,10</td>
                        <td>1</td>
                        <td>4</td>
                    </tr>
                    <tr>
                        <td>3.</td>
                        <td>Housko</td>
                        <td>36,93</td>
                        <td>2</td>
                        <td>94,30</td>
                        <td>3</td>
                        <td>5</td>
                    </tr>
                    </tbody>
                </table>
            </>
        )
    }

    getPublishDate(): Date {
        return new Date(2017, 5, 27)
    }

}
