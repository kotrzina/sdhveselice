import {Article} from "./Article";
import {Gallery} from "../components/Gallery/Gallery";

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

    gallery: Array<string> = [
        "/gallery/pout_2015/1.jpg",
        "/gallery/pout_2015/2.jpg",
        "/gallery/pout_2015/3.jpg",
        "/gallery/pout_2015/4.jpg",
        "/gallery/pout_2015/5.jpg",
    ]

    getContent(): JSX.Element {
        return (
            <>
                <p>Ve dnech od 12. do 14. června se ve Veselici uskutečnila Svatoantonínská pouť, kterou již po několikáté pořádali
                    dobrovolní hasiči. V pátek byla připravena pouze reprodukovaná hudba a k naší velké radosti dorazila alespoň
                    velký banda lidí z Petrovic. Hned od sobotního rána naši členové pomáhali zabezpečit <a
                        href="http://lesempolem.cz/">běžecké závody Lesempolem</a>. V sobotu večer již vystoupila živá kapela
                    TRI KENT, která přilákala cca 80 příchozích a bavila je až do ranních hodin. Neděle již tradičně probíhala ve
                    znamení pohodového posezení u dobrého jídla a pití.</p>

                <Gallery srcs={this.gallery}/>
            </>
        )
    }

    getPublishDate(): Date {
        return new Date(2015, 6, 21)
    }

}
