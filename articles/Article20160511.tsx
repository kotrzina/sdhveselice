import {Article} from "./Article";

export class Article20160511 extends Article {

    getTitle(): string {
        return "Lampionový průvod 2016"
    }

    getSlug(): string {
        return "lampionovy-pruvod-2016"
    }

    getImage(): string {
        return "/articles/lampionovy_pruvod_2016.jpg"
    }

    getPreheader(): string | null {
        return "Dne 7. května se v naši obci uskutečnil lampionový průvod, který byl ukončený v prostorech hřiště. Hasiči zde zajišťovali občerstvení a také postavení vatry, která byla zapálena něco po 19. hodině."
    }

    getContent(): JSX.Element {
        return (
            <>
                <p>Dne 7. května se v naši obci uskutečnil lampionový průvod, který byl ukončený v prostorech hřiště. Hasiči zde
                    zajišťovali občerstvení a také postavení vatry, která byla zapálena něco po 7. hodině. Největší radost však měli
                    děti z nové trampolíny.</p>

                <div className="clear"></div>

                <h2>Galerie:</h2>
                <div className="gallery">
                    <div className="col-lg-6 col-xs-12">
                        <img alt="Obrazek v galerii" className="img-responsive" src="/gallery/lampionovy_pruvod_2016/1.jpg"/>
                    </div>
                    <div className="col-lg-6 col-xs-12">
                        <img alt="Obrazek v galerii" className="img-responsive" src="/gallery/lampionovy_pruvod_2016/2.jpg"/>
                    </div>
                    <div className="col-lg-6 col-xs-12">
                        <img alt="Obrazek v galerii" className="img-responsive" src="/gallery/lampionovy_pruvod_2016/3.jpg"/>
                    </div>
                    <div className="col-lg-6 col-xs-12">
                        <img alt="Obrazek v galerii" className="img-responsive" src="/gallery/lampionovy_pruvod_2016/4.jpg"/>
                    </div>
                    <div className="col-lg-6 col-xs-12">
                        <img alt="Obrazek v galerii" className="img-responsive" src="/gallery/lampionovy_pruvod_2016/5.jpg"/>
                    </div>
                    <div className="col-lg-6 col-xs-12">
                        <img alt="Obrazek v galerii" className="img-responsive" src="/gallery/lampionovy_pruvod_2016/6.jpg"/>
                    </div>
                    <div className="col-lg-6 col-xs-12">
                        <img alt="Obrazek v galerii" className="img-responsive" src="/gallery/lampionovy_pruvod_2016/7.jpg"/>
                    </div>
                    <div className="col-lg-6 col-xs-12">
                        <img alt="Obrazek v galerii" className="img-responsive" src="/gallery/lampionovy_pruvod_2016/8.jpg"/>
                    </div>
                </div>

            </>
        )
    }

    getPublishDate(): Date {
        return new Date(2016, 5, 11)
    }

}
