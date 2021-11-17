import {Article} from "./Article";

export class Article20150403 extends Article {

    getTitle(): string {
        return "4. 4. 2015 - velikonoční jarmark"
    }

    getSlug(): string {
        return "4-4-2015-velikonocni-jarmark"
    }

    getImage(): string {
        return "/articles/velikonocni_jarmark.jpg"
    }

    getPreheader(): string | null {
        return "Dne 4. 4. 2015 od 9:00 se ve Veselici uskuteční již tradiční velikonoční jarmark, který pořádá sdružení Včela lidem."
    }

    getContent(): JSX.Element {
        return (
            <>
                <h2>Akce není zrušená!!!</h2>
                <p>Dne 4. 4. 2015 od 9:00 se ve Veselici uskuteční již tradiční velikonoční jarmark, který pořádá sdružení Včela
                    lidem. Je připraveno bohaté občerstvení včetně medového piva nebo udírny. Pro děti je připraven bohatý program.
                    <a href="http://www.rozhledna-veselice.cz/rozhledna/aktualne/velikonocni-jarmark-na-rozhledne-podvrsi---sobota-4-4-2015.html"
                       target="_blank" title="Rozhledna Veselice"> Více informací naleznete na stránkách rozhledy.</a><strong>
                        Přijďte a prožijte spolu s námi příjemný den plný zábavy, legrace, občerstvení a nabitého programu.</strong>
                </p>

                <h3>Připravli jsme pro vás:</h3>
                <ul>
                    <li>medové pivo a domací klobásy</li>
                    <li>pro děti spoustu her, soutěží, zdobení velikonočních vajíček a perníčků</li>
                </ul>

                <h3>Můžete se těšit na:</h3>
                <ul>
                    <li>Judo Bef Home Blansko</li>
                    <li>poslušnost a obrana psů</li>
                    <li>pěvecký sbor <strong>Petrovický sen</strong></li>
                    <li>V místní knihovně bude probíhat výstava obrazů <strong>Tomáše Baránka ze Šošůvky</strong></li>
                </ul>
            </>
        )
    }

    getPublishDate(): Date {
        return new Date(2015, 4, 3)
    }

}
