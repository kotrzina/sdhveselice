import {Article} from "./Article";
import {Gallery} from "../components/Gallery/Gallery";

export class Article20140706 extends Article {

    getTitle(): string {
        return "Pouť 2014"
    }

    getSlug(): string {
        return "pout-2014"
    }

    getImage(): string {
        return "/articles/pout_2014.jpg"
    }

    getPreheader(): string | null {
        return "Sbor dobrovolných hasičů Veselice uspořádal pro všechny občany tradiční Svatonatonínskou pouť, která se uskutečnila o víkendu 13. - 15. června 2014."
    }

    gallery: Array<string> = [
        "/gallery/pout_2014/1.jpg",
        "/gallery/pout_2014/2.jpg",
        "/gallery/pout_2014/3.jpg",
        "/gallery/pout_2014/4.jpg",
        "/gallery/pout_2014/5.jpg",
        "/gallery/pout_2014/6.jpg",
        "/gallery/pout_2014/7.jpg",
        "/gallery/pout_2014/8.jpg",
        "/gallery/pout_2014/9.jpg",
        "/gallery/pout_2014/10.jpg",
        "/gallery/pout_2014/11.jpg",
        "/gallery/pout_2014/12.jpg",
        "/gallery/pout_2014/13.jpg",
        "/gallery/pout_2014/14.jpg",
        "/gallery/pout_2014/15.jpg",
    ]

    getContent(): JSX.Element {
        return (
            <>
                <p>
                    Sbor dobrovolných hasičů Veselice uspořádal pro všechny občany tradiční Svatonatonínskou pouť, která se
                    uskutečnila o víkendu 13. - 15. června 2014. Letošní pouťové oslavy se uskutečnily opět ve sportovním areálu v
                    Malé Veselici
                </p>

                <h2>Pátek</h2>
                <p>V pátek večer proběhla prvotní část oslav. Do Veselice dorazila kapela TRIO KENT z nedalekých Petrovic, která
                    hrála známe písničky k poslechu i tanci. Jediné co tomu chybělo byla vyšší účast! Přespolních dorazilo ne úplně
                    málo (ať už ze Suchdola, Vavřince nebo Petrovic), ale jak už jsme si poslední roky zvykli - Veselských bylo
                    pomálu.</p>

                <h2>Sobota</h2>
                <p>
                    Po pár hodinách spánku na pořadatele čekal další velký úkol. Již druhým rokem právě v sobotu na pouť pomáháme
                    organizovat běžecké závody Lesempolem v okolí naší obce. Večer to pak byla taneční zábava se skupinou TŘI PSI z
                    Brna. Účast hostů byla sice větší, ale do ideálního počtu příchozích to mělo opravdu daleko. </p>

                <h2>Neděle</h2>
                <p>
                    Jelikož tento rok nedorazili kolotoče, muselo se najít nějaké jiné východisko, které by kolotoče nahradilo. Na
                    poslední chvíli se podařilo sehnat trampolínu a skákací hrad. Jak se ukázalo, tak to stačilo a děti mohli vesele
                    řádit :) . Přes celý den fungovalo občerstvení včetně udírny.
                </p>

                <Gallery srcs={this.gallery}/>
            </>
        )
    }

    getPublishDate(): Date {
        return new Date(2014, 7, 6)
    }

}
