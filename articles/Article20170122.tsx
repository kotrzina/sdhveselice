import {Article} from "./Article";
import {Gallery} from "../components/Gallery/Gallery";

export class Article20170122 extends Article {

    getTitle(): string {
        return "Wellness 2016"
    }

    getSlug(): string {
        return "wellness-2016"
    }

    getImage(): string {
        return "/articles/wellness_2016.jpg"
    }

    getPreheader(): string | null {
        return "Dne 30. prosince 2016 se na svazarmu uskutečnil 1. veselský wellness. Akce odstartovala v 17:00 na rozhledně."
    }

    gallery: Array<string> = [
        "/gallery/wellness/3.jpg",
        "/gallery/wellness/4.jpg",
        "/gallery/wellness/5.jpg",
        "/gallery/wellness/6.jpg",
        "/gallery/wellness/1.jpg",
        "/gallery/wellness/2.jpg",
    ]

    getContent(): JSX.Element {
        return (
            <>
                <p>Dne 30. prosince 2016 se na svazarmu uskutečnil 1. veselský wellness. Akce odstartovala v 17:00 na rozhledně, kde
                    byl připraven soutěžní výběh a seskok z rozhledny do připraveného bazénu. Na svazarmu se mezitím připravila voda
                    do bazénu, která dosahovala až 40 °C. Venkovní teplota se pohybovala kolem -5 °C. Pro odvážné byl připraven i
                    bezén se studenou vodou.
                </p>

                <Gallery srcs={this.gallery}/>
            </>
        )
    }

    getPublishDate(): Date {
        return new Date(2017, 1, 22)
    }

}
