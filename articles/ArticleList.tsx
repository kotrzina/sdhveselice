import {Article} from "./Article";
import {Article20200104} from "./Article20200104";
import {Article20190625} from "./Article20190625";
import {Article20190106} from "./Article20190106";
import {Article20180620} from "./Article20180620";
import {Article20180526} from "./Article20180526";
import {Article20180225} from "./Article20180225";
import {Article20180203} from "./Article20180203";
import {Article20180106} from "./Article20180106";
import {Article20171227} from "./Article20171227";
import {Article20170826} from "./Article20170826";
import {Article20170612} from "./Article20170612";
import {Article20170604} from "./Article20170604";
import {Article20170527} from "./Article20170527";
import {Article20170506} from "./Article20170506";
import {Article20170225} from "./Article20170225";
import {Article20170212} from "./Article20170212";
import {Article20170122} from "./Article20170122";
import {Article20170106} from "./Article20170106";
import {Article20160927} from "./Article20160927";
import {Article20160826} from "./Article20160826";
import {Article20160719} from "./Article20160719";
import {Article20160604} from "./Article20160604";
import {Article20160528} from "./Article20160528";
import {Article20160511} from "./Article20160511";
import {Article20160223} from "./Article20160223";
import {Article20160207} from "./Article20160207";
import {Article20160201} from "./Article20160201";
import {Article20160110} from "./Article20160110";
import {Article20151228} from "./Article20151228";
import {Article20150902} from "./Article20150902";
import {Article20150901} from "./Article20150901";
import {Article20150621} from "./Article20150621";
import {Article20150615} from "./Article20150615";
import {Article20150604} from "./Article20150604";
import {Article20150403} from "./Article20150403";
import {Article20150217} from "./Article20150217";
import {Article20150204} from "./Article20150204";
import {Article20150106} from "./Article20150106";
import {Article20141221} from "./Article20141221";
import {Article20140706} from "./Article20140706";
import {Article20140310} from "./Article20140310";
import {Article20140308} from "./Article20140308";
import {Article20130711} from "./Article20130711";
import {Article20130710} from "./Article20130710";
import {Article20130709} from "./Article20130709";
import {Article20130708} from "./Article20130708";
import {Article20130707} from "./Article20130707";
import {Article20130706} from "./Article20130706";
import {Article20130705} from "./Article20130705";
import {Article20130704} from "./Article20130704";
import {Article20130703} from "./Article20130703";
import {Article20130702} from "./Article20130702";
import {Article20130701} from "./Article20130701";
import {Article20210612} from "./Article20210612";
import {Article20220108} from "./Article20220108";
import {Article20220430} from "./Article20220430";
import {Article20230107} from "./Article20230107";
import {Article20230430} from "./Article20230430";
import {Article20231210} from "./Article20231210";
import {Article20240106} from "./Article20240106";
import {Article20240108} from "./Article20240108";
import {Article20240606} from "./Article20240606";
import {Article20240607} from "./Article20240607";
import {Article20241212} from "./Article20241212";

const ArticleList: Array<Article> = [
    // add new article here
    new Article20200104(),
    new Article20190625(),
    new Article20190106(),
    new Article20180620(),
    new Article20180526(),
    new Article20180225(),
    new Article20180203(),
    new Article20180106(),
    new Article20171227(),
    new Article20170826(),
    new Article20170612(),
    new Article20170604(),
    new Article20170527(),
    new Article20170506(),
    new Article20170225(),
    new Article20170212(),
    new Article20170122(),
    new Article20170106(),
    new Article20160927(),
    new Article20160826(),
    new Article20160719(),
    new Article20160604(),
    new Article20160528(),
    new Article20160511(),
    new Article20160223(),
    new Article20160207(),
    new Article20160201(),
    new Article20160110(),
    new Article20151228(),
    new Article20150902(),
    new Article20150901(),
    new Article20150621(),
    new Article20150615(),
    new Article20150604(),
    new Article20150403(),
    new Article20150217(),
    new Article20150204(),
    new Article20150106(),
    new Article20141221(),
    new Article20140706(),
    new Article20140310(),
    new Article20140308(),
    new Article20130711(),
    new Article20130710(),
    new Article20130709(),
    new Article20130708(),
    new Article20130707(),
    new Article20130706(),
    new Article20130705(),
    new Article20130704(),
    new Article20130703(),
    new Article20130702(),
    new Article20130701(),
    new Article20210612(),
    new Article20220108(),
    new Article20220430(),
    new Article20230107(),
    new Article20230430(),
    new Article20231210(),
    new Article20240106(),
    new Article20240108(),
    new Article20240606(),
    new Article20240607(),
    new Article20241212(),
]

/**
 * Returns articles sorted by published day
 */
export function getArticles(): Array<Article> {
    return ArticleList.sort((a, b) => a.getPublishDate() < b.getPublishDate() ? 1 : -1);
}

/**
 * Returns list of articles related with firefighters competition in Veselice
 * Basically articles published before 2013-7-11
 */
export function getRacesArticles(): Array<Article> {
    const threshold = new Date(2013, 7, 11)
    return getArticles().filter(article => {
        return article.getPublishDate() <= threshold
    })
}

/**
 * Returns one article based on slug
 * Throws error if article does not exist (should never happen)
 */
export function getArticleBySlug(slug: string): Article {

    const article = ArticleList.find(article => article.getSlug() === slug)

    if (article === undefined) {
        throw new Error("could not find article with slug `" + slug + "`")
    }

    return article
}
