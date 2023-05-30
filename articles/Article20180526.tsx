import {Article} from "./Article";
import {Table} from "react-bootstrap";
import {Video} from "../components/Video/Video";
import {ReactElement} from "react";

export class Article20180526 extends Article {
    getTitle(): string {
        return "Výsledky okrskové soutěže 2018";
    }

    getSlug(): string {
        return "vysledky-okrskove-souteze-2018";
    }

    getImage(): string {
        return "/articles/vysledky-okrskove-souteze-2018.png";
    }

    getPreheader(): string | null {
        return "Dne 26. května 2018 se ve sportovním areálu ve Vavřinci uskutečnilo 1. kolo požárního sportu okrsku Sloup.";
    }

    getContent(): ReactElement {
        return (
            <>
                <p>Dne 26. května 2018 se ve sportovním areálu ve Vavřinci uskutečnilo 1. kolo požárního sportu okrsku Sloup. Veselské družstvo zde mělo zastoupení
                    pouze v kategorii mužů do 35 let.
                </p>
                <p>Ke štafetě nastoupil na okno Lubomír Němec, bariéru přeskočil Jirka Fabiánek, hadice s kladinou zdolal Tomáš Kozák a s hasicím přístrojem
                    uzavíral štafetu Honza Fabiánek. Složení pro útok bylo nasledující: Jirka Fabiánek koš, Luba Němec narážka, Bob Nečas mašina, Honza Fabiánek
                    béčka, Radim Jarůšek rozdělovač, levý proud Marin Nečas a pravý proud Tomáš Kozák.
                </p>

                <p>
                    <Video src={"https://www.youtube.com/embed/eUR8ftdP79c"} title={"Video ze štafety:"}/>
                    <br/>
                    <Video src={"https://www.youtube.com/embed/D1F3wQecoiY"} title={"Video z útoku:"}/>
                </p>

                <p>
                    <h2>Muži</h2>
                    <Table bordered={true}>
                        <thead>
                        <tr>
                            <th rowSpan={2}>#</th>
                            <th rowSpan={2}>Družstvo</th>
                            <th colSpan={4}>Požární útok</th>
                            <th colSpan={2}>Štafeta 4x100 m</th>
                            <th rowSpan={2}>Součet bodů</th>
                        </tr>
                        <tr>
                            <th>levý</th>
                            <th>pravý</th>
                            <th>čas</th>
                            <th>body</th>
                            <th>čas</th>
                            <th>body</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>1.</td>
                            <td>Veselice</td>
                            <td>24,80</td>
                            <td>24,65</td>
                            <td>20,80</td>
                            <td>1</td>
                            <td>74,50</td>
                            <td>3</td>
                            <td>4</td>
                        </tr>
                        <tr>
                            <td>2.</td>
                            <td>Žďár</td>
                            <td>28,28</td>
                            <td>26,20</td>
                            <td>28,28</td>
                            <td>3</td>
                            <td>74,40</td>
                            <td>2</td>
                            <td>5</td>
                        </tr>
                        <tr>
                            <td>3.</td>
                            <td>Vavřinec</td>
                            <td>24,91</td>
                            <td>25,79</td>
                            <td>25,79</td>
                            <td>2</td>
                            <td>75,40</td>
                            <td>4</td>
                            <td>6</td>
                        </tr>
                        <tr>
                            <td>4.</td>
                            <td>Petrovice</td>
                            <td>NP</td>
                            <td>NP</td>
                            <td>NP</td>
                            <td>9</td>
                            <td>70,90</td>
                            <td>1</td>
                            <td>10</td>
                        </tr>
                        <tr>
                            <td>5.</td>
                            <td>Sloup</td>
                            <td>27,62</td>
                            <td>30,96</td>
                            <td>30,96</td>
                            <td>4</td>
                            <td>86,60</td>
                            <td>7</td>
                            <td>11</td>
                        </tr>
                        <tr>
                            <td>6.</td>
                            <td>Němčice</td>
                            <td>37,65</td>
                            <td>38,50</td>
                            <td>38,50</td>
                            <td>6</td>
                            <td>84,50</td>
                            <td>6</td>
                            <td>12</td>
                        </tr>
                        <tr>
                            <td>7.</td>
                            <td>Vysočany</td>
                            <td>32,77</td>
                            <td>30,82</td>
                            <td>32,77</td>
                            <td>5</td>
                            <td>87,00</td>
                            <td>8</td>
                            <td>13</td>
                        </tr>
                        <tr>
                            <td>8.</td>
                            <td>Šošůvka</td>
                            <td>57,39</td>
                            <td>57,90</td>
                            <td>57,90</td>
                            <td>8</td>
                            <td>77,20</td>
                            <td>5</td>
                            <td>13</td>
                        </tr>
                        <tr>
                            <td>9.</td>
                            <td>Housko</td>
                            <td>39,88</td>
                            <td>38,79</td>
                            <td>39,88</td>
                            <td>7</td>
                            <td>93,60</td>
                            <td>9</td>
                            <td>16</td>
                        </tr>
                        </tbody>
                    </Table>

                    <h2>Ženy</h2>
                    <Table bordered={true}>
                        <thead>
                        <tr>
                            <th rowSpan={2}>#</th>
                            <th rowSpan={2}>Družstvo</th>
                            <th colSpan={4}>Požární útok</th>
                            <th colSpan={2}>Štafeta 4x100 m</th>
                            <th rowSpan={2}>Součet bodů</th>
                        </tr>
                        <tr>
                            <th>levý</th>
                            <th>pravý</th>
                            <th>čas</th>
                            <th>body</th>
                            <th>čas</th>
                            <th>body</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>1.</td>
                            <td>Němčice</td>
                            <td>18,80</td>
                            <td>30,71</td>
                            <td>30,71</td>
                            <td>1</td>
                            <td>80,62</td>
                            <td>1</td>
                            <td>2</td>
                        </tr>
                        <tr>
                            <td>2.</td>
                            <td>Housko</td>
                            <td>31,45</td>
                            <td>31,09</td>
                            <td>31,45</td>
                            <td>2</td>
                            <td>92,40</td>
                            <td>2</td>
                            <td>4</td>
                        </tr>
                        </tbody>
                    </Table>


                    <h2>Muži nad 35 let</h2>
                    <Table bordered={true}>
                        <thead>
                        <tr>
                            <th rowSpan={2}>#</th>
                            <th rowSpan={2}>Družstvo</th>
                            <th colSpan={4}>Požární útok</th>
                        </tr>
                        <tr>
                            <th>levý</th>
                            <th>pravý</th>
                            <th>čas</th>
                        </tr>
                        </thead>

                        <tbody>
                        <tr>
                            <td>1.</td>
                            <td>Vavřinec B</td>
                            <td>24,03</td>
                            <td>25,37</td>
                            <td>25,37</td>
                        </tr>
                        <tr>
                            <td>2.</td>
                            <td>Petrovice</td>
                            <td>27,25</td>
                            <td>28,21</td>
                            <td>28,21</td>
                        </tr>
                        <tr>
                            <td>3.</td>
                            <td>Suchdol</td>
                            <td>29,08</td>
                            <td>31,20</td>
                            <td>31,20</td>
                        </tr>
                        <tr>
                            <td>4.</td>
                            <td>Žďár</td>
                            <td>33,02</td>
                            <td>31,44</td>
                            <td>33,02</td>
                        </tr>
                        <tr>
                            <td>5.</td>
                            <td>Housko</td>
                            <td>33,67</td>
                            <td>35,51</td>
                            <td>35,51</td>
                        </tr>
                        <tr>
                            <td>6.</td>
                            <td>Vavřinec A</td>
                            <td>45,10</td>
                            <td>44,24</td>
                            <td>45,10</td>
                        </tr>
                        </tbody>
                    </Table>
                </p>
            </>
        )
    }

    getPublishDate(): Date {
        return new Date(2018, 5, 26)
    }


}
