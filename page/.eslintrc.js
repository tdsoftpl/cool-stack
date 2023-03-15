module.exports = {
    plugins: ["prettier"],
    extends: [
        "eslint:recommended",
        "@remix-run/eslint-config",
        "@remix-run/eslint-config/node",
        "plugin:prettier/recommended",
        "plugin:import/recommended",
        "plugin:unicorn/recommended",
        "plugin:jest-dom/recommended",
        "plugin:react/recommended",
        "plugin:react-hooks/recommended"
    ],
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
    settings: {
        react: {
            version: "detect"
        },
        "import/resolver": {
            node: {
                extensions: [".ts", ".tsx"],
                moduleDirectory: ["app", "node_modules"]
            }
        }
    },
    rules: {
        "no-unused-vars": "off",
        "@typescript-eslint/no-unused-vars": "warn",
        "react/prop-types": "off",
        "jsx-a11y/anchor-has-content": "off",
        "jsx-a11y/img-redundant-alt": "off",
        "unicorn/text-encoding-identifier-case": "off",
        "unicorn/filename-case": "off",
        "unicorn/no-null": "off",
        "unicorn/no-nested-ternary": "off",
        "unicorn/no-array-callback-reference": "off",
        "unicorn/prevent-abbreviations": [
            "warn",
            {
                replacements: {
                    args: false,
                    props: false,
                    ref: false
                }
            }
        ]
    }
};
