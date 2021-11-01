import {Article} from "./Article";

export class Article20170122 extends Article {

    getTitle(): string {
        return "Wellness 2016"
    }

    getSlug(): string {
        return "wellness-2016"
    }

    getImage(): string {
        return "/articles/wellness_2016.jpg"
    }

    getPreheader(): string | null {
        return "Dne 30. prosince 2016 se na svazarmu uskutečnil 1. veselský wellness. Akce odstartovala v 17:00 na rozhledně."
    }

    getContent(): JSX.Element {
        return (
            <>
                <p>Dne 30. prosince 2016 se na svazarmu uskutečnil 1. veselský wellness. Akce odstartovala v 17:00 na rozhledně, kde
                    byl připraven soutěžní výběh a seskok z rozhledny do připraveného bazénu. Na svazarmu se mezitím připravila voda
                    do bazénu, která dosahovala až 40 °C. Venkovní teplota se pohybovala kolem -5 °C. Pro odvážné byl připraven i
                    bezén se studenou vodou.</p>
                <div className="clear"></div>

                <h2>Galerie:</h2>
                <div className="gallery">
                    <div className="col-lg-6 col-xs-12">
                        <img alt="Obrazek v galerii" className="img-responsive" src="/gallery/wellness/1.jpg"/>
                    </div>
                    <div className="col-lg-6 col-xs-12">
                        <img alt="Obrazek v galerii" className="img-responsive" src="/gallery/wellness/2.jpg"/>
                    </div>
                    <div className="col-lg-6 col-xs-12">
                        <img alt="Obrazek v galerii" className="img-responsive" src="/gallery/wellness/3.jpg"/>
                    </div>
                    <div className="col-lg-6 col-xs-12">
                        <img alt="Obrazek v galerii" className="img-responsive" src="/gallery/wellness/4.jpg"/>
                    </div>
                    <div className="col-lg-6 col-xs-12">
                        <img alt="Obrazek v galerii" className="img-responsive" src="/gallery/wellness/5.jpg"/>
                    </div>
                    <div className="col-lg-6 col-xs-12">
                        <img alt="Obrazek v galerii" className="img-responsive" src="/gallery/wellness/6.jpg"/>
                    </div>
                </div>
            </>
        )
    }

    getPublishDate(): Date {
        return new Date(2017, 1, 22)
    }

}
