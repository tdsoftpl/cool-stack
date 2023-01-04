import type {User} from "./Users";
import {isStatus, Status} from "./Status";

export interface Article {
    id: string;
    status: Status;
    publish_date: string;
    title: string;
    body?: string;
    summary?: string;
    slug: string;
    author: string | User;
}

export function isArticle(article: any): article is Article {
    return !!(
        article &&
        typeof article === "object" &&
        typeof article.id === "string" &&
        isStatus(article.status) &&
        typeof article.publish_date === "string" &&
        typeof article.title === "string" &&
        typeof article.slug === "string" &&
        //relational fields
        "author" in article
    );
}
