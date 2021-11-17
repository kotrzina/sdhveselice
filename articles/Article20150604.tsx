import {Article} from "./Article";

export class Article20150604 extends Article {

    getTitle(): string {
        return "Pozvánka na pouť 2015"
    }

    getSlug(): string {
        return "pozvanka-na-pout-2015"
    }

    getImage(): string {
        return "/articles/pozvanka_pout_2015.jpg"
    }

    getPreheader(): string | null {
        return "Jako každý rok se ve Veselici uskuteční tradiční Svatoantonínská pouť. Tento rok nám to vychází na víkend od 12. do 14. 6."
    }

    getContent(): JSX.Element {
        return (
            <>
                <p>Jako každý rok se ve Veselici uskuteční tradiční Svatoantonínská pouť. Tento rok nám to vychází na víkend od 12.
                    do 14. 6. Na pátek je připravena reprodukovaná hudba s příjemným posezením, pivkem a udírnou. Hned v sobotu rána
                    budeme pomáhat jako spoluorganizátoři na běžeckých závodech LESEMPOLEM. Pro více informací můžete navštívit <a
                        href="http://lesempolem.cz" target="_blank">www.lesempolem.cz</a>. V sobotu večer k nám dorazí kapela
                    TRIO KENT, která bude hrát k poslechu i tanci. K neděli tradičně patří příjemné posezení, dobré jídlo a pití. A
                    v pondělí samozřejmě dozvuky. Všichni jste srdečně zváni!
                </p>

                <p>
                    <a className={'btn btn-danger'} title="Akce na facebooku" href="https://www.facebook.com/events/1314269458588593/?active_tab=highlights"
                       target="_blank">Akce na Facebooku
                    </a>
                </p>

                <p>
                    <img width="100%" src="/articles/plakat-pout-2015.png" alt="Pozvánka na Pouť"/>
                </p>


            </>
        )
    }

    getPublishDate(): Date {
        return new Date(2015, 6, 4)
    }

}
