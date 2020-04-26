module.exports = {
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
    },
    env: {
        browser: true,
        node: true,
        es6: true,
    },
    overrides: [
        {
            files: ['**/*.test.js'],
            globals: {
                after: true,
                before: true,
            },
            env: {
                jest: true,
            },
            plugins: ['jest'],
        },
    ],
    ignorePatterns: ['client/js/partials/*.js'],
    extends: ['eslint:recommended'],
};
