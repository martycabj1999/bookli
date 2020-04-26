/**
 * @jest-environment jest-environment-jsdom-sixteen
 */

import bookServices from '../../client/js/book-service.js';
import * as utils from '../../client/js/utils.js';

function makeFakeJSONFetch({ success, result }) {
    return function () {
        return new Promise((resolve, reject) => {
            const fakeJSON = {
                json: () =>
                    new Promise((resolve) => {
                        setTimeout(() => {
                            resolve(result);
                        }, 10);
                    }),
            };

            setTimeout(
                () => (success ? resolve(fakeJSON) : reject(result)),
                30
            );
        });
    };
}

function makeMookNunjucks() {
    return {
        render(template) {
            return template;
        },
    };
}

// app
describe('fetch books', () => {
    test('All books', async () => {
        // fetch mock
        window.fetch = makeFakeJSONFetch({
            success: true,
            result: [{ id: 1 }],
        });

        const books = await bookServices.getAll();

        expect(Array.isArray(books)).toBe(true);
        expect(books[0].id).toBe(1);
    });

    test('Find books', async () => {
        // fetch mock
        window.fetch = makeFakeJSONFetch({
            success: true,
            result: [{ id: 1 }],
        });

        const books = await bookServices.search();

        expect(Array.isArray(books)).toBe(true);
        expect(books[0].id).toBe(1);
    });
});

describe('Utils', () => {
    beforeEach(() => {
        document.body.innerHTML = '';
    });

    test('assign', () => {
        const book = { id: 1, title: 'El aleph' };
        const result = utils.assign(book, { author: 'Borges' });

        expect(result).toStrictEqual({
            id: 1,
            title: 'El aleph',
            author: 'Borges',
        });
        expect(book).toStrictEqual(book);
    });

    test('getRefs', () => {
        const $div = document.createElement('div');
        $div.setAttribute('data-ref', 'myEl');
        document.body.appendChild($div);

        const result = utils.getRefs(document.body);

        expect(result).toStrictEqual({ myEl: $div });
    });

    test('render', () => {
        window.nunjucks = makeMookNunjucks();
        utils.render('Hello', {}, document.body);

        expect(document.body.innerHTML).toBe('Hello');
    });

    test('render with refs', () => {
        window.nunjucks = makeMookNunjucks();
        const refs = utils.render(
            '<div data-ref="myDiv"></div>',
            {},
            document.body
        );
        const div = document.body.firstElementChild;

        expect(refs).toStrictEqual({ myDiv: div });
    });
});
