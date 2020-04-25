const BookModel = require('./models/book.js')

const initBooks = () => {
    BookModel.Book.sync({ force: true })
        .then(() =>
            BookModel.Book.create({
                title: 'El Aleph',
                synopsis: 'Este volumen reúne dieciocho relatos de Jorge Luis Borges, entre ellos quizá los más elogiados y repetidamente citados. Tanto «El inmortal» como «Los teólogos», «Deutsches Requiem» y «La espera» muestran las posibilidades expresivas de la «estética de la inteligencia» borgiana, inimitable fusión de mentalidad matemática, profundidad metafísica y captación poética del mundo.',
                year: 1949,
                publisher: 'Editorial Losada',
                isbn: '9788499089515',
                genres: ['Cuentos', 'Fantástico'],
                authors: ['Jorge Luis Borges'],
                country: 'Argentina',
                cover: '/assets/el-aleph.jpg'
            })
        )
        .then(() =>
            BookModel.Book.create({
                title: 'Operación Masacre',
                synopsis: 'En el contexto del fallido intento de la Revolución de Valle de 1956 contra el régimen militar argentino se produjo una masacre clandestina de opositores. Tras escuchar el testimonio de uno de los supervivientes, Rodolfo Walsh se lanzó a una febril investigación que le obligó a adoptar una identidad falsa.',
                year: 1958,
                publisher: 'Ediciones Sigla',
                isbn: '9789505153527',
                genres: ['No ficción'],
                authors: ['Rodolfo Walsh'],
                country: 'Argentina',
                cover: '/assets/operacion-masacre.jpg'
            })
        )
        .then(() =>
            BookModel.Book.create({
                title: 'The Pragmatic Programmer',
                synopsis: 'Straight from the programming trenches, The Pragmatic Programmer cuts through the increasing specialization and technicalities of modern software development to examine the core process--taking a requirement and producing working, maintainable code that delights its users. It covers topics ranging from personal responsibility and career development to architectural techniques for keeping your code flexible and easy to adapt and reuse.',
                year: 1999,
                publisher: 'Addison-Wesley Professional',
                isbn: '9780201616224',
                genres: ['Educación', 'Tecnología', 'Programación'],
                authors: ['David Thomas', 'Andrew Hunt'],
                country: 'Estados Unidos',
                cover: '/assets/pragmatic-programmer.jpg'
            })
        )
        .then(() =>
            BookModel.Book.create({
                title: 'Code Complete: A Practical Handbook of Software Construction',
                synopsis: 'Widely considered one of the best practical guides to programming, Steve McConnell’s original CODE COMPLETE has been helping developers write better software for more than a decade. Now this classic book has been fully updated and revised with leading-edge practices—and hundreds of new code samples—illustrating the art and science of software construction. Capturing the body of knowledge available from research, academia, and everyday commercial practice, McConnell synthesizes the most effective',
                year: 2004,
                publisher: 'Microsoft Press',
                isbn: '9780735619678',
                genres: ['Educación', 'Tecnología', 'Programación'],
                authors: ['Steve McConnell'],
                country: 'Estados Unidos',
                cover: '/assets/code-complete.jpg'
            })
        )
        .then(() =>
            BookModel.Book.create({
                title: 'The Adventures of Sherlock Holmes',
                synopsis: "Venture back in time to Victorian London to join literature's greatest detective team — the brilliant Sherlock Holmes and his devoted assistant, Dr. Watson — as they investigate a dozen of their best-known cases.",
                year: 1892,
                publisher: 'Dover Publications',
                isbn: '9780486474915',
                genres: ['Policial', 'Cuentos'],
                authors: ['Sir Arthur Conan Doyle'],
                country: 'Reino Unido',
                cover: '/assets/sherlock.jpg'
            })
        )
        .then(() =>
            BookModel.Book.create({
                title: '1984',
                synopsis: 'In 1984, London is a grim city in the totalitarian state of Oceania where Big Brother is always watching you and the Thought Police can practically read your mind. Winston Smith is a man in grave danger for the simple reason that his memory still functions. Drawn into a forbidden love affair, Winston finds the courage to join a secret revolutionary organization called The Brotherhood, dedicated to the destruction of the Party. Together with his beloved Julia, he hazards his life in a deadly match against the powers that be.',
                year: 1949,
                publisher: 'Houghton Mifflin Harcourt',
                isbn: '9781328869333',
                genres: ['Ciencia ficción', 'Novela'],
                authors: ['George Orwell'],
                country: 'Reino Unido',
                cover: '/assets/1984.jpg'
            })
        )
        .then(() =>
            BookModel.Book.create({
                title: 'The Trial',
                synopsis: 'The Trial (original German title: Der Process) is a novel written by Franz Kafka from 1914 to 1915 and published in 1925. One of his best-known works, it tells the story of a man arrested and prosecuted by a remote, inaccessible authority, with the nature of his crime revealed neither to him nor to the reader.',
                year: 1925,
                publisher: 'CreateSpace Independent Publishing Platform',
                isbn: '9781541276727',
                genres: ['Ficción distópica', 'Novela'],
                authors: ['Franz Kafka'],
                country: 'Alemania',
                cover: '/assets/trial.jpg'
            })
        )
        .then(() =>
            BookModel.Book.create({
                title: 'Fahrenheit 451',
                synopsis: 'Guy Montag is a fireman. His job is to destroy the most illegal of commodities, the printed book, along with the houses in which they are hidden. Montag never questions the destruction and ruin his actions produce, returning each day to his bland life and wife, Mildred, who spends all day with her television “family.” But when he meets an eccentric young neighbor, Clarisse, who introduces him to a past where people didn’t live in fear and to a present where one sees the world through the ideas in books instead of the mindless chatter of television, Montag begins to question everything he has ever known.',
                year: 1953,
                publisher: 'Simon & Schuster',
                isbn: '9781451673319',
                genres: ['Ciencia ficción', 'Novela'],
                authors: ['Ray Bradbury'],
                country: 'Estados Unidos',
                cover: '/assets/fahrenheit.jpg'
            })
        )
        .then(() =>
            BookModel.Book.create({
                title: 'The Importance of Being Earnest',
                synopsis: "Play in three acts by Oscar Wilde, performed in 1895 and published in 1899. A satire of Victorian social hypocrisy, the witty play is considered Wilde's greatest dramatic achievement.",
                year: 1895,
                publisher: 'Dover Publications',
                isbn: '9780486264783',
                genres: ['Comedia', 'Teatro'],
                authors: ['Oscar Wilde'],
                country: 'Inglaterra',
                cover: '/assets/earnest.jpg'
            })
        )
        .then(() =>
            BookModel.Book.create({
                title: 'Animal Farm',
                synopsis: 'A farm is taken over by its overworked, mistreated animals. With flaming idealism and stirring slogans, they set out to create a paradise of progress, justice, and equality. Thus the stage is set for one of the most telling satiric fables ever penned—a razor-edged fairy tale for grown-ups that records the evolution from revolution against tyranny to a totalitarianism just as terrible.',
                year: 1945,
                publisher: 'Signet',
                isbn: '9780451526342',
                genres: ['Sátira', 'Novela'],
                authors: ['George Orwell'],
                country: 'Inglaterra',
                cover: '/assets/animal-farm.jpg'
            })
        )
}

initBooks()