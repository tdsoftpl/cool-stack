import type { User } from "./Users";
import { isStatus, Status } from "./Status";

export interface Article {
  id: number;
  status: Status;
  date_created: string;
  date_updated: null | string;
  author: string | User;
  slug: string;
  title: string;
  content: string;
}

export function isArticle(article: any): article is Article {
  return !!(
    article &&
    typeof article === "object" &&
    typeof article.id === "number" &&
    isStatus(article.status) &&
    typeof article.date_created === "string" &&
    (typeof article.date_updated === "object" || typeof article.date_updated === "string") &&
    typeof article.slug === "string" &&
    typeof article.title === "string" &&
    typeof article.content === "string" &&
    //relational fields
    "author" in article
  );
}
