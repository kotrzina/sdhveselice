import {Article} from "./Article";

export class Article20150106 extends Article {

    getTitle(): string {
        return "Nový výbor od 3. 1. 2015"
    }

    getSlug(): string {
        return "novy-vybor-od-3-1-2015"
    }

    getImage(): string {
        return "/articles/novy_vybor_2015.jpg"
    }

    getPreheader(): string | null {
        return "Na výroční valné hromadě, která se konala v sobotu 3. 1. 2015 byl zvolen nový výbor na další funkční období 5-ti let."
    }

    getContent(): JSX.Element {
        return (
            <>
                <p>Na výroční valné hromadě, která se konala v sobotu 3. 1. 2015 byl zvolen nový výbor na další funkční období 5-ti
                    let. Členové našeho výboru nebyli nijak vyměněni, pouze došlo k prohození některých funkcí. Nový výbor SDH
                    Veselice bude následující roky fungovat v tomto složení:
                </p>

                <h2>Složení:</h2>
                <table className="table table-bordered">
                    <tr>
                        <th>Funkce</th>
                        <th>Jméno</th>
                    </tr>
                    <tr>
                        <td>Starosta:</td>
                        <td>Němec Lubomír (1988)</td>
                    </tr>
                    <tr>
                        <td>Náměstek starosty:</td>
                        <td>Novotný Miroslav (1956)</td>
                    </tr>
                    <tr>
                        <td>Jednatel:</td>
                        <td>Kozák Tomáš (1991)</td>
                    </tr>
                    <tr>
                        <td>Hospodář:</td>
                        <td>Fabiánek Milan (1969)</td>
                    </tr>
                    <tr>
                        <td>Velitel:</td>
                        <td>Jarůšek Marek (1978)</td>
                    </tr>
                    <tr>
                        <td>Člen výboru:</td>
                        <td>Nečas Martin (1987)</td>
                    </tr>
                    <tr>
                        <td>Člen výboru:</td>
                        <td>Nečas Bohumil (1977)</td>
                    </tr>
                    <tr>
                        <td>Člen výboru:</td>
                        <td>Fabiánek Jan (1991)</td>
                    </tr>
                    <tr>
                        <td>Člen výboru:</td>
                        <td>Souček Pavel (1958)</td>
                    </tr>

                </table>
            </>
        )
    }

    getPublishDate(): Date {
        return new Date(2015, 1, 6)
    }

}
