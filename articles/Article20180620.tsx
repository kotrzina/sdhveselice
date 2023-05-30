import {Article} from "./Article";
import {ReactElement} from "react";

export class Article20180620 extends Article {
    getTitle(): string {
        return "Pouť a Lesempolem 2018";
    }

    getSlug(): string {
        return "pout-a-lesempolem-2018";
    }

    getImage(): string {
        return "/articles/pout-a-lesempolem-2018.jpg";
    }

    getPreheader(): string | null {
        return "Informace o pouti a běžeckých závodech Lesempolem, které se uskutečnili v červnu 2018.";
    }

    getContent(): ReactElement {
        return (
            <>
                <p>První akcí pouti byl běh Lesempolem, který se konal v sobotu od 8:00. Zúčastnilo se ho celkem 83 dospělých a 81 dětských závodníků. Další
                    akcí byl koncert skupiny SilverBand, který odstartoval od 21:00 na místním hřišti. Účast nebyla tak silná jak jsme očekávali a dorazilo
                    zhruba 80 lidí. Na neděli byl připraven folkrockový festival. I přes krásné počasí a nabitý program nebyla účast nijak hojná. Ti kteří
                    dorazili mohli zhlédnou vystoupení hned šesti kapel. Mezi největší taháky patřil bez pochyb Aleš Petržela. Pondělí tradičně patřilo
                    dozvukům.
                </p>
            </>
        )
    }

    getPublishDate(): Date {
        return new Date(2018, 6, 20)
    }


}
