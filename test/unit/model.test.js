const BookModels = require('../../server/src/models/book.js');

beforeEach(async () => {
    await BookModels.Book.sync({ force: true });
});

test('Crear libro', async () => {
    const bookData = {
        title: 'El Aleph',
        synopsis:
            'Este volumen reúne dieciocho relatos de Jorge Luis Borges, entre ellos quizá los más elogiados y repetidamente citados. Tanto «El inmortal» como «Los teólogos», «Deutsches Requiem» y «La espera» muestran las posibilidades expresivas de la «estética de la inteligencia» borgiana, inimitable fusión de mentalidad matemática, profundidad metafísica y captación poética del mundo.',
        year: 1949,
        publisher: 'Editorial Losada',
        isbn: '9788499089515',
        genres: ['Cuentos', 'Fantástico'],
        authors: ['Jorge Luis Borges'],
        country:'argentina',
        cover: '/assets/el-aleph.jpg',
    };

    // Creamos el libro
    const book = await BookModels.create(bookData);

    expect(book.title).toBe(bookData.title);
    expect(book.description).toBe(bookData.description);
    expect(book.year).toBe(bookData.year);
});

test('Crear libro sin título', async () => {
    const bookData = {
        synopsis:
            'Straight from the programming trenches, The Pragmatic Programmer cuts through the increasing specialization and technicalities of modern software development to examine the core process--taking a requirement and producing working, maintainable code that delights its users. It covers topics ranging from personal responsibility and career development to architectural techniques for keeping your code flexible and easy to adapt and reuse.',
        year: 1999,
        publisher: 'Addison-Wesley Professional',
        isbn: '9780201616224',
        genres: ['Educación', 'Tecnología', 'Programación'],
        authors: ['David Thomas', 'Andrew Hunt'],
        country:'argentina',
        cover: '/assets/pragmatic-programmer.jpg',
    };

    try {
        await BookModels.create(bookData);
    } catch (e) {
        expect(e.name).toBe('SequelizeValidationError');
    }
});

test('Obtener un libro', async () => {
    const bookData = {
        title: 'The Pragmatic Programmer',
        synopsis:
            'Straight from the programming trenches, The Pragmatic Programmer cuts through the increasing specialization and technicalities of modern software development to examine the core process--taking a requirement and producing working, maintainable code that delights its users. It covers topics ranging from personal responsibility and career development to architectural techniques for keeping your code flexible and easy to adapt and reuse.',
        year: 1999,
        publisher: 'Addison-Wesley Professional',
        isbn: '9780201616224',
        genres: ['Educación', 'Tecnología', 'Programación'],
        authors: ['David Thomas', 'Andrew Hunt'],
        country:'argentina',
        cover: '/assets/pragmatic-programmer.jpg',
    };

    // Creamos el libro
    const book = await BookModels.create(bookData);

    // Obtenemos el libro
    const receivedBook = await BookModels.get(1);

    expect(book.id).toBe(receivedBook.id);
    expect(book.title).toBe(receivedBook.title);
});

test('Obtener un libro inexistente', async () => {
    const bookData = {
        title: 'The Pragmatic Programmer',
        synopsis:
            'Straight from the programming trenches, The Pragmatic Programmer cuts through the increasing specialization and technicalities of modern software development to examine the core process--taking a requirement and producing working, maintainable code that delights its users. It covers topics ranging from personal responsibility and career development to architectural techniques for keeping your code flexible and easy to adapt and reuse.',
        year: 1999,
        publisher: 'Addison-Wesley Professional',
        isbn: '9780201616224',
        genres: ['Educación', 'Tecnología', 'Programación'],
        authors: ['David Thomas', 'Andrew Hunt'],
        country:'argentina',
        cover: '/assets/pragmatic-programmer.jpg',
    };

    // Creamos el libro
    await BookModels.create(bookData);

    // Obtenemos el libro
    const noBook = await BookModels.get(2);

    expect(noBook).toBe(null);
});

