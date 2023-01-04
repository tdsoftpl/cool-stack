import type {Article} from "./Articles";
import type {User} from "./Users";

export * from "./Articles";
export * from "./Users";
export * from "./Status";

export enum Collection {
    Articles = "articles",
    Users = "directus_users"
}

export type Collections = {
    [Collection.Articles]: Article;
    [Collection.Users]: User;
};
