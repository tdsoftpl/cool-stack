import React from "react";
import {
    Links,
    LiveReload,
    Meta,
    Outlet,
    Scripts,
    ScrollRestoration,
    useCatch
} from "@remix-run/react";
import type {MetaFunction, LinksFunction, ErrorBoundaryComponent} from "@remix-run/node";
import type {CatchBoundaryComponent} from "@remix-run/react/dist/routeModules";

import tailwindStylesheetUrl from "./styles/style.css";

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
                                        src="/_static/images/cool-stack-cover.png"
                                        alt="Cool-Stack Cover Image"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-b from-sky-400 to-sky-900 mix-blend-multiply" />
                                </div>
                                <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
                                    <h1 className="text-center text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                                        <span className="block text-white">Cool-Stack 🧊</span>
                                        <span className="block text-sky-300">
                                            template repository
                                        </span>
                                    </h1>
                                    <p className="mx-auto mt-6 max-w-lg text-center text-xl text-sky-100 sm:max-w-xl">
                                        Develop your next page using{" "}
                                        <a
                                            target="_blank"
                                            rel="noreferrer"
                                            href="https://remix.run/"
                                            className="cursor-pointer text-sky-400 hover:underline"
                                        >
                                            Remix.run
                                        </a>
                                        <span> and </span>
                                        <a
                                            target="_blank"
                                            rel="noreferrer"
                                            href="https://directus.io/"
                                            className="cursor-pointer text-sky-400 hover:underline"
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
            </body>
        </html>
    );
};

export const CatchBoundary: CatchBoundaryComponent = () => {
    const caught = useCatch();

    return (
        <html>
            <head>
                <title>Oops!</title>
                <Meta />
                <Links />
            </head>
            <body className="flex min-h-screen w-screen justify-center p-8">
                <span>
                    CatchBoundary: <code className="bg-red-100 p-2">{caught.data}</code>
                </span>
                <Scripts />
            </body>
        </html>
    );
};

export const ErrorBoundary: ErrorBoundaryComponent = ({error}) => {
    return (
        <html>
            <head>
                <title>Oh no! Something went wrong...</title>
                <Meta />
                <Links />
                <meta httpEquiv="refresh" content="5" />
            </head>
            <body className="flex min-h-screen w-screen justify-center p-8">
                <span>
                    ErrorBoundary: <code className="bg-red-100 p-2">{error.toString()}</code>
                </span>
                <Scripts />
            </body>
        </html>
    );
};

export default App;
