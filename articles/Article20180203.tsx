import {Article} from "./Article";

export class Article20180203 extends Article {

    getTitle(): string {
        return "Pozvánka na ostatky 2018"
    }

    getSlug(): string {
        return "pozvanka-na-ostatky-2018"
    }

    getImage(): string {
        return "/articles/pozvanka_na_ostatky_2018.jpg"
    }

    getPreheader(): string | null {
        return "Dne 6. ledna 2018 se v místní víceúčelové budově uskutečnila valná hromada SDH Veselice."
    }

    getContent(): JSX.Element {
        return (
            <>
                <p>
                    SDH Veselice a sdružení VESELICKÁ KAPLIČKA vás zvou na ostatkový průvod obcí, který se uskuteční v&nbsp;sobotu&nbsp;10.&nbsp;2.&nbsp;2018.
                    Sraz masek je ve 12:30 u staré hasičské zbrojnice.
                </p>
                <div className="clear"/>

                <h2>Sestříhané video z minulého roku</h2>
                <div className="responsive-video">
                    <iframe src="https://www.youtube.com/embed/27no877EabM" frameBorder="0" allowFullScreen/>
                </div>
            </>
        )
    }

    getPublishDate(): Date {
        return new Date(2018, 2, 3)
    }

}
