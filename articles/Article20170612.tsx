import {Article} from "./Article";

export class Article20170612 extends Article {

    getTitle(): string {
        return "Pouť a Lesempolem 2017"
    }

    getSlug(): string {
        return "pout-a-lesempolem-2017"
    }

    getImage(): string {
        return "/articles/pout_2017.jpg"
    }

    getPreheader(): string | null {
        return "Ve dnech od 10. do 12. června 2017 se v místním sportovním areálu uskutečnila svatoantonínská pouť a běžecké závody."
    }

    getContent(): JSX.Element {
        return (
            <>
                <p>Ve dnech od 10. do 12. června 2017 se v místním sportovním areálu uskutečnila svatoantonínská pouť a běžecké
                    závody <a href="https://lesempolem.cz">Lesempolem</a>. Již v pátek probíhaly přípravy, tedy vybavení stanu,
                    postavení parketu, příprava běžecké trati, atp. Hned v sobotu ráno do Veselice začali proudit davy závodníků.
                    Registrace se otevřela od 8:00. První dětské závody začínaly v 9:00 a start hlavního závodu byl naplánován na
                    11:00. <a href="https://lesempolem.cz/vysledky-2017.html">Výsledky všech závodů jsou k dispozici na tomto
                        odkazu.</a> V sobotu večer k nám dorazila kapela TRIOKENT z nedalekých Petrovic. Na taneční zábavu dorazila
                    necelá stovka lidí. Neděle již tradičně patřila příjemnému posezení při pivu a jídlu z udírny. Vše bylo ukončeno
                    pondělními dozvuky.</p>

                <div className="clear"></div>

                <h2>Video:</h2>
                <div className="responsive-video">
                    <iframe src="https://www.youtube.com/embed/64maqGMFhfI" frameBorder="0" allowFullScreen/>
                </div>

                <h2>Timelapse z příprav:</h2>
                <div className="responsive-video">
                    <iframe src="https://www.youtube.com/embed/RzNI4SScJBc" frameBorder="0" allowFullScreen/>
                </div>

                <h2>Galerie:</h2>
                <div className="gallery">
                    <div className="col-lg-6 col-xs-12">
                        <img alt="Obrazek v galerii" className="img-responsive" src="/gallery/pout_2017/1.jpg"/>
                    </div>
                    <div className="col-lg-6 col-xs-12">
                        <img alt="Obrazek v galerii" className="img-responsive" src="/gallery/pout_2017/2.jpg"/>
                    </div>
                    <div className="col-lg-6 col-xs-12">
                        <img alt="Obrazek v galerii" className="img-responsive" src="/gallery/pout_2017/3.jpg"/>
                    </div>
                    <div className="col-lg-6 col-xs-12">
                        <img alt="Obrazek v galerii" className="img-responsive" src="/gallery/pout_2017/4.jpg"/>
                    </div>
                    <div className="col-lg-6 col-xs-12">
                        <img alt="Obrazek v galerii" className="img-responsive" src="/gallery/pout_2017/5.jpg"/>
                    </div>
                    <div className="col-lg-6 col-xs-12">
                        <img alt="Obrazek v galerii" className="img-responsive" src="/gallery/pout_2017/6.jpg"/>
                    </div>
                    <div className="col-lg-6 col-xs-12">
                        <img alt="Obrazek v galerii" className="img-responsive" src="/gallery/pout_2017/7.jpg"/>
                    </div>
                    <div className="col-lg-6 col-xs-12">
                        <img alt="Obrazek v galerii" className="img-responsive" src="/gallery/pout_2017/8.jpg"/>
                    </div>
                    <div className="col-lg-6 col-xs-12">
                        <img alt="Obrazek v galerii" className="img-responsive" src="/gallery/pout_2017/9.jpg"/>
                    </div>
                    <div className="col-lg-6 col-xs-12">
                        <img alt="Obrazek v galerii" className="img-responsive" src="/gallery/pout_2017/10.jpg"/>
                    </div>
                </div>
            </>
        )
    }

    getPublishDate(): Date {
        return new Date(2017, 6, 12)
    }

}
