module.exports = {
    ...require("@cool-stack/configs/jest/jest-common"),
    rootDir: "./",
    /**
     * Jest doesn't transform node_modules by default,
     * so one needs to modify transformIgnorePatterns
     * and include all modules to be transformed from ESM to CJS.
     */
    transformIgnorePatterns: []
};
