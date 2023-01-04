import React from "react";
import {
    Links,
    LiveReload,
    Meta,
    Outlet,
    Scripts,
    ScrollRestoration,
    useLoaderData
} from "@remix-run/react";
import {json} from "@remix-run/node";
import type {MetaFunction, LinksFunction, LoaderFunction} from "@remix-run/node";

import packageJson from "../../package.json";
import tailwindStylesheetUrl from "./styles/style.css";

interface LoaderData {
    version: typeof packageJson.version;
}

export const loader: LoaderFunction = async () => {
    return json<LoaderData>({
        version: packageJson.version
    });
};

export const meta: MetaFunction = () => ({
    charset: "utf-8",
    title: "🧊 Cool Stack",
    viewport: "width=device-width,initial-scale=1"
});

export const links: LinksFunction = () => {
    return [
        {rel: "stylesheet", href: tailwindStylesheetUrl},
        {rel: "shortcut icon", href: "/_static/favicon.ico"}
    ];
};

const App = () => {
    const {version} = useLoaderData<LoaderData>();

    return (
        <html lang="en">
            <head>
                <Meta />
                <Links />
            </head>
            <body className="mt-0 flex flex-col sm:mt-8 md:mt-16">
                {/* Hero section */}
                <main>
                    <div className="relative">
                        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gray-100" />
                        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                            <div className="relative shadow-xl sm:overflow-hidden sm:rounded-2xl">
                                <div className="absolute inset-0">
                                    <img
                                        className="h-full w-full object-cover blur-sm"
                                        src="/_static/images/cool-stack-cover-image.png"
                                        alt="Cool-Stack cover image"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-b from-pink-400 to-fuchsia-900 mix-blend-multiply" />
                                </div>
                                <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
                                    <h1 className="text-center text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                                        <span className="block text-white">🧊 Cool-Stack</span>
                                        <span className="block text-purple-300">
                                            template repository
                                        </span>
                                    </h1>
                                    <p className="mx-auto mt-6 max-w-lg text-center text-xl text-purple-100 sm:max-w-xl">
                                        Develop amazing projects using the newest technology stack
                                        with{" "}
                                        <a
                                            target="_blank"
                                            rel="noreferrer"
                                            href="https://remix.run/"
                                            className="cursor-pointer text-purple-400 hover:underline"
                                        >
                                            Remix.run
                                        </a>
                                        <span> and </span>
                                        <a
                                            target="_blank"
                                            rel="noreferrer"
                                            href="https://directus.io/"
                                            className="cursor-pointer text-purple-400 hover:underline"
                                        >
                                            Directus.io
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>

                <Outlet />
                <ScrollRestoration />
                <Scripts />
                <LiveReload port={3334} />

                {/* Footer */}
                <footer className="bg-gray-800">
                    <div className="mx-auto max-w-7xl py-6 px-2 sm:px-3 md:flex md:items-center md:justify-center lg:px-4">
                        <p className="mt-0 text-center text-base text-white md:mt-4">
                            <span>{new Date().getFullYear()} Cool-Stack template repository </span>
                            <span title="Version">v{version}</span>
                        </p>
                    </div>
                </footer>
            </body>
        </html>
    );
};

export default App;
