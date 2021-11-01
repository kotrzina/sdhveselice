import {Article} from "./Article";

export class Article20160927 extends Article {

    getTitle(): string {
        return "Konec prázdnin 2016 - fotogalerie"
    }

    getSlug(): string {
        return "konec-prazdnin-2016-fotogalerie"
    }

    getImage(): string {
        return "/articles/konec_prazdnin_2016.jpg"
    }

    getPreheader(): string | null {
        return "I tento rok sdružení Kotržina uspořádalo ukončení prázdnin, které se konalo dne 27. 8. v parku pod kulturním domem."
    }

    getContent(): JSX.Element {
        return (
            <>
                <p>I tento rok sdružení Kotržina uspořádalo ukončení prázdnin, které se konalo dne 27. 8. v parku pod kulturním
                    domem. Jak se to povedlo můžete sledovat na fotkách a videích níže</p>
                <div className="clear"></div>

                <h2>Odhalení orloje:</h2>
                <iframe width="100%" height="370px" src="https://www.youtube.com/embed/SoYpw94O8TM" frameBorder="0"
                        allowFullScreen></iframe>

                <h2>Video od parašutistů:</h2>
                <iframe src="https://player.vimeo.com/video/180525559" width="100%" height="370px" frameBorder="0" allowFullScreen/>

                <h2>Galerie:</h2>
                <div className="gallery">
                    <div className="col-lg-6 col-xs-12">
                        <img alt="Obrazek v galerii" className="img-responsive" src="/gallery/konec_prazdnin_2016/1.jpg"/>
                    </div>
                    <div className="col-lg-6 col-xs-12">
                        <img alt="Obrazek v galerii" className="img-responsive" src="/gallery/konec_prazdnin_2016/2.jpg"/>
                    </div>
                    <div className="col-lg-6 col-xs-12">
                        <img alt="Obrazek v galerii" className="img-responsive" src="/gallery/konec_prazdnin_2016/3.jpg"/>
                    </div>
                    <div className="col-lg-6 col-xs-12">
                        <img alt="Obrazek v galerii" className="img-responsive" src="/gallery/konec_prazdnin_2016/4.jpg"/>
                    </div>
                    <div className="col-lg-6 col-xs-12">
                        <img alt="Obrazek v galerii" className="img-responsive" src="/gallery/konec_prazdnin_2016/5.jpg"/>
                    </div>
                    <div className="col-lg-6 col-xs-12">
                        <img alt="Obrazek v galerii" className="img-responsive" src="/gallery/konec_prazdnin_2016/6.jpg"/>
                    </div>
                    <div className="col-lg-6 col-xs-12">
                        <img alt="Obrazek v galerii" className="img-responsive" src="/gallery/konec_prazdnin_2016/7.jpg"/>
                    </div>
                    <div className="col-lg-6 col-xs-12">
                        <img alt="Obrazek v galerii" className="img-responsive" src="/gallery/konec_prazdnin_2016/8.jpg"/>
                    </div>
                    <div className="col-lg-6 col-xs-12">
                        <img alt="Obrazek v galerii" className="img-responsive" src="/gallery/konec_prazdnin_2016/9.jpg"/>
                    </div>
                </div>
            </>
        )
    }

    getPublishDate(): Date {
        return new Date(2016, 9, 27)
    }

}
