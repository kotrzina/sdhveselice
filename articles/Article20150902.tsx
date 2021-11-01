import {Article} from "./Article";

export class Article20150902 extends Article {

    getTitle(): string {
        return "Zakončení prázdnin s orlojem"
    }

    getSlug(): string {
        return "zakonceni-prazdnin-s-orlojem"
    }

    getImage(): string {
        return "/articles/zakonceni_prazdnin_s_orlojem.jpg"
    }

    getPreheader(): string | null {
        return "V pátek 28. 8. 2015 se za spoluúčasti sdružení Kotržina konalo rozloučení s letními prázdninami."
    }

    getContent(): JSX.Element {
        return (
            <>
                <p>V pátek 28. 8. 2015 se za spoluúčasti sdružení Kotržina konalo rozloučení s letními prázdninami. Celá akce
                    odstartovala v 17:45, kdy na poli pod rozhlednou seskočili tři parašutisti. Ihned po seskoku se šlo na
                    rozhlednu, kde byly nachystány pravidelné závody ve výběhu. Tentokrát s doprovodnou disciplínou slaňování, která
                    byla úrčena pro všechny odvážné účastníky. V tu dobu již bylo nachystáno sousedské posezení v parku, na které s
                    přibývajícím časem přicházelo čím dál tím více lidí. Celá akce pak vyvrcholila živým orlojem, na jehož záznam se
                    můžete podívat v krátkém video pod článkem. Celý večer pak uzavřel připravený ohňostroj.</p>
                <div className="fix"/>
                <div className="clear"/>
                <br/>
                <div className="responsive-video">
                    <iframe src="https://www.youtube.com/embed/DFu8ODBwMp0" frameBorder="0" allowFullScreen/>
                </div>

                <h2>Galerie:</h2>
                <div className="gallery">
                    <div className="col-lg-6 col-xs-12">
                        <img alt="Obrazek v galerii" className="img-responsive"
                             src="/gallery/zakonceni_prazdnin_s_orlojem/1.jpg"/>
                    </div>
                    <div className="col-lg-6 col-xs-12">
                        <img alt="Obrazek v galerii" className="img-responsive"
                             src="/gallery/zakonceni_prazdnin_s_orlojem/2.jpg"/>
                    </div>
                    <div className="col-lg-6 col-xs-12">
                        <img alt="Obrazek v galerii" className="img-responsive"
                             src="/gallery/zakonceni_prazdnin_s_orlojem/3.jpg"/>
                    </div>
                    <div className="col-lg-6 col-xs-12">
                        <img alt="Obrazek v galerii" className="img-responsive"
                             src="/gallery/zakonceni_prazdnin_s_orlojem/4.jpg"/>
                    </div>
                    <div className="col-lg-6 col-xs-12">
                        <img alt="Obrazek v galerii" className="img-responsive"
                             src="/gallery/zakonceni_prazdnin_s_orlojem/5.jpg"/>
                    </div>
                    <div className="col-lg-6 col-xs-12">
                        <img alt="Obrazek v galerii" className="img-responsive"
                             src="/gallery/zakonceni_prazdnin_s_orlojem/6.jpg"/>
                    </div>
                    <div className="col-lg-6 col-xs-12">
                        <img alt="Obrazek v galerii" className="img-responsive"
                             src="/gallery/zakonceni_prazdnin_s_orlojem/7.jpg"/>
                    </div>
                </div>
            </>
        )
    }

    getPublishDate(): Date {
        return new Date(2015, 9, 2)
    }

}
