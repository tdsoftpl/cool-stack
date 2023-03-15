module.exports = {
    serverBuildTarget: "arc",
    server: "./server.js",
    ignoredRouteFiles: ["**/.*"],
    cacheDirectory: "./node_modules/.cache/remix",
    serverDependenciesToBundle: [
        "@cool-stack/api", //used only for model types and it's type guards
        "@cool-stack/ui"
    ],
    appDirectory: "app",
    assetsBuildDirectory: "public/build",
    serverBuildPath: "server/index.js",
    publicPath: "/_static/build/",
    devServerPort: 3334
};
