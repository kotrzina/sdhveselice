import {Article} from "./Article";

export class Article20170826 extends Article {

    getTitle(): string {
        return "Konec prázdnin 2017"
    }

    getSlug(): string {
        return "konec-prazdnin-2017"
    }

    getImage(): string {
        return "/articles/konec_prazdnin_2017.jpg"
    }

    getPreheader(): string | null {
        return "Dne 26. 8. 2017 se ve Veselici v areálu u horních vojáků uskutečnilo pod záštitou společenství Kotržina a Pavla Zmeka již tradiční rozloučení s prázdninami."
    }

    getContent(): JSX.Element {
        return (
            <>
                <p>Dne 26. 8. 2017 se ve Veselici v areálu u horních vojáků uskutečnilo pod záštitou společenství Kotržina a Pavla
                    Zmeka již tradiční rozloučení s prázdninami. Program byl jako vždy pestrý. Vše odstartovalo již v 16:00 seskokem
                    parašutistů na poli pod rozhlednou. Následně na to byla připravena soutěž O zlatou jízdenku ve střelbě ze
                    vzduchovky, slaňování rozhledy a stopovaná s mapou. Hlavní událost večera přišla krátce po setmění. Odhalení
                    velkého
                    zvonu, který byl umístěn v hangáru. Byl naplněn sladkostmi, pro které si děti mohli vyšplhat po laně. Chvilku na
                    to
                    překvapil příchozí Veselský pramen. Celou akci pak ukončil připravený ohňostroj. Na akci se vystřídalo velké
                    množství lidí a v jednom okamžiku bylo odhadem napočítáno až 250 lidí. Tímto bychom chtěli poděkovat všem
                    príchozím
                    a zejména lidem, kteří se na uskutečnění události podíleli.
                </p>

                <div className="clear"></div>

                <h2>Video:</h2>
                <div className="responsive-video">
                    <iframe src="https://www.youtube.com/embed/VR_HQtW-iv8" frameBorder="0" allowFullScreen/>
                </div>

                <h2>Galerie:</h2>
                <div className="gallery">
                    <div className="col-lg-6 col-xs-12">
                        <img alt="Obrazek v galerii" className="img-responsive" src="/gallery/konec_prazdnin_2017/1.jpg"/>
                    </div>
                    <div className="col-lg-6 col-xs-12">
                        <img alt="Obrazek v galerii" className="img-responsive" src="/gallery/konec_prazdnin_2017/2.jpg"/>
                    </div>
                    <div className="col-lg-6 col-xs-12">
                        <img alt="Obrazek v galerii" className="img-responsive" src="/gallery/konec_prazdnin_2017/3.jpg"/>
                    </div>
                    <div className="col-lg-6 col-xs-12">
                        <img alt="Obrazek v galerii" className="img-responsive" src="/gallery/konec_prazdnin_2017/4.jpg"/>
                    </div>
                    <div className="col-lg-6 col-xs-12">
                        <img alt="Obrazek v galerii" className="img-responsive" src="/gallery/konec_prazdnin_2017/5.jpg"/>
                    </div>
                    <div className="col-lg-6 col-xs-12">
                        <img alt="Obrazek v galerii" className="img-responsive" src="/gallery/konec_prazdnin_2017/6.jpg"/>
                    </div>
                    <div className="col-lg-6 col-xs-12">
                        <img alt="Obrazek v galerii" className="img-responsive" src="/gallery/konec_prazdnin_2017/7.jpg"/>
                    </div>
                    <div className="col-lg-6 col-xs-12">
                        <img alt="Obrazek v galerii" className="img-responsive" src="/gallery/konec_prazdnin_2017/8.jpg"/>
                    </div>
                    <div className="col-lg-6 col-xs-12">
                        <img alt="Obrazek v galerii" className="img-responsive" src="/gallery/konec_prazdnin_2017/9.jpg"/>
                    </div>
                    <div className="col-lg-6 col-xs-12">
                        <img alt="Obrazek v galerii" className="img-responsive" src="/gallery/konec_prazdnin_2017/10.jpg"/>
                    </div>
                </div>
            </>
        )
    }

    getPublishDate(): Date {
        return new Date(2017, 8, 26)
    }

}
