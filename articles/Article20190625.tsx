import {Article} from "./Article";
import {Video} from "../components/Video/Video";

export class Article20190625 extends Article {

    getTitle(): string {
        return "Lesempolem 2019 - timelapse"
    }

    getSlug(): string {
        return "pout-a-lesempolem-2019"
    }

    getImage(): string {
        return "/articles/pout_2019.jpg"
    }

    getPreheader(): string | null {
        return "V červnu 2019 se tradičně uskutečnily běžecké závody Lesempolem. Podívejte se na zrychlený průběh dne."
    }

    getContent(): JSX.Element {
        return (
            <>
                <p>
                    V červnu 2019 se tradičně uskutečnily běžecké závody Lesempolem. Podívejte se na zrychlený průběh dne.
                </p>

                <p>
                    <Video src={"https://www.youtube.com/embed/QOVK6o9lepk"}/>
                </p>
            </>
        )
    }

    getPublishDate(): Date {
        return new Date(2019, 6, 25)
    }

}
