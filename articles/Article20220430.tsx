import {Article} from "./Article";
import {Video} from "../components/Video/Video";
import {ReactElement} from "react";

export class Article20220430 extends Article {

    getTitle(): string {
        return "Pozvánka na pouť a Lesempolem 2022"
    }

    getSlug(): string {
        return "pozvanka-na-pout-a-lesempolem-2022"
    }

    getImage(): string {
        return "/articles/pozvanka_pout_lesmepolem_2022.jpg"
    }

    getPreheader(): string | null {
        return "Pozvánka na blížící se běžecké závody Lesempolem a na Svatoantonínská pouť."
    }

    getContent(): ReactElement {
        return (
            <>
                <p>
                    <ul>
                        <li><strong>Kdy:</strong> 11. - 12. 6. 2022</li>
                        <li><strong>Kde:</strong> Sportovní areál ve Veselici</li>
                    </ul>
                </p>
                <p>
                    I tento rok se Veselici připravuje pouť, která je už po několik let spjata s běžeckými
                    závody Lesempolem. Tento rok bude opět v ultramaratonském duchu. Celé to začne od sobotního
                    rána, kde v 7:00 odstartují závodníci na 63km dlouhou trať. Detailní informace včetně registrace je
                    možné
                    najít na stránkách <a href={"https://lesempolem.cz"} title={"Lesempolem"}>lesempolem.cz</a>.
                </p>
                <p>
                    Od 17:00 je v plánu živý rokový koncert kapely <a href={"https://www.ravenhard.cz/"}
                                                                      target={"_blank"}
                                                                      rel={"noreferrer"}
                ><strong>RAVENHARD-GOTTHARD TRIBUTE BAND</strong></a>.
                </p>
                <p>Od 21:00 pouťová zábava se skupinou <strong>Styl</strong>.</p>
                <p>Neděle bude již tradičně spojena s posezením u dobrého jídla a piva.</p>
                <Video src={"https://www.youtube.com/embed/XVxalyuB840"} title={"Ukázka z koncertu RAVENHARD"}/>
            </>
        )
    }

    getPublishDate(): Date {
        return new Date(2022, 4, 30)
    }
}
