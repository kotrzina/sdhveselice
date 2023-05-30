import {Article} from "./Article";
import {ReactElement} from "react";

export class Article20160223 extends Article {

    getTitle(): string {
        return "Změna data letošního Lesempolem"
    }

    getSlug(): string {
        return "zmena-data-letosniho-lesempolem"
    }

    getImage(): string {
        return "/articles/zmena_data_lesempolem.jpg"
    }

    getPreheader(): string | null {
        return "Letošní běžecké závody Lesempolem se výjimečně neuskuteční o víkendu společně s pouťovými oslavami, ale o týden později, tedy 18. 6. 2016."
    }

    getContent(): ReactElement {
        return (
            <>
                <p>Letošní běžecké závody <strong>Lesempolem</strong> se výjimečně neuskuteční o víkendu společně s pouťovými
                    oslavami, ale o týden později, tedy 18. 6. 2016. Více informací naleznete
                    <a href="https://lesempolem.cz">www.lesempolem.cz</a></p>
            </>
        )
    }

    getPublishDate(): Date {
        return new Date(2016, 2, 23)
    }

}
