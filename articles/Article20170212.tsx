import {Article} from "./Article";
import {ReactElement} from "react";

export class Article20170212 extends Article {

    getTitle(): string {
        return "Pozvánka na ostatky 2017"
    }

    getSlug(): string {
        return "pozvanka-na-ostatky-2017"
    }

    getImage(): string {
        return "/articles/ostatky-pozvanka-2017.jpg"
    }

    getPreheader(): string | null {
        return "SDH Veselice a sdružení VESELICKÁ KAPLIČKA vás zvou na ostatkový průvod obcí, který se uskuteční v sobotu 25. 2. 2017. Sraz masek je ve 12:30 u staré hasičské zbrojnice."
    }

    getContent(): ReactElement {
        return (
            <>
                <p>SDH Veselice a sdružení VESELICKÁ KAPLIČKA vás zvou na ostatkový průvod obcí, který se uskuteční v sobotu 25. 2.
                    2017. Sraz masek je ve 12:30 u staré hasičské zbrojnice.</p>
                <p>Potvrďte svoji účast na <a href="https://www.facebook.com/events/1253733228049507/" target="_blank">facebookové
                    události</a></p>
            </>
        )
    }

    getPublishDate(): Date {
        return new Date(2017, 2, 12)
    }

}