test('Obtener todos los libros', async () => {
    const firstBookData = {
        title: 'The Pragmatic Programmer',
        synopsis:
            'Straight from the programming trenches, The Pragmatic Programmer cuts through the increasing specialization and technicalities of modern software development to examine the core process--taking a requirement and producing working, maintainable code that delights its users. It covers topics ranging from personal responsibility and career development to architectural techniques for keeping your code flexible and easy to adapt and reuse.',
        year: 1999,
        publisher: 'Addison-Wesley Professional',
        isbn: '9780201616224',
        genres: ['Educación', 'Tecnología', 'Programación'],
        authors: ['David Thomas', 'Andrew Hunt'],
        country:'argentina',
        cover: '/assets/pragmatic-programmer.jpg',
    };

    const secondBookData = {
        title: 'El Aleph',
        synopsis:
            'Este volumen reúne dieciocho relatos de Jorge Luis Borges, entre ellos quizá los más elogiados y repetidamente citados. Tanto «El inmortal» como «Los teólogos», «Deutsches Requiem» y «La espera» muestran las posibilidades expresivas de la «estética de la inteligencia» borgiana, inimitable fusión de mentalidad matemática, profundidad metafísica y captación poética del mundo.',
        year: 1949,
        publisher: 'Editorial Losada',
        isbn: '9788499089515',
        genres: ['Cuentos', 'Fantástico'],
        authors: ['Jorge Luis Borges'],
        country:'argentina',
        cover: '/assets/el-aleph.jpg',
    };

    // Creamos los libros
    const firstBook = await BookModels.create(firstBookData);
    const secondBook = await BookModels.create(secondBookData);

    // Obtenemos los libros
    const receivedBooks = await BookModels.getAll();

    expect(receivedBooks.length).toBe(2);
    expect(firstBook.id).toBe(receivedBooks[0].id);
    expect(secondBook.id).toBe(receivedBooks[1].id);
});

test('Buscar libros', async () => {
    const firstBookData = {
        title: 'The Pragmatic Programmer',
        synopsis:
            'Straight from the programming trenches, The Pragmatic Programmer cuts through the increasing specialization and technicalities of modern software development to examine the core process--taking a requirement and producing working, maintainable code that delights its users. It covers topics ranging from personal responsibility and career development to architectural techniques for keeping your code flexible and easy to adapt and reuse.',
        year: 1999,
        publisher: 'Addison-Wesley Professional',
        isbn: '9780201616224',
        genres: ['Educación', 'Tecnología', 'Programación'],
        authors: ['David Thomas', 'Andrew Hunt'],
        cover: '/assets/pragmatic-programmer.jpg',
        country:'argentina',
    };

    const secondBookData = {
        title: 'El Aleph',
        synopsis:
            'Este volumen reúne dieciocho relatos de Jorge Luis Borges, entre ellos quizá los más elogiados y repetidamente citados. Tanto «El inmortal» como «Los teólogos», «Deutsches Requiem» y «La espera» muestran las posibilidades expresivas de la «estética de la inteligencia» borgiana, inimitable fusión de mentalidad matemática, profundidad metafísica y captación poética del mundo.',
        year: 1949,
        publisher: 'Editorial Losada',
        isbn: '9788499089515',
        genres: ['Cuentos', 'Fantástico'],
        authors: ['Jorge Luis Borges'],
        country:'argentina',
        cover: '/assets/el-aleph.jpg',
    };

    // Creamos los libros
    const firstBook = await BookModels.create(firstBookData);
    await BookModels.create(secondBookData);

    // Obtenemos los libros filtrados
    const filterBook = await BookModels.getAll('pragmatic');

    expect(filterBook.length).toBe(1);
    expect(firstBook.id).toBe(filterBook[0].id);
});

