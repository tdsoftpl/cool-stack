import {Directus} from "@directus/sdk";
import type {Collections} from "@cool-stack/api";

export const $api = new Directus<Collections>(process.env.API_URL!, {
    auth: {staticToken: process.env.API_TOKEN!}
});
