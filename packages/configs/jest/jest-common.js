module.exports = {
    preset: "ts-jest",
    resetMocks: true,
    passWithNoTests: true,
    testEnvironment: "jsdom",
    setupFilesAfterEnv: ["@testing-library/jest-dom"],
    transform: {
        "\\.m?js$": "babel-jest"
    },
    moduleDirectories: ["node_modules"],
    moduleFileExtensions: ["js", "jsx", "json", "ts", "tsx"]
};
