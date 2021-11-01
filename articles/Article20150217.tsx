import {Article} from "./Article";

export class Article20150217 extends Article {

    getTitle(): string {
        return "Ostatky 2015 - fotogalerie"
    }

    getSlug(): string {
        return "ostatky-2015-fotogalerie"
    }

    getImage(): string {
        return "/articles/ostatky_2015.jpg"
    }

    getPreheader(): string | null {
        return "Dne 14. 2. 2015 se ve Veselici uskutečnil tradiční ostatkový průvod obcí. Celé akce se zúčastnilo asi 15 masek."
    }

    getContent(): JSX.Element {
        return (
            <>
                Dne 14. 2. 2015 se ve Veselici uskutečnil tradiční ostatkový průvod obcí. Celé akce se zúčastnilo asi 15 masek. Celé akci nechyběla
                <a target="_blank" href="https://www.youtube.com/watch?v=7mWA9kl-728&feature=youtu.be">dobrá
                    zábava</a>. Všem zúčastněným děkujeme!
                <div className="clear"></div>

                <h2>Galerie:</h2>
                <div className="gallery">
                    <div className="col-lg-6 col-xs-12">
                        <img alt="Obrazek v galerii" className="img-responsive" src="/gallery/ostatky_2015/1.jpg"/>
                    </div>
                    <div className="col-lg-6 col-xs-12">
                        <img alt="Obrazek v galerii" className="img-responsive" src="/gallery/ostatky_2015/2.jpg"/>
                    </div>
                    <div className="col-lg-6 col-xs-12">
                        <img alt="Obrazek v galerii" className="img-responsive" src="/gallery/ostatky_2015/3.jpg"/>
                    </div>
                    <div className="col-lg-6 col-xs-12">
                        <img alt="Obrazek v galerii" className="img-responsive" src="/gallery/ostatky_2015/4.jpg"/>
                    </div>
                    <div className="col-lg-6 col-xs-12">
                        <img alt="Obrazek v galerii" className="img-responsive" src="/gallery/ostatky_2015/5.jpg"/>
                    </div>
                    <div className="col-lg-6 col-xs-12">
                        <img alt="Obrazek v galerii" className="img-responsive" src="/gallery/ostatky_2015/6.jpg"/>
                    </div>
                    <div className="col-lg-6 col-xs-12">
                        <img alt="Obrazek v galerii" className="img-responsive" src="/gallery/ostatky_2015/7.jpg"/>
                    </div>
                    <div className="col-lg-6 col-xs-12">
                        <img alt="Obrazek v galerii" className="img-responsive" src="/gallery/ostatky_2015/8.jpg"/>
                    </div>
                    <div className="col-lg-6 col-xs-12">
                        <img alt="Obrazek v galerii" className="img-responsive" src="/gallery/ostatky_2015/9.jpg"/>
                    </div>
                    <div className="col-lg-6 col-xs-12">
                        <img alt="Obrazek v galerii" className="img-responsive" src="/gallery/ostatky_2015/10.jpg"/>
                    </div>
                    <div className="col-lg-6 col-xs-12">
                        <img alt="Obrazek v galerii" className="img-responsive" src="/gallery/ostatky_2015/11.jpg"/>
                    </div>
                    <div className="col-lg-6 col-xs-12">
                        <img alt="Obrazek v galerii" className="img-responsive" src="/gallery/ostatky_2015/12.jpg"/>
                    </div>
                    <div className="col-lg-6 col-xs-12">
                        <img alt="Obrazek v galerii" className="img-responsive" src="/gallery/ostatky_2015/13.jpg"/>
                    </div>
                    <div className="col-lg-6 col-xs-12">
                        <img alt="Obrazek v galerii" className="img-responsive" src="/gallery/ostatky_2015/14.jpg"/>
                    </div>
                    <div className="col-lg-6 col-xs-12">
                        <img alt="Obrazek v galerii" className="img-responsive" src="/gallery/ostatky_2015/15.jpg"/>
                    </div>
                </div>

            </>
        )
    }

    getPublishDate(): Date {
        return new Date(2015, 2, 17)
    }

}
