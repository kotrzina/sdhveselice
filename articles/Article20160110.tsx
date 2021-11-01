import {Article} from "./Article";

export class Article20160110 extends Article {

    getTitle(): string {
        return "Zpráva o činnosti pro rok 2015"
    }

    getSlug(): string {
        return "zprava-o-cinnosti-pro-rok-2015"
    }

    getImage(): string {
        return "/articles/zprava_o_cinnosti_2015.jpg"
    }

    getPreheader(): string | null {
        return "I v roce 2015 se uskutečnilo mnoho akcí pod hlavičkou našeho sboru. Zpráva obsahuje údaje o sboru, jeho činnosti a to včetně činnosti zásahové jednotky."
    }

    getContent(): JSX.Element {
        return (
            <>
                <p>I v roce 2015 se uskutečnilo mnoho akcí pod hlavičkou našeho sboru. Zpráva obsahuje údaje o sboru, jeho činnosti
                    a to včetně činnosti zásahové jednotky. Dále pak přehled příjmů, které poskytla obec Vavřinec v roce 2015 na
                    naši činnost. Tato zpráva byla členům přednesena v sobotu 9. 1. 2016 na výroční valné hromadě v prostorech nově
                    opraveného kulturního domu ve Veselici. Zpráva také obsahuje informace o akcích, které byly uspořádány poprvé
                    jako rozloučení s prázdninami nebo pořádání pravidelného výběhu naší rozhledny. Výroční valné hromady se
                    zúčastnilo celkem 21 členů a 9 hostů. Všem zúčastněným byly na závěr schůze zobrazeny historické fotografie,
                    fotografie pořízené za poslední dva roky a celá řada videí prezentující odvedenou práci sboru, především videa z
                    pravidelného běžeckého závodu <a href="http://lesempolem.cz/" target="_blank">LESEMPOLEM</a>.</p>
                <br/>

                <p>
                    <a className="btn btn-danger" href="/vyrocni_zpravy/zprava_2015.pdf">Stahujte kompletní zprávu ve formátu PDF</a>
                </p>
            </>
        )
    }

    getPublishDate(): Date {
        return new Date(2016, 1, 10)
    }

}
