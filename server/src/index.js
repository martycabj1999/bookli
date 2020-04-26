const path = require('path');

const morgan = require('morgan');
const express = require('express');
const bodyParser = require('body-parser');
const detectPort = require('detect-port');

const nunjucks = require('nunjucks');

// Modelos
const models = require('./models/index.js');
// Rutas
const bookRouter = require('./routes/book.js');
const viewRouter = require('./routes/view.js');

const client = path.resolve(__dirname, '..', '..', 'client');

const inTest = process.env.NODE_ENV === 'test';
const views = path.resolve(client, 'views');

async function startServer(port = process.env.SERVER_PORT) {
    port = port || (await detectPort(3000));
    await models.createTables();

    const app = express();

    !inTest && app.use(morgan('dev'));

    app.use(bodyParser.json());
    app.use(express.static(client));
    app.set('views', views);
    app.set('view engine', 'html');

    nunjucks.configure(path.resolve(client, 'views'), {
        autoescape: true,
        express: app,
    });

    // rutas de la vista
    app.use('/', viewRouter);

    // Rutas de la api
    app.use('/api/v1/books', bookRouter);

    return new Promise(function (resolve) {
        const server = app.listen(port, function () {
            !inTest &&
                console.log(`Server started on http://localhost:${port}`);

            const originalClose = server.close.bind(server);
            server.close = async () => {
                if (inTest) {
                    await models.dropTables();
                }

                return new Promise((resolveClose) => {
                    originalClose(resolveClose);
                });
            };

            resolve(server);
        });
    });
}

if (require.main === module) {
    startServer();
}

module.exports = startServer;
