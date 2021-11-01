import {Article} from "./Article";

export class Article20150901 extends Article {

    getTitle(): string {
        return "Opakovaný požár trávy v Suchdole"
    }

    getSlug(): string {
        return "opakovany-pozar-travy-v-suchdole"
    }

    getImage(): string {
        return "/articles/pozar_travy_v_suchdole.jpg"
    }

    getPreheader(): string | null {
        return "V dnech 8. a 9. srpna 2015 naše jednotka vyjela k požáru trávy do Suchdolu. Hořela zahrada nad autobusovou zastávkou směrem do Veselice."
    }

    getContent(): JSX.Element {
        return (
            <>
                <p>V dnech 8. a 9. srpna 2015 naše jednotka vyjela k požáru trávy do Suchdolu. Hořela zahrada nad autobusovou
                    zastávkou směrem do Veselice. V sobotu 8. srpna začalo hořet hned v raních hodinách. Poplach byl vyhlášen v
                    5:34. Znovu začalo hořet následující den v 15:27. Složení našeho družstva bylo po dobu obou výjezdů stejné a to:
                    Lubomír Němec, Martin Nečas, Milan Fabiánek, Lukáš Souček a Tomáš Kozák.</p>

                <p><a href="http://www.firebrno.cz/modules/incidents/detail.php?filter[id]=179597062&district_id=3701"
                      target="_blank">Odkaz na sobotní událost</a></p>
                <p><a href="http://www.firebrno.cz/modules/incidents/detail.php?filter[id]=179728062&district_id=3701"
                      target="_blank">Odkaz na nedělní událost</a></p>
                <div className="clear"></div>

                <h2>Galerie:</h2>
                <div className="gallery">
                    <div className="col-lg-6 col-xs-12">
                        <img alt="Obrazek v galerii" className="img-responsive" src="/gallery/pozar_v_suchdole/1.jpg"/>
                    </div>
                    <div className="col-lg-6 col-xs-12">
                        <img alt="Obrazek v galerii" className="img-responsive" src="/gallery/pozar_v_suchdole/2.jpg"/>
                    </div>
                    <div className="col-lg-6 col-xs-12">
                        <img alt="Obrazek v galerii" className="img-responsive" src="/gallery/pozar_v_suchdole/3.jpg"/>
                    </div>
                    <div className="col-lg-6 col-xs-12">
                        <img alt="Obrazek v galerii" className="img-responsive" src="/gallery/pozar_v_suchdole/4.jpg"/>
                    </div>
                    <div className="col-lg-6 col-xs-12">
                        <img alt="Obrazek v galerii" className="img-responsive" src="/gallery/pozar_v_suchdole/5.jpg"/>
                    </div>
                    <div className="col-lg-6 col-xs-12">
                        <img alt="Obrazek v galerii" className="img-responsive" src="/gallery/pozar_v_suchdole/6.jpg"/>
                    </div>
                </div>
            </>
        )
    }

    getPublishDate(): Date {
        return new Date(2015, 9, 1)
    }

}
