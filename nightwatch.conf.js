module.exports = {
    src_folders: ['tests/e2e'],

    webdriver: {
        start_process: true,
        server_path: 'node_modules/.bin/chromedriver',
        port: 9515,
    },

    test_settings: {
        default: {
            webdriver: {
                end_session_on_fail: false,
                server_path: require('chromedriver').path,
                host: 'localhost',
                port: 9515,
            },
            desiredCapabilities: {
                browserName: 'chrome',
                chromeOptions: {
                    args: ['--incognito'],
                },
            },
        },
    },
};
