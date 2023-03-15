import React from "react";
import invariant from "tiny-invariant";
import {useLoaderData} from "@remix-run/react";
import {json} from "@remix-run/node";
import type {LoaderFunction} from "@remix-run/node";
import {Collection, isArticle, isUser, Status} from "@cool-stack/api";
import type {Article, User} from "@cool-stack/api";
import {Avatar} from "@cool-stack/ui";
import {$api} from "~/api";

interface LoaderData {
    article: Article & {author: User};
}

export const loader: LoaderFunction = async ({params}) => {
    const articleResponse = await $api.items(Collection.Articles).readByQuery({
        fields: ["*", "author.id" as "author", "author.email" as "author"],
        filter: {
            status: {
                _eq: Status.Published
            },
            slug: {
                _eq: params.slug
            }
        }
    });

    const article = articleResponse.data?.[0];

    if (!article) {
        throw new Response("Article Not Found", {
            status: 404
        });
    }

    invariant(isArticle(article) && isUser(article.author), "Error while loading article data");

    return json<LoaderData>({
        article: article as LoaderData["article"]
    });
};

export default function ArticlePost() {
    const {article} = useLoaderData<LoaderData>();

    return (
        <div className="mx-auto w-full bg-gray-100">
            <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 sm:py-6 lg:py-8 lg:px-8">
                <div className="flex flex-col">
                    <p className="text-base font-normal leading-6 text-gray-400">
                        {new Date(article.date_updated || article.date_created).toLocaleDateString(
                            "en-US"
                        )}
                    </p>
                    <h1 className="mt-5 text-4xl font-extrabold leading-10 text-gray-900">
                        {article.title}
                    </h1>

                    <div className="mt-6 flex items-center gap-3">
                        <Avatar nickname={article.author.email.split("@")[0]} />
                        <div className="flex flex-col">
                            <span className="text-base font-medium leading-6 text-gray-900">
                                {article.author.email}
                            </span>
                        </div>
                    </div>
                </div>

                <div
                    className="prose mt-8 max-w-none"
                    dangerouslySetInnerHTML={{__html: article.content}}
                />
            </div>
        </div>
    );
}
