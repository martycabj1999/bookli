module.exports = {
    verbose: true,
    testPathIgnorePatterns: ['test/e2e'],
    transform: {
        '^.+\\.m?js$': 'babel-jest',
    },
};
