import {Article} from "./Article";
import {ReactElement} from "react";

export class Article20260416 extends Article {

    getTitle(): string {
        return "Pálení čarodějnic ve Veselici"
    }

    getSlug(): string {
        return "paleni-carodejnic-2026"
    }

    getImage(): string {
        return "/articles/carodejnice_2026.webp"
    }

    getPreheader(): string | null {
        return "Srdečně Vás zveme na Pálení čarodějnic ve čtvrtek 30. 4. 2026 od 16:00 na Svazarmu ve Veselici."
    }

    getContent(): ReactElement {
        return (
            <>
                <p>
                    Srdečně Vás zveme na Pálení čarodějnic. Přijďte si s námi užít podvečer plný ohně a pohody.
                </p>

                <p>
                    <ul>
                        <li><strong>Kdy:</strong> čtvrtek 30. 4. 2026 od 16:00</li>
                        <li><strong>Kde:</strong> Na Svazarmu, Veselice</li>
                    </ul>
                </p>

                <h3>Co Vás čeká</h3>
                <p>
                    <ul>
                        <li>Vatra</li>
                        <li>Skákací hrad pro děti</li>
                        <li>Opékání párků na ohni (párky k zakoupení na místě)</li>
                        <li>Občerstvení zajištěno</li>
                    </ul>
                </p>

                <p>Těšíme se na Vás!</p>
            </>
        )
    }

    getPublishDate(): Date {
        return new Date(2026, 3, 16)
    }
}
