import {Article} from "./Article";
import {ReactElement} from "react";
import {Gallery} from "../components/Gallery/Gallery";

export class Article20250616 extends Article {

    getTitle(): string {
        return "Pouť 2025"
    }

    getSlug(): string {
        return "pout-2025"
    }

    getImage(): string {
        return "/articles/pout_2025.webp"
    }

    getPreheader(): string | null {
        return "Dne 16. a 17. června 2025 se konala tradiční pout ve Veselici."
    }

    getContent(): ReactElement {
        return (
            <>
                <p>
                    Dne 16. a 17. června 2025 se konala tradiční pout ve Veselici. Program byl následující:

                    <ul>
                        <li><strong>Sobota</strong></li>
                        <ul>
                            <li>Odpoledne plné her - olympijské hry pro děti</li>
                            <li>Loutkové divadlo</li>
                            <li>Diskotéka pro děti</li>
                            <li>Večer zábava se skupinou TrioKent</li>
                        </ul>
                        <li><strong>Neděle</strong></li>
                        <ul>
                            <li>Posezení s reprodukovanou hudbou</li>
                        </ul>
                    </ul>
                </p>

                <Gallery title={"Fotky"} srcs={[
                    "/gallery/pout_2025/1.webp",
                    "/gallery/pout_2025/2.webp",
                    "/gallery/pout_2025/3.webp",
                    "/gallery/pout_2025/4.webp",
                    "/gallery/pout_2025/5.webp",
                    "/gallery/pout_2025/6.webp",
                ]}/>
            </>
        )
    }

    getPublishDate(): Date {
        return new Date(2025, 5, 16)
    }
}
