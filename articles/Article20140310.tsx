import {Article} from "./Article";

export class Article20140310 extends Article {

    getTitle(): string {
        return "Zpráva o činnosti pro rok 2013"
    }

    getSlug(): string {
        return "zprava-o-cinnosti-pro-rok-2013"
    }

    getImage(): string {
        return "/articles/valna_hromada_2013.jpg"
    }

    getPreheader(): string | null {
        return "Podrobná zpráva o činnosti našeho sboru v uplynulém roce 2013."
    }

    getContent(): JSX.Element {
        return (
            <>
                <p>I v roce 2013 se uskutečnilo mnoho akcí pod hlavičkou našeho sboru. Mezi ty nejpodstatnější bylo uspořádání
                    tradiční pouti ve Veselici, spoluúčast na pořádání běhu lesempolem kolem naší rozhledny, účast na výročí ve
                    Vavřinci a v Suchdole a mnoho dalších akcí, o kterých se můžete dovědět více v kompletní zprávě.</p>

                <p>
                    <a className="btn btn-danger" href="/vyrocni_zpravy/zprava_2013.pdf">Stahujte kompletní zprávu ve formátu PDF</a>
                </p>
            </>
        )
    }

    getPublishDate(): Date {
        return new Date(2014, 3, 10)
    }

}
