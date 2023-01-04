module.exports = {
    stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
    addons: [
        "@storybook/addon-links",
        "@storybook/addon-essentials",
        "@storybook/addon-viewport",
        "@storybook/addon-interactions",
        "@storybook/addon-a11y",
        "@storybook/addon-storysource",
        "storybook-addon-designs",
        {
            name: "@storybook/addon-postcss",
            options: {
                postcssLoaderOptions: {
                    implementation: require("postcss")
                }
            }
        }
    ],
    framework: "@storybook/react"
};