test('Buscar libros sin resultado', async () => {
    const firstBookData = {
        title: 'The Pragmatic Programmer',
        synopsis:
            'Straight from the programming trenches, The Pragmatic Programmer cuts through the increasing specialization and technicalities of modern software development to examine the core process--taking a requirement and producing working, maintainable code that delights its users. It covers topics ranging from personal responsibility and career development to architectural techniques for keeping your code flexible and easy to adapt and reuse.',
        year: 1999,
        publisher: 'Addison-Wesley Professional',
        isbn: '9780201616224',
        genres: ['Educación', 'Tecnología', 'Programación'],
        authors: ['David Thomas', 'Andrew Hunt'],
        country:'argentina',
        cover: '/assets/pragmatic-programmer.jpg',
    };

    const secondBookData = {
        title: 'El Aleph',
        synopsis:
            'Este volumen reúne dieciocho relatos de Jorge Luis Borges, entre ellos quizá los más elogiados y repetidamente citados. Tanto «El inmortal» como «Los teólogos», «Deutsches Requiem» y «La espera» muestran las posibilidades expresivas de la «estética de la inteligencia» borgiana, inimitable fusión de mentalidad matemática, profundidad metafísica y captación poética del mundo.',
        year: 1949,
        publisher: 'Editorial Losada',
        isbn: '9788499089515',
        genres: ['Cuentos', 'Fantástico'],
        authors: ['Jorge Luis Borges'],
        country:'argentina',
        cover: '/assets/el-aleph.jpg',
    };

    // Creamos los libros
    await BookModels.create(firstBookData);
    await BookModels.create(secondBookData);

    // Obtenemos los libros filtrados
    const filterEmpty = await BookModels.getAll('something');

    expect(filterEmpty.length).toBe(0);
});

test('Buscar libros con varios resultados', async () => {
    const firstBookData = {
        title: 'The Pragmatic Programmer',
        synopsis:
            'Straight from the programming trenches, The Pragmatic Programmer cuts through the increasing specialization and technicalities of modern software development to examine the core process--taking a requirement and producing working, maintainable code that delights its users. It covers topics ranging from personal responsibility and career development to architectural techniques for keeping your code flexible and easy to adapt and reuse.',
        year: 1999,
        publisher: 'Addison-Wesley Professional',
        isbn: '9780201616224',
        genres: ['Educación', 'Tecnología', 'Programación'],
        authors: ['David Thomas', 'Andrew Hunt'],
        country:'argentina',
        cover: '/assets/pragmatic-programmer.jpg',
    };

    const secondBookData = {
        title: 'El Aleph',
        synopsis:
            'Este volumen reúne dieciocho relatos de Jorge Luis Borges, entre ellos quizá los más elogiados y repetidamente citados. Tanto «El inmortal» como «Los teólogos», «Deutsches Requiem» y «La espera» muestran las posibilidades expresivas de la «estética de la inteligencia» borgiana, inimitable fusión de mentalidad matemática, profundidad metafísica y captación poética del mundo.',
        year: 1949,
        publisher: 'Editorial Losada',
        isbn: '9788499089515',
        genres: ['Cuentos', 'Fantástico'],
        authors: ['Jorge Luis Borges'],
        cover: '/assets/el-aleph.jpg',
        country:'argentina',
    };

    // Creamos los libros
    await BookModels.create(firstBookData);
    await BookModels.create(secondBookData);

    // Obtenemos los libros filtrados
    const filterBooks = await BookModels.getAll('978');

    expect(filterBooks.length).toBe(2);
});

test('Agregar un libro a la lista de lectura', async () => {
    const bookData = {
        title: 'The Pragmatic Programmer',
        synopsis:
            'Straight from the programming trenches, The Pragmatic Programmer cuts through the increasing specialization and technicalities of modern software development to examine the core process--taking a requirement and producing working, maintainable code that delights its users. It covers topics ranging from personal responsibility and career development to architectural techniques for keeping your code flexible and easy to adapt and reuse.',
        year: 1999,
        publisher: 'Addison-Wesley Professional',
        isbn: '9780201616224',
        genres: ['Educación', 'Tecnología', 'Programación'],
        authors: ['David Thomas', 'Andrew Hunt'],
        country:'argentina',
        cover: '/assets/pragmatic-programmer.jpg',
    };

    // Creamos el libro
    const book = await BookModels.create(bookData);

    // Verificamos que el estado sea AVAILABLE
    expect(book.status).toBe(BookModels.status.AVAILABLE);

    // Agregamos a la lista de lectura y obtenemos el libro
    const receivedBook = await BookModels.start(1);

    expect(book.id).toBe(receivedBook.id);

    // Verificamos que el estado sea READING
    expect(receivedBook.status).toBe(BookModels.status.READING);
});

