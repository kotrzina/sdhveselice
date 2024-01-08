import {Article} from "./Article";
import {ReactElement} from "react";
import {Button} from "react-bootstrap";

export class Article20240108 extends Article {

    getTitle(): string {
        return "Pozvánka na Lesempolem 2024"
    }

    getSlug(): string {
        return "pozvanka-na-lesempolem-2024"
    }

    getImage(): string {
        return "/articles/pozvanka_na_lp_2024.webp"
    }

    getPreheader(): string | null {
        return "Lesempolem se bude tento rok konat v novém termínu - v sobotu 9. března. Tešit se můžete na půlmaraton a čtvrtmaraton."
    }

    getContent(): ReactElement {
        return (
            <>
                <p>
                    <ul>
                        <li><strong>Kdy: </strong> 9. 3. 2024 od 9:00</li>
                        <li><strong>Start: </strong> v 11:00</li>
                        <li><strong>Kde: </strong> Víceúčelová budova ve Veselici</li>
                    </ul>
                </p>

                <p>
                    Již tradiční běžecký závod Lesempolem se letos bude konat v novém termínu na tradičním okruhu s
                    délkou 10 550 m vedoucí krajinou Moravského krasu. V letošním roce budou připraveny dva závody –
                    půlmaratonový a čtvrtmaratonový. Půlmaraton budou tvořit dva okruhy. Tento závod je zařazen v rámci
                    OBL Blansko jako bodovací pro muže.

                    Čtvrtmaraton bude tvořit jeden okruh. Tento závod je zařazen v rámci OBL Blansko jako bodovací pro
                    ženy a juniory.

                    Zájemci o běh půlmaratonu z řad žen a juniorů nebudou o body do OBL ošizeni. V rámci OBL jim bude v
                    průběhu do druhého kola zaznamenán čas a budou bodově i umístěním zařazeni do závodu čtvrtmaratonu.

                </p>

                <p>
                    Pro příchozí diváky bude připraven kulturní program, udírna, výčep a bohaté občerstvení. Prezentace
                    a zázemí závodu bude nově v kulturním domě (Informační centrum ve Veselici) v těsné blízkosti startu
                    a cíle.
                </p>

                <p>
                    <Button
                        href={"https://lesempolem.cz/informace.html"}
                        target={"_blank"}
                        variant={"success"}
                    >Více o Lesempolem</Button>
                </p>
            </>
        )
    }

    getPublishDate(): Date {
        return new Date(2024, 1, 8)
    }
}
