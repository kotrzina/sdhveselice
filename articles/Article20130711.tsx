import {Article} from "./Article";

export class Article20130711 extends Article {

    getTitle(): string {
        return "Závody ve Veselici 2010"
    }

    getSlug(): string {
        return "zavody-ve-veselici-2010"
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
                <h2>Ženy</h2>
                <table className="table table-bordered">
                    <tr>
                        <th>Pořadí</th>
                        <th>Družstvo</th>
                        <th>1.čas</th>
                        <th>2.čas</th>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Sychotín</td>
                        <td>18,22</td>
                        <td>18,50</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Žernovník</td>
                        <td>20,73</td>
                        <td>20,74</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Žďár</td>
                        <td>26,03</td>
                        <td>26,28</td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>Černá Hora</td>
                        <td>26,73</td>
                        <td>27,59</td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>Petrovice</td>
                        <td>29,67</td>
                        <td>30,42</td>
                    </tr>
                    <tr>
                        <td>6</td>
                        <td>Těchov</td>
                        <td>24,73</td>
                        <td>34,81</td>
                    </tr>
                    <tr>
                        <td>&nbsp;</td>
                        <td>Šošůvka</td>
                        <td>27,45</td>
                        <td>N</td>
                    </tr>
                    <tr>
                        <td>&nbsp;</td>
                        <td>Hodějice</td>
                        <td>22,39</td>
                        <td>N</td>
                    </tr>
                </table>
                <h2>Muži</h2>
                <table className="table table-bordered">
                    <tr>
                        <th>Pořadí</th>
                        <th>Družstvo</th>
                        <th>1.čas</th>
                        <th>2.čas</th>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Sychotín</td>
                        <td>17,83</td>
                        <td>18,38</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Němčice</td>
                        <td>18,96</td>
                        <td>19,60</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Míchov</td>
                        <td>19,35</td>
                        <td>19,93</td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>Okrouhlá</td>
                        <td>21,14</td>
                        <td>21,17</td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>Žďár</td>
                        <td>18,48</td>
                        <td>21,26</td>
                    </tr>
                    <tr>
                        <td>6</td>
                        <td>Jabloňany B</td>
                        <td>21,28</td>
                        <td>21,29</td>
                    </tr>
                    <tr>
                        <td>7</td>
                        <td>Jabloňany A</td>
                        <td>20,09</td>
                        <td>21,38</td>
                    </tr>
                    <tr>
                        <td>8</td>
                        <td>Pamětice</td>
                        <td>21,04</td>
                        <td>21,70</td>
                    </tr>
                    <tr>
                        <td>9</td>
                        <td>Ostrov u Macochy</td>
                        <td>21,26</td>
                        <td>22,35</td>
                    </tr>
                    <tr>
                        <td>10</td>
                        <td>Veselice</td>
                        <td>22,51</td>
                        <td>23,06</td>
                    </tr>
                    <tr>
                        <td>11</td>
                        <td>Vavřinec</td>
                        <td>23,94</td>
                        <td>24,83</td>
                    </tr>
                    <tr>
                        <td>&nbsp;</td>
                        <td>Domamyslice</td>
                        <td>18,83</td>
                        <td>N</td>
                    </tr>
                    <tr>
                        <td>&nbsp;</td>
                        <td>Bílovice</td>
                        <td>18,75</td>
                        <td>N</td>
                    </tr>
                    <tr>
                        <td>&nbsp;</td>
                        <td>Lipová</td>
                        <td>N</td>
                        <td>N</td>
                    </tr>
                </table>
            </>
        )
    }

    getPublishDate(): Date {
        return new Date(2013, 7, 11)
    }

}
