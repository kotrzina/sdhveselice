import {Article} from "./Article";
import {ReactElement} from "react";
import {Gallery} from "../components/Gallery/Gallery";

export class Article20260417 extends Article {

    getTitle(): string {
        return "Pouť a IV. sjezd rodáků ve Veselici"
    }

    getSlug(): string {
        return "pout-a-sjezd-rodaku-2026"
    }

    getImage(): string {
        return "/gallery/pout_rodaci_2026/thumb.webp"
    }

    getPreheader(): string | null {
        return "Ve dnech 13. a 14. června 2026 se ve Veselici konala tradiční pouť a IV. sjezd rodáků. Letos jsme navíc oslavili 780 let od první písemné zmínky o obci."
    }

    getContent(): ReactElement {
        return (
            <>
                <p>
                    Druhý červnový víkend patřil ve Veselici pouti a IV. sjezdu rodáků. Letos jsme navíc slavili
                    {" "}<strong>780 let Veselice</strong> (první písemná zmínka pochází z roku 1246). Děkujeme všem
                    rodákům, obyvatelům, příbuzným i přátelům, kteří přijeli a strávili s námi krásný víkend.
                </p>

                <h3>Sobota — pouť</h3>
                <p>
                    Pouť začala ve 13:00 odpoledním programem pro děti. Čekala je přetahovaná, skákání přes lano,
                    lyže na trávě, střelba z děla poslepu, lanová dráha, skákací hrad a trampolína. V sále pak
                    proběhlo loutkové divadlo <em>O kohoutkovi a slepičce</em>. V 17:00 sloužil kněz u kapličky
                    mši svatou, na kterou přišla spousta místních i přespolních. Večer se na parkovišti před
                    kulturním domem tančilo až do noci, k tanci hrálo <strong>Trio Kent</strong>.
                </p>

                <h3>Neděle — sjezd rodáků</h3>
                <p>
                    V neděli se sál zaplnil rodáky z blízka i z daleka. Po přivítání a besedě jsme pokřtili
                    fotoknihu <a
                    href={"https://nkp.knihovny.cz/Record/nkp.NKC01-003756109"}
                    target={"_blank"}
                    rel={"noreferrer"}
                ><em>Veselice: fotokniha ke čtvrtému setkání rodáků</em></a>. Po celé odpoledne si
                    návštěvníci mohli prohlížet panelovou výstavu fotografií a staré kroniky. Venku pak
                    následovala pohádka nejen pro dospělé <em>O Kokoketce</em>. Neděle byla dost chladná,
                    a tak většina hostů zůstala v teple uvnitř a venkovní koncert kapely
                    {" "}<strong>Frívajvl</strong> si užili hlavně ti otužilejší.
                </p>

                <p>
                    Fotokniha je k zapůjčení ve všech místních knihovnách.
                </p>

                <p>
                    Velké díky patří všem, kteří pomáhali s přípravou, obsluhou i úklidem, a také
                    {" "}<strong>Osadnímu výboru Veselice</strong>, se kterým jsme akci společně pořádali.
                    Už teď se těšíme na další setkání!
                </p>

                <Gallery title={"Fotky"} srcs={[
                    "/gallery/pout_rodaci_2026/1.webp",
                    "/gallery/pout_rodaci_2026/2.webp",
                    "/gallery/pout_rodaci_2026/3.webp",
                    "/gallery/pout_rodaci_2026/4.webp",
                    "/gallery/pout_rodaci_2026/5.webp",
                    "/gallery/pout_rodaci_2026/6.webp",
                    "/gallery/pout_rodaci_2026/7.webp",
                    "/gallery/pout_rodaci_2026/8.webp",
                    "/gallery/pout_rodaci_2026/9.webp",
                    "/gallery/pout_rodaci_2026/10.webp",
                    "/gallery/pout_rodaci_2026/11.webp",
                    "/gallery/pout_rodaci_2026/12.webp",
                    "/gallery/pout_rodaci_2026/13.webp",
                    "/gallery/pout_rodaci_2026/14.webp",
                    "/gallery/pout_rodaci_2026/15.webp",
                    "/gallery/pout_rodaci_2026/16.webp",
                    "/gallery/pout_rodaci_2026/17.webp",
                    "/gallery/pout_rodaci_2026/18.webp",
                ]}/>
            </>
        )
    }

    getPublishDate(): Date {
        return new Date(2026, 5, 14)
    }
}
