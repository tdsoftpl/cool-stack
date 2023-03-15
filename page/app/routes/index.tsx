import React from "react";
import {$api} from "~/api";
import {Link, useLoaderData} from "@remix-run/react";
import {json} from "@remix-run/node";
import {Collection, isArticle} from "@cool-stack/api";
import type {Article} from "@cool-stack/api";
import type {LoaderFunction} from "@remix-run/node";

interface LoaderData {
    articles: Array<Article>;
}

export const loader: LoaderFunction = async () => {
    const articles = await $api.items(Collection.Articles).readByQuery({
        sort: ["-date_created"],
        limit: 10
    });

    return json<LoaderData>({
        articles: articles.data?.filter(isArticle) ?? []
    });
};

export default function Index() {
    const {articles} = useLoaderData<LoaderData>();

    return (
        <div className="relative overflow-hidden bg-gray-100 pt-16 pb-32">
            <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-gray-100" />
            <div className="relative">
                <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8">
                    <div className="w-full px-4 sm:max-w-xl sm:px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0">
                        <div className="mt-6">
                            <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                                Articles from Directus
                            </h2>
                            <p className="mt-4 text-base text-gray-400">
                                Lorem Ipsum is simply dummy text of the printing and typesetting
                                industry. Lorem Ipsum has been the industry's standard dummy text
                                ever since the 1500s, when an unknown printer took a galley of type
                                and scrambled it to make a type specimen book. It has survived not
                                only five centuries, but also the leap into electronic typesetting,
                                remaining essentially unchanged.
                            </p>
                        </div>
                    </div>
                    <div className="mt-12 max-w-xl sm:mt-16 lg:mt-0 lg:max-w-none">
                        <div className="flex flex-col gap-8 px-4 md:px-6 lg:relative lg:m-0 lg:h-full lg:px-0">
                            {articles.map((article) => (
                                <div key={article.id}>
                                    <p className="text-sm text-gray-400">
                                        {new Date(
                                            article.date_updated || article.date_created
                                        ).toLocaleDateString("en-US")}
                                    </p>
                                    <Link to={`/blog/${article.slug}`} className="group mt-2 block">
                                        <p className="text-xl font-semibold text-gray-900">
                                            {article.title}
                                        </p>
                                        <p className="mt-2 text-base font-semibold text-sky-600 group-hover:text-sky-500">
                                            Read full
                                        </p>
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
