import {Article} from "./Article";
import {ReactElement} from "react";
import {Gallery} from "../components/Gallery/Gallery";
import {Button} from "react-bootstrap";

export class Article20240606 extends Article {

    getTitle(): string {
        return "Lesempolem a Borák 2024"
    }

    getSlug(): string {
        return "lesempolem-a-borak-2024"
    }

    getImage(): string {
        return "/gallery/lesempolem_2024/2.webp"
    }

    getPreheader(): string | null {
        return "Dva běžecké závody ve Veselici v roce 2024 pořádané našim sborem."
    }

    getContent(): ReactElement {
        return (
            <>
                <p>
                    Tento rok se ve Veselici uskutečnily hned dva běhy. Klasické Lesempolem, které bylo začazeno do
                    Okresní běžecké ligy Blansko. Druhým závodem byl Borák, kde si to závodníci rozdali na
                    ultramaratonské trati.
                </p>

                <Gallery title={"Lesempolem - 9. 3. 2024"} srcs={[
                    "/gallery/borak_2024/15.webp",
                    "/gallery/borak_2024/27.webp",
                    "/gallery/borak_2024/38.webp",
                ]}/>

                <p className={"mt-3"}>
                    <Button
                        size={"lg"}
                        variant={"success"}
                        href={"https://lesempolem.cz/vysledky-2024.html"}
                        target={"_blank"}
                    >
                        Výsledky Lesempolem
                    </Button>

                    <Button
                        size={"lg"}
                        className={"m-lg-2"}
                        variant={"warning"}
                        href={"https://oblblansko.cz/index.php?page=vysledky&navrat=terminovka&rok_vyber=2024&termin_vyber=255"}
                        target={"_blank"}
                        rel={"noreferrer"}
                    >
                        OBL body
                    </Button>
                </p>

                <Gallery title={"Borák - 11. 5. 2024"} srcs={[
                    "/gallery/lesempolem_2024/1.webp",
                    "/gallery/lesempolem_2024/2.webp",
                    "/gallery/lesempolem_2024/3.webp",
                ]}/>

                <p className={"mt-3"}>
                    <Button
                        size={"lg"}
                        variant={"success"}
                        href={"https://lesempolem.cz/vysledky-2024-borak.html"}
                        target={"_blank"}
                    >
                        Výsledky Borák
                    </Button>

                    <Button
                        size={"lg"}
                        className={"m-lg-2"}
                        variant={"warning"}
                        href={"https://www.rajce.idnes.cz/dao/album/borak-ve-veselici-11-5-2024"}
                        target={"_blank"}
                        rel={"noreferrer"}
                    >Fotky DAO</Button>
                </p>
            </>
        )
    }

    getPublishDate(): Date {
        return new Date(2024, 6, 6)
    }
}
