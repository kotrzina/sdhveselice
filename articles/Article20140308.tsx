import {Article} from "./Article";

export class Article20140308 extends Article {

    getTitle(): string {
        return "Zpráva o činnosti pro rok 2012"
    }

    getSlug(): string {
        return "zprava-o-cinnosti-pro-rok-2012"
    }

    getImage(): string {
        return "/articles/valna_hromada_2012.jpg"
    }

    getPreheader(): string | null {
        return "V lednu roku 2013 se ve Veselici uskutečnila schůze, na které se rekapitulovalo vše podstatné, co se ve sboru dobrovolných hasičů v roce 2012 stalo. Součástí schůze byly i návrh činnostní pro rok 2013."
    }

    getContent(): JSX.Element {
        return (
            <>
                <p>V lednu roku 2013 se ve Veselici uskutečnila schůze, na které se rekapitulovalo vše podstatné, co se ve sboru
                    dobrovolných hasičů v roce 2012 stalo. Součástí schůze byly i návrh činnostní pro rok 2013.</p>
                <p>
                    Činnost našeho sboru je možné rozdělit na 3 základní oblasti. Předně je to vlastní činnost sboru zaměřená na
                    zajištění požární bezpečnosti občanů na území obce Veselice, za druhé potom organizace akci přispívajících k
                    obohacení veřejného života ve Veselici, případně organizace brigád a dalších akcí za účelem získání finančních
                    prostředků na činnost sboru a za třetí je to činnost sportovního družstva sboru v oblasti požárního sportu.</p>

                <p>
                    <a className="btn btn-danger" href="/vyrocni_zpravy/zprava_2012.pdf">Stahujte kompletní zprávu ve formátu PDF</a>
                </p>
            </>
        )
    }

    getPublishDate(): Date {
        return new Date(2014, 3, 8)
    }

}
