const BookModel = require('./book.js');

async function createTables() {
    return BookModel.Book.sync();
}

async function dropTables() {
    BookModel.Book.destroy({
        where: {},
    });
}

module.exports = {
    createTables,
    dropTables,
};
