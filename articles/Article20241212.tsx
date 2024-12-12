import {Article} from "./Article";
import {ReactElement} from "react";

export class Article20241212 extends Article {

    getTitle(): string {
        return "Valná hromada za rok 2024"
    }

    getSlug(): string {
        return "valna-hromada-za-rok-2024"
    }

    getImage(): string {
        return "/articles/valna_hromada_2023.webp"
    }

    getPreheader(): string | null {
        return "Valná hromada se ukuteční 11. ledna 2025 od 17:00 v místní víceúčelové budově."
    }

    getContent(): ReactElement {
        return (
            <p>
                Zveme všechny členy a příznivce SDH Veselice na valnou hromadu, která se uskuteční 11. ledna 2025 od 17:00 v místní víceúčelové budově.
            </p>
        )
    }

    getPublishDate(): Date {
        return new Date(2024, 12, 12)
    }
}
