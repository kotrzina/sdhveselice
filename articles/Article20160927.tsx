import {Article} from "./Article";
import {Video} from "../components/Video/Video";
import {Gallery} from "../components/Gallery/Gallery";
import {ReactElement} from "react";

export class Article20160927 extends Article {

    getTitle(): string {
        return "Konec prázdnin 2016 - fotogalerie"
    }

    getSlug(): string {
        return "konec-prazdnin-2016-fotogalerie"
    }

    getImage(): string {
        return "/articles/konec_prazdnin_2016.jpg"
    }

    getPreheader(): string | null {
        return "I tento rok sdružení Kotržina uspořádalo ukončení prázdnin, které se konalo dne 27. 8. v parku pod kulturním domem."
    }

    gallery: Array<string> = [
        "/gallery/konec_prazdnin_2016/1.jpg",
        "/gallery/konec_prazdnin_2016/2.jpg",
        "/gallery/konec_prazdnin_2016/3.jpg",
        "/gallery/konec_prazdnin_2016/4.jpg",
        "/gallery/konec_prazdnin_2016/5.jpg",
        "/gallery/konec_prazdnin_2016/6.jpg",
        "/gallery/konec_prazdnin_2016/7.jpg",
        "/gallery/konec_prazdnin_2016/8.jpg",
        "/gallery/konec_prazdnin_2016/9.jpg",
    ]

    getContent(): ReactElement {
        return (
            <>
                <p>I tento rok sdružení Kotržina uspořádalo ukončení prázdnin, které se konalo dne 27. 8. v parku pod kulturním
                    domem. Jak se to povedlo můžete sledovat na fotkách a videích níže
                </p>

                <Video src={"https://www.youtube.com/embed/SoYpw94O8TM"} title={"Odhalení orloje:"}/>
                <Video src={"https://player.vimeo.com/video/180525559"} title={"Video od parašutistů:"}/>

                <Gallery srcs={this.gallery}/>

            </>
        )
    }

    getPublishDate(): Date {
        return new Date(2016, 9, 27)
    }

}
