import {Article} from "./Article";

export class Article20170225 extends Article {

    getTitle(): string {
        return "Ostatky 2017"
    }

    getSlug(): string {
        return "ostatky-2017"
    }

    getImage(): string {
        return "/articles/ostatky_2017.jpg"
    }

    getPreheader(): string | null {
        return "V sobotu 25. 2. 2017 se Veselici konal tradiční ostatkový průvod. Sraz masek byl jako každý rok ve 12:30 u staré hasičské zbrojnice."
    }

    getContent(): JSX.Element {
        return (
            <>
                <p>V sobotu 25. 2. 2017 se Veselici konal tradiční ostatkový průvod. Sraz masek byl jako každý rok ve 12:30 u staré
                    hasičské zbrojnice. Průvodu se zúčastnilo asi 20 masek. Zakončení bylo jako loni v místním kulturním domě. Celá
                    akce se konala pod zaštitou SDH a spolku Veselská kaplička.
                </p>
                <div className="clear"/>
                <h2>Video:</h2>
                <div className="responsive-video">
                    <iframe src="https://www.youtube.com/embed/27no877EabM" frameBorder="0" allowFullScreen/>
                </div>

                <h2>Galerie:</h2>
                <div className="gallery">
                    <div className="col-lg-6 col-xs-12">
                        <img alt="Obrazek v galerii" className="img-responsive" src="/gallery/ostatky_2017/1.jpg"/>
                    </div>
                    <div className="col-lg-6 col-xs-12">
                        <img alt="Obrazek v galerii" className="img-responsive" src="/gallery/ostatky_2017/2.jpg"/>
                    </div>
                    <div className="col-lg-6 col-xs-12">
                        <img alt="Obrazek v galerii" className="img-responsive" src="/gallery/ostatky_2017/3.jpg"/>
                    </div>
                    <div className="col-lg-6 col-xs-12">
                        <img alt="Obrazek v galerii" className="img-responsive" src="/gallery/ostatky_2017/4.jpg"/>
                    </div>
                    <div className="col-lg-6 col-xs-12">
                        <img alt="Obrazek v galerii" className="img-responsive" src="/gallery/ostatky_2017/5.jpg"/>
                    </div>
                    <div className="col-lg-6 col-xs-12">
                        <img alt="Obrazek v galerii" className="img-responsive" src="/gallery/ostatky_2017/6.jpg"/>
                    </div>
                </div>
            </>
        )
    }

    getPublishDate(): Date {
        return new Date(2017, 2, 25)
    }

}
