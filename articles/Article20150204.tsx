import {Article} from "./Article";
import {ReactElement} from "react";

export class Article20150204 extends Article {

    getTitle(): string {
        return "Pozvánka na ostatky 2015"
    }

    getSlug(): string {
        return "pozvanka-na-ostatky-2015"
    }

    getImage(): string {
        return "/articles/pozvanka_ostatky_2015.jpg"
    }

    getPreheader(): string | null {
        return "SDH Veselice a OS Veselická kaplička vás všechny zve v sobotu 14. února do masopustního průvodu ve Veselici. Sraz ve 12:30 u kapličky."
    }

    getContent(): ReactElement {
        return (
            <>
                <p>SDH Veselice a OS Veselická kaplička vás všechny zve v sobotu <strong>14. února</strong> do masopustního průvodu
                    ve Veselici. Sraz ve <strong>12:30</strong> u kapličky. Po skončení průvodu je připraven program jak pro malé,
                    tak i velké účastníky!
                </p>

                <img width="100%" src="/articles/pozvanka-ostatky-2015.png" alt="Pozvánka na ostatky"/>
            </>
        )
    }

    getPublishDate(): Date {
        return new Date(2015, 2, 4)
    }

}
