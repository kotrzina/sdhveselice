import {Article} from "./Article";

export class Article20180225 extends Article {

    getTitle(): string {
        return "Běh na historických lyžích"
    }

    getSlug(): string {
        return "beh-na-historickych-lyzich-2018"
    }

    getImage(): string {
        return "/articles/lyze_2018.jpg"
    }

    getPreheader(): string | null {
        return "Dne 25. února 2018 se na poli pod rozhlednou konal vůbec první běh na historických lyžích."
    }

    getContent(): JSX.Element {
        return (
            <>
                <p>
                    Dne 25. února 2018 se na poli pod rozhlednou konal vůbec první běh na historických lyžích. Start hlavního závodu
                    byl připraven na 14:30 a závodu se zúčastnilo cca 25 závodníků. I přes zabavný charakter akce a mrazivých - 15°C
                    se bojovalo až do posledních metrů. Předání cen a ukončení akce proběhlo v Hospůdce na Kasárnách.
                </p>

                <div className="clear"></div>

                <h2>Galerie:</h2>
                <div className="gallery">
                    <div className="col-lg-6 col-xs-12">
                        <img alt="Obrazek v galerii" className="img-responsive" src="/gallery/lyze_2018/1.jpg"/>
                    </div>
                    <div className="col-lg-6 col-xs-12">
                        <img alt="Obrazek v galerii" className="img-responsive" src="/gallery/lyze_2018/2.jpg"/>
                    </div>
                    <div className="col-lg-6 col-xs-12">
                        <img alt="Obrazek v galerii" className="img-responsive" src="/gallery/lyze_2018/3.jpg"/>
                    </div>
                    <div className="col-lg-6 col-xs-12">
                        <img alt="Obrazek v galerii" className="img-responsive" src="/gallery/lyze_2018/4.jpg"/>
                    </div>
                    <div className="col-lg-6 col-xs-12">
                        <img alt="Obrazek v galerii" className="img-responsive" src="/gallery/lyze_2018/5.jpg"/>
                    </div>
                    <div className="col-lg-6 col-xs-12">
                        <img alt="Obrazek v galerii" className="img-responsive" src="/gallery/lyze_2018/6.jpg"/>
                    </div>
                </div>

            </>
        )
    }

    getPublishDate(): Date {
        return new Date(2018, 2, 25)
    }

}
