import {Article} from "./Article";

export class Article20160528 extends Article {

    getTitle(): string {
        return "Výsledky okrskové soutěže 2016"
    }

    getSlug(): string {
        return "vysledky-okrskove-souteze-2016"
    }

    getImage(): string {
        return "/articles/okrsek_2016.jpg"
    }

    getPreheader(): string | null {
        return "Dne 21. května se na polním letišti v Petrocicích uskutečnilo 1. kolo požárního sportu okrsku Sloup. Veselské družstvo zde mělo zastoupení pouze v kategorii mužů do 35 let."
    }

    getContent(): JSX.Element {
        return (
            <>
                <p>Dne 21. května se na polním letišti v Petrocicích uskutečnilo 1. kolo požárního sportu okrsku Sloup. Veselské
                    družstvo zde mělo zastoupení pouze v kategorii mužů do 35 let.</p>
                <p>Ke štafetě nastoupil na okno Lubomír Němec, bariéru přeskočil Martin Nečas, hadice s kladinou zdolal Tomáš Kozák
                    a s hasicím přístrojem uzavíral štafetu Radim Jarůšek. Požární útok byl ve složení: koš Lubomír Němec, spoj
                    savic Lukáš Manoušek, stroj Bohumil Nečas, béčka Tomáš Kozák, rozdělovač Radim Jarůšek, levý proud Martin Nečas
                    a pravý proud Marek Jarůšek. V tomto složení se našemu sboru podařilo vybojovat krásné 2. místo.</p>

                <div className="fix"/>
                <br/>
                <h2>Muži</h2>
                <table className="table table-bordered">
                    <thead>
                    <tr>
                        <th rowSpan={2}>#</th>
                        <th rowSpan={2}>Družstvo</th>
                        <th colSpan={4}>Požární útok</th>
                        <th colSpan={2}>Štafeta 4x100 m</th>
                        <th rowSpan={2}>Součet bodů</th>
                    </tr>
                    <tr>
                        <th>Levý</th>
                        <th>Pravý</th>
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
                        <td>20,90</td>
                        <td>19,73</td>
                        <td>20,90</td>
                        <td>1</td>
                        <td>66,45</td>
                        <td>1</td>
                        <td>2</td>
                    </tr>
                    <tr>
                        <td>2.</td>
                        <td>Veselice</td>
                        <td>22,33</td>
                        <td>22,46</td>
                        <td>22,46</td>
                        <td>2</td>
                        <td>71,99</td>
                        <td>3</td>
                        <td>5</td>
                    </tr>
                    <tr>
                        <td>3.</td>
                        <td>Němčice</td>
                        <td>22,83</td>
                        <td>21,40</td>
                        <td>22,83</td>
                        <td>3</td>
                        <td>76,80</td>
                        <td>5</td>
                        <td>8</td>
                    </tr>
                    <tr>
                        <td>4.</td>
                        <td>Petrovice</td>
                        <td>28,35</td>
                        <td>28,61</td>
                        <td>28,61</td>
                        <td>6</td>
                        <td>67,28</td>
                        <td>2</td>
                        <td>8</td>
                    </tr>
                    <tr>
                        <td>5.</td>
                        <td>Šošůvka</td>
                        <td>23,79</td>
                        <td>21,42</td>
                        <td>23,79</td>
                        <td>4</td>
                        <td>77,01</td>
                        <td>6</td>
                        <td>10</td>
                    </tr>
                    <tr>
                        <td>6.</td>
                        <td>Vavřinec</td>
                        <td>N</td>
                        <td>N</td>
                        <td>N</td>
                        <td>8</td>
                        <td>74,44</td>
                        <td>4</td>
                        <td>12</td>
                    </tr>
                    <tr>
                        <td>7.</td>
                        <td>Vysočany</td>
                        <td>26,59</td>
                        <td>27,71</td>
                        <td>27,71</td>
                        <td>5</td>
                        <td>93,50</td>
                        <td>8</td>
                        <td>13</td>
                    </tr>
                    <tr>
                        <td>8.</td>
                        <td>Housko</td>
                        <td>31,69</td>
                        <td>31,49</td>
                        <td>31,69</td>
                        <td>7</td>
                        <td>78,89</td>
                        <td>7</td>
                        <td>14</td>
                    </tr>
                    </tbody>
                </table>


                <h2>Muži nad 35 let</h2>
                <table className="table table-bordered">
                    <thead>
                    <tr>
                        <th rowSpan={2}>#</th>
                        <th rowSpan={2}>Družstvo</th>
                        <th colSpan={3}>Požární útok</th>
                    </tr>
                    <tr>
                        <th>Levý</th>
                        <th>Pravý</th>
                        <th>Čas</th>
                    </tr>
                    </thead>

                    <tbody>
                    <tr>
                        <td>1.</td>
                        <td>Petrovice</td>
                        <td>28,20</td>
                        <td>27,49</td>
                        <td>28,20</td>
                    </tr>
                    <tr>
                        <td>2.</td>
                        <td>Suchdol</td>
                        <td>30,70</td>
                        <td>31,51</td>
                        <td>31,51</td>
                    </tr>
                    <tr>
                        <td>3.</td>
                        <td>Vavřinec</td>
                        <td>32,09</td>
                        <td>26,75</td>
                        <td>32,09</td>
                    </tr>
                    <tr>
                        <td>4.</td>
                        <td>Housko</td>
                        <td>33,21</td>
                        <td>33,77</td>
                        <td>33,77</td>
                    </tr>
                    <tr>
                        <td>5.</td>
                        <td>Žďár</td>
                        <td>N</td>
                        <td>N</td>
                        <td>N</td>
                    </tr>
                    </tbody>
                </table>


                <h2>Ženy</h2>
                <table className="table table-bordered">
                    <thead>
                    <tr>
                        <th rowSpan={2}>#</th>
                        <th rowSpan={2}>Družstvo</th>
                        <th colSpan={3}>Požární útok</th>
                    </tr>
                    <tr>
                        <th>Levý</th>
                        <th>Pravý</th>
                        <th>Čas</th>
                    </tr>
                    </thead>

                    <tbody>
                    <tr>
                        <td>1.</td>
                        <td>Němčice</td>
                        <td>20,01</td>
                        <td>19,46</td>
                        <td>20,01</td>
                    </tr>
                    <tr>
                        <td>2.</td>
                        <td>Žďár</td>
                        <td>20,52</td>
                        <td>20,97</td>
                        <td>20,97</td>
                    </tr>
                    <tr>
                        <td>3.</td>
                        <td>Housko</td>
                        <td>37,20</td>
                        <td>34,57</td>
                        <td>37,20</td>
                    </tr>
                    <tr>
                        <td>4.</td>
                        <td>Petrovice</td>
                        <td>N</td>
                        <td>21,72</td>
                        <td>N</td>
                    </tr>
                    </tbody>
                </table>
            </>
        )
    }

    getPublishDate(): Date {
        return new Date(2016, 5, 28)
    }

}
