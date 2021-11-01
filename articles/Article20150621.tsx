import {Article} from "./Article";

export class Article20150621 extends Article {

    getTitle(): string {
        return "Pouť ve Veselici 2015"
    }

    getSlug(): string {
        return "pout-ve-veselici-2015"
    }

    getImage(): string {
        return "/articles/pout_2015.jpg"
    }

    getPreheader(): string | null {
        return "Ve dnech od 12. do 14. června se ve Veselici uskutečnila Svatoantonínská pouť, kterou již po několikáté pořádali dobrovolní hasiči."
    }

    getContent(): JSX.Element {
        return (
            <>
                <p>Ve dnech od 12. do 14. června se ve Veselici uskutečnila Svatoantonínská pouť, kterou již po několikáté pořádali
                    dobrovolní hasiči. V pátek byla připravena pouze reprodukovaná hudba a k naší velké radosti dorazila alespoň
                    velký banda lidí z Petrovic. Hned od sobotního rána naši členové pomáhali zabezpečit <a
                        href="http://lesempolem.cz/">běžecké závody Lesempolem</a>. V sobotu večer již vystoupila živá kapela
                    TRI KENT, která přilákala cca 80 příchozích a bavila je až do ranních hodin. Neděle již tradičně probíhala ve
                    znamení pohodového posezení u dobrého jídla a pití.</p>


                <div className="clear"></div>
                <h2>Galerie:</h2>
                <div className="gallery">
                    <div className="col-lg-6 col-xs-12">
                        <img alt="Obrazek v galerii" className="img-responsive" src="/gallery/pout_2015/1.jpg"/>
                    </div>
                    <div className="col-lg-6 col-xs-12">
                        <img alt="Obrazek v galerii" className="img-responsive" src="/gallery/pout_2015/2.jpg"/>
                    </div>
                    <div className="col-lg-6 col-xs-12">
                        <img alt="Obrazek v galerii" className="img-responsive" src="/gallery/pout_2015/3.jpg"/>
                    </div>
                    <div className="col-lg-6 col-xs-12">
                        <img alt="Obrazek v galerii" className="img-responsive" src="/gallery/pout_2015/4.jpg"/>
                    </div>
                    <div className="col-lg-6 col-xs-12">
                        <img alt="Obrazek v galerii" className="img-responsive" src="/gallery/pout_2015/5.jpg"/>
                    </div>
                </div>
            </>
        )
    }

    getPublishDate(): Date {
        return new Date(2015, 6, 21)
    }

}
