module.exports = {
    plugins: ["prettier"],
    extends: ["eslint:recommended", "plugin:prettier/recommended", "plugin:unicorn/recommended"],
    env: {
        node: true
    },
    ignorePatterns: ["**/*.js"],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        project: "tsconfig.json",
        tsconfigRootDir: __dirname,
        sourceType: "module"
    },
    rules: {
        "no-unused-vars": "off",
        "unicorn/no-null": "off",
        "unicorn/text-encoding-identifier-case": "off",
        "unicorn/filename-case": "off",
        "unicorn/prevent-abbreviations": [
            "warn",
            {
                replacements: {
                    args: false,
                    props: false
                }
            }
        ]
    }
};
