import {Article} from "./Article";

export class Article20170506 extends Article {

    getTitle(): string {
        return "Lampionový průvod 2017"
    }

    getSlug(): string {
        return "lampionovy-pruvod-2017"
    }

    getImage(): string {
        return "/articles/lampionovy_pruvod_2017.jpg"
    }

    getPreheader(): string | null {
        return "Dne 6. května 2017 se již podruhé uskutečnil lampionový průvod. Akce se uskutečnila v prostorech veselského sportovního areálu."
    }

    getContent(): JSX.Element {
        return (
            <>
                <p>Dne 6. května 2017 se již podruhé uskutečnil lampionový průvod. Děti již v odpoledních hodinách měli k dispozici
                    trampolínu a také si mohli vyzkoušet střelbu ze vzduchovky. K večeru s lampiony obešli Veselici a vrátili se
                    zpět na hřiště, kde již byla nachystána vatra.</p>
                <div className="clear"></div>
                <h2>Video:</h2>

                <div className="responsive-video">
                    <iframe src="https://www.youtube.com/embed/FV2bi_0C-gU" frameBorder="0" allowFullScreen></iframe>
                </div>

                <h2>Galerie:</h2>
                <div className="gallery">
                    <div className="col-lg-6 col-xs-12">
                        <img alt="Obrazek v galerii" className="img-responsive" src="/gallery/lampionovy_pruvod_2017/1.jpg"/>
                    </div>
                    <div className="col-lg-6 col-xs-12">
                        <img alt="Obrazek v galerii" className="img-responsive" src="/gallery/lampionovy_pruvod_2017/2.jpg"/>
                    </div>
                    <div className="col-lg-6 col-xs-12">
                        <img alt="Obrazek v galerii" className="img-responsive" src="/gallery/lampionovy_pruvod_2017/3.jpg"/>
                    </div>
                    <div className="col-lg-6 col-xs-12">
                        <img alt="Obrazek v galerii" className="img-responsive" src="/gallery/lampionovy_pruvod_2017/4.jpg"/>
                    </div>
                    <div className="col-lg-6 col-xs-12">
                        <img alt="Obrazek v galerii" className="img-responsive" src="/gallery/lampionovy_pruvod_2017/5.jpg"/>
                    </div>
                    <div className="col-lg-6 col-xs-12">
                        <img alt="Obrazek v galerii" className="img-responsive" src="/gallery/lampionovy_pruvod_2017/6.jpg"/>
                    </div>
                </div>
            </>
        )
    }

    getPublishDate(): Date {
        return new Date(2017, 5, 6)
    }

}