test('Agregar un libro inexistente a la lista de lectura', async () => {
    const bookData = {
        title: 'The Pragmatic Programmer',
        synopsis:
            'Straight from the programming trenches, The Pragmatic Programmer cuts through the increasing specialization and technicalities of modern software development to examine the core process--taking a requirement and producing working, maintainable code that delights its users. It covers topics ranging from personal responsibility and career development to architectural techniques for keeping your code flexible and easy to adapt and reuse.',
        year: 1999,
        publisher: 'Addison-Wesley Professional',
        isbn: '9780201616224',
        genres: ['Educación', 'Tecnología', 'Programación'],
        authors: ['David Thomas', 'Andrew Hunt'],
        country:'argentina',
        cover: '/assets/pragmatic-programmer.jpg',
    };

    // Creamos el libro
    const book = await BookModels.create(bookData);

    // Verificamos que el estado sea AVAILABLE
    expect(book.status).toBe(BookModels.status.AVAILABLE);

    // Agregamos a la lista de lectura y obtenemos el libro
    const receivedBook = await BookModels.start(2);

    expect(receivedBook).toBe(null);
});

test('Obtener libros de la lista de lectura', async () => {
    const bookData = {
        title: 'The Pragmatic Programmer',
        synopsis:
            'Straight from the programming trenches, The Pragmatic Programmer cuts through the increasing specialization and technicalities of modern software development to examine the core process--taking a requirement and producing working, maintainable code that delights its users. It covers topics ranging from personal responsibility and career development to architectural techniques for keeping your code flexible and easy to adapt and reuse.',
        year: 1999,
        publisher: 'Addison-Wesley Professional',
        isbn: '9780201616224',
        genres: ['Educación', 'Tecnología', 'Programación'],
        authors: ['David Thomas', 'Andrew Hunt'],
        country:'argentina',
        cover: '/assets/pragmatic-programmer.jpg',
    };

    // Creamos el libro
    const book = await BookModels.create(bookData);

    // Agregamos a la lista de lectura
    await BookModels.start(1);

    // Obtenemos los libros filtrados
    const filterBook = await BookModels.getAll(null, BookModels.status.READING);

    expect(filterBook.length).toBe(1);
    expect(book.id).toBe(filterBook[0].id);

    // Verificamos que el estado sea READING
    expect(filterBook[0].status).toBe(BookModels.status.READING);
});

test('Obtener lista de lectura vacía', async () => {
    const bookData = {
        title: 'The Pragmatic Programmer',
        synopsis:
            'Straight from the programming trenches, The Pragmatic Programmer cuts through the increasing specialization and technicalities of modern software development to examine the core process--taking a requirement and producing working, maintainable code that delights its users. It covers topics ranging from personal responsibility and career development to architectural techniques for keeping your code flexible and easy to adapt and reuse.',
        year: 1999,
        publisher: 'Addison-Wesley Professional',
        isbn: '9780201616224',
        genres: ['Educación', 'Tecnología', 'Programación'],
        authors: ['David Thomas', 'Andrew Hunt'],
        country:'argentina',
        cover: '/assets/pragmatic-programmer.jpg',
    };

    // Creamos el libro
    await BookModels.create(bookData);

    // Obtenemos los libros filtrados
    const filterBook = await BookModels.getAll(null, BookModels.status.READING);

    // Verificamos que la cantidad de libros sea 0
    expect(filterBook.length).toBe(0);
});

