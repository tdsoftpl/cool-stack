/**
 * Babel is used only in the test environment for transforming packages from esm to cjs.
 */
module.exports = {
    env: {
        test: {
            plugins: ["@babel/plugin-transform-modules-commonjs"]
        }
    }
};
