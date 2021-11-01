import {Article} from "./Article";

export class Article20160604 extends Article {

    getTitle(): string {
        return "Pozvánka na pouť 2016"
    }

    getSlug(): string {
        return "pozvanka-na-pout-2016"
    }

    getImage(): string {
        return "/articles/pout_pozvanka_2016.jpg"
    }

    getPreheader(): string | null {
        return "Jako každý rok se ve Veselici uskuteční tradiční Svatoantonínská pouť. Tento rok nám to vychází na víkend od 10. do 13. 6."
    }

    getContent(): JSX.Element {
        return (
            <>
                <p>Jako každý rok se ve Veselici uskuteční tradiční Svatoantonínská pouť. Tento rok nám to vychází na víkend od 10.
                    do 13. 6. Na pátek je připravena reprodukovaná hudba s příjemným posezením, pivkem a udírnou. V sobotu večer k
                    nám dorazí kapela TRIO KENT z Petrovic, která bude hrát k poslechu i tanci. K neděli tradičně patří příjemné
                    posezení, dobré jídlo a pití. A v pondělí samozřejmě dozvuky. Všichni jste srdečně zváni!</p>

                <p>Celý pouťový víkend se koná také III. setkání rodáků a přátel Veselice, kdy v pátek od 18:00 můžete v místní
                    knihovně shlédnout přednášku Evy Nečasové o Hradu Blansek v historii a pověstech. Hlavní akcí srazu rodáků však
                    bude sobotní posezení od 14:00 v parku. Celé to pak uzavře mše svatá, která se uskuteční v neděli v prostranství
                    kapličky od 10:45.</p>
                <p><strong>Potvrď svoji účast v <a href="https://www.facebook.com/events/1314269458588593/?active_tab=highlights"
                                                   target="_blank" title="Akce na Facebooku">události na Facebooku</a></strong></p>
                <br/>
                <img width="100%" src="/articles/plakat-pout-2016.png" alt="Pozvánka na Pouť"/>


            </>
        )
    }

    getPublishDate(): Date {
        return new Date(2016, 6, 4)
    }

}
