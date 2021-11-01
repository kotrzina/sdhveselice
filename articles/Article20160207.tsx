import {Article} from "./Article";

export class Article20160207 extends Article {

    getTitle(): string {
        return "Ostatky 2016"
    }

    getSlug(): string {
        return "ostatky-2016"
    }

    getImage(): string {
        return "/articles/ostatky_2016.jpg"
    }

    getPreheader(): string | null {
        return "Dne 6. 2. 2016 se v naši obci uskutečnil tradiční ostatkový průvod, kterého se zúčastnilo kolem 20 masek. Celá akce odstartovala ve 13:00 od bývalé hasičky."
    }

    getContent(): JSX.Element {
        return (
            <>
                <p>Dne 6. 2. 2016 se v naši obci uskutečnil tradiční ostatkový průvod, kterého se zúčastnilo kolem 20 masek. Celá
                    akce odstartovala ve 13:00 od bývalé hasičky a zakončená byla tentokrát naplánována v budově kulturního domu,
                    konkrétně v muzeu včelařství. Fotky z ostatků naleznete <a
                        href="https://drive.google.com/folderview?id=0B6yMJrKV0CZoODZ3VUlYRG1pVXc&usp=sharing" target="_blank">na
                        tomto odkazu</a></p>
            </>
        )
    }

    getPublishDate(): Date {
        return new Date(2016, 2, 7)
    }

}