test('Poner disponible un libro nuevamente', async () => {
    const bookData = {
        title: 'The Pragmatic Programmer',
        synopsis:
            'Straight from the programming trenches, The Pragmatic Programmer cuts through the increasing specialization and technicalities of modern software development to examine the core process--taking a requirement and producing working, maintainable code that delights its users. It covers topics ranging from personal responsibility and career development to architectural techniques for keeping your code flexible and easy to adapt and reuse.',
        year: 1999,
        publisher: 'Addison-Wesley Professional',
        isbn: '9780201616224',
        genres: ['Educación', 'Tecnología', 'Programación'],
        authors: ['David Thomas', 'Andrew Hunt'],
        cover: '/assets/pragmatic-programmer.jpg',
        country:'argentina',
        status: BookModels.status.READING,
    };

    // Creamos el libro
    const book = await BookModels.create(bookData);

    // Ponemos disponible y obtenemos el libro
    const receivedBook = await BookModels.makeAvailable(1);

    expect(book.id).toBe(receivedBook.id);

    // Verificamos que el estado sea AVAILABLE
    expect(receivedBook.status).toBe(BookModels.status.AVAILABLE);
});

test('Poner disponible un libro en estado terminado', async () => {
    const bookData = {
        title: 'The Pragmatic Programmer',
        synopsis:
            'Straight from the programming trenches, The Pragmatic Programmer cuts through the increasing specialization and technicalities of modern software development to examine the core process--taking a requirement and producing working, maintainable code that delights its users. It covers topics ranging from personal responsibility and career development to architectural techniques for keeping your code flexible and easy to adapt and reuse.',
        year: 1999,
        publisher: 'Addison-Wesley Professional',
        isbn: '9780201616224',
        genres: ['Educación', 'Tecnología', 'Programación'],
        authors: ['David Thomas', 'Andrew Hunt'],
        cover: '/assets/pragmatic-programmer.jpg',
        country:'argentina',
        status: BookModels.status.FINISHED,
    };

    // Creamos el libro
    await BookModels.create(bookData);

    // Ponemos disponible y obtenemos el libro
    const receivedBook = await BookModels.makeAvailable(1);

    // Verificamos que el estado del libro no haya cambiado
    expect(receivedBook.status).toBe(BookModels.status.FINISHED);
});

test('Finalizar un libro', async () => {
    const bookData = {
        title: 'The Pragmatic Programmer',
        synopsis:
            'Straight from the programming trenches, The Pragmatic Programmer cuts through the increasing specialization and technicalities of modern software development to examine the core process--taking a requirement and producing working, maintainable code that delights its users. It covers topics ranging from personal responsibility and career development to architectural techniques for keeping your code flexible and easy to adapt and reuse.',
        year: 1999,
        publisher: 'Addison-Wesley Professional',
        isbn: '9780201616224',
        genres: ['Educación', 'Tecnología', 'Programación'],
        authors: ['David Thomas', 'Andrew Hunt'],
        cover: '/assets/pragmatic-programmer.jpg',
        country:'argentina',
        status: BookModels.status.READING,
    };

    // Creamos el libro
    const book = await BookModels.create(bookData);

    // Finalizamos y obtenemos el libro
    const receivedBook = await BookModels.finish(1);

    expect(book.id).toBe(receivedBook.id);

    // Verificamos que el estado sea FINISHED
    expect(receivedBook.status).toBe(BookModels.status.FINISHED);
});

test('Finalizar un libro en estado disponible', async () => {
    const bookData = {
        title: 'The Pragmatic Programmer',
        synopsis:
            'Straight from the programming trenches, The Pragmatic Programmer cuts through the increasing specialization and technicalities of modern software development to examine the core process--taking a requirement and producing working, maintainable code that delights its users. It covers topics ranging from personal responsibility and career development to architectural techniques for keeping your code flexible and easy to adapt and reuse.',
        year: 1999,
        publisher: 'Addison-Wesley Professional',
        isbn: '9780201616224',
        genres: ['Educación', 'Tecnología', 'Programación'],
        authors: ['David Thomas', 'Andrew Hunt'],
        cover: '/assets/pragmatic-programmer.jpg',
        country:'argentina',
    };

    // Creamos el libro
    await BookModels.create(bookData);

    // Finalizamos y obtenemos el libro
    const receivedBook = await BookModels.finish(1);

    // Verificamos que el estado del libro no haya cambiado
    expect(receivedBook.status).toBe(BookModels.status.AVAILABLE);
});
