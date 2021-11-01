import {Article} from "./Article";

export class Article20160826 extends Article {

    getTitle(): string {
        return "Pozvánka na konec prázdnin 2016"
    }

    getSlug(): string {
        return "pozvanka-na-konec-prazdnin-2016"
    }

    getImage(): string {
        return "/articles/konec_prazdnin_pozvanka_2016.jpg"
    }

    getPreheader(): string | null {
        return ""
    }

    getContent(): JSX.Element {
        return (
            <>
                <div className="clear"></div>
                <h2>Program:</h2>
                <ul>
                    <li>17:00 seskok parašutistů na poli pod rozhlednou</li>
                    <li>18:00 slaňování z rozhledny</li>
                    <li>20:00 příjezd Karla IV.</li>
                    <li>21:00 tradiční orloj tak trochu jinak</li>
                    <li>21:30 ohňostroj</li>
                </ul>


                <p>
                    Přůběžně: pivo, limo, udírna, výstava korunovačních klenotů, střelecká soutěž o zlatou jízdenku, sběr
                    památečních
                    koulí
                </p>

                <p>Zve: společenství Kotržiny</p>

                <br/><br/>

                <img width="60%" src="/www/manager/plakat-konec-prazdnin-2016.jpg" alt="Plakát"/>
            </>
        )
    }

    getPublishDate(): Date {
        return new Date(2016, 8, 26)
    }

}
