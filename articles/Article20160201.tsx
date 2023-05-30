import {Article} from "./Article";
import {ReactElement} from "react";

export class Article20160201 extends Article {

    getTitle(): string {
        return "Pozvánka na ostatky 2016"
    }

    getSlug(): string {
        return "pozvanka-na-ostatky-2016"
    }

    getImage(): string {
        return "/articles/pozvaka_na_ostatky_2016.jpg"
    }

    getPreheader(): string | null {
        return "SDH Veselice a sdružení VESELICKÁ KAPLIČKA vás zvou na ostatkový průvod obcí, který se uskuteční v sobotu 6. 2. 2016. Sraz masek je ve 12:30 u staré hasičské zbrojnice."
    }

    getContent(): ReactElement {
        return (
            <>
                <p>SDH Veselice a sdružení VESELICKÁ KAPLIČKA vás zvou na ostatkový průvod obcí, který se uskuteční v sobotu 6. 2.
                    2016. Sraz masek je ve 12:30 u staré hasičské zbrojnice.</p>
            </>
        )
    }

    getPublishDate(): Date {
        return new Date(2016, 2, 1)
    }

}
