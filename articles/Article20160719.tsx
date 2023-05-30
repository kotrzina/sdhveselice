import {Article} from "./Article";
import {Gallery} from "../components/Gallery/Gallery";
import {ReactElement} from "react";

export class Article20160719 extends Article {

    getTitle(): string {
        return "Pouť ve Veselici 2016"
    }

    getSlug(): string {
        return "pout-ve-veselici-2016"
    }

    getImage(): string {
        return "/articles/pout_2016.jpg"
    }

    getPreheader(): string | null {
        return "O víkendu od 10. do 13. 6. se u nás v obci uskutečnila pod naší záštitou tradiční pouť."
    }

    gallery: Array<string> = [
        "/gallery/pout_2016/1.JPG",
        "/gallery/pout_2016/2.JPG",
        "/gallery/pout_2016/3.JPG",
        "/gallery/pout_2016/4.JPG",
        "/gallery/pout_2016/5.JPG",
        "/gallery/pout_2016/6.JPG",
        "/gallery/pout_2016/7.JPG",
        "/gallery/pout_2016/8.JPG",
        "/gallery/pout_2016/9.JPG",
    ]

    getContent(): ReactElement {
        return (
            <>
                <p>O víkendu od 10. do 13. 6. se u nás v obci uskutečnila pod naší záštitou tradiční pouť. Program pouti začal již v
                    pátek, kdy byla připravena pouze reprodukovaná hudba a příjemné posezení. Již se stalo standardem, že v pátek
                    dorazí jen hrstka vyvolených a ani tento rok se nestal nijak výjimečný. V sobotu od 14:00 bylo připraveno
                    setkání rodáků. Hned v úvodu to také nevypadalo na vetší účast, ale jak hodiny přibývaly, chodilo čím dál tím
                    více lidí. Součástí setkání rodáků bylo také představení nové publikace o historii Veselice, kterou si můžete
                    zakoupit v turistickém informačním centru v prostorech kulturního domu. Večer k nám dorazila z nedalekých
                    Petrovic kapela TRIO KENT, která bavila asi 80 příchozích do ranních hodin. Neděle už tradičně patřila
                    sousedskému posezení s dobrým pivem a jídlem.
                </p>

                <Gallery srcs={this.gallery}/>
            </>
        )
    }

    getPublishDate(): Date {
        return new Date(2016, 7, 19)
    }

}
