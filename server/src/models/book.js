const Sequelize = require('sequelize')

const Op = Sequelize.Op

const db = require('../db.js')

const Book = db.define('Book', {
	// attributes
	title: {
		type: Sequelize.STRING,
		allowNull: false
	},
	synopsis: {
		type: Sequelize.STRING
	},
	year: {
		type: Sequelize.INTEGER,
		allowNull: false
	},
	publisher: {
		type: Sequelize.STRING,
		allowNull: false
	},
	isbn: {
		type: Sequelize.STRING,
		allowNull: false
	},
	genres: {
		type: Sequelize.JSON
	},
	authors: {
		type: Sequelize.JSON,
		allowNull: false
	},
	country: {
		type: Sequelize.STRING,
		allowNull: false
	},
	cover: {
		type: Sequelize.STRING
	}
}, { tableName: 'Book' })

const getAllBooks = (filter) => {
	let where = {}

	if (filter) {
		const like = {
			[Op.like]: '%' + filter + '%'
		}

		where = {
			[Op.or]: [
				{
					title: like
				},
				{
					isbn: like
				},
				{
					publisher: like
				}
			]
		}
	}

	return Book.findAll({
		attributes: {
		    exclude: ['createdAt', 'updatedAt']
		},
		where: where
	})
}

const createBook = (data) => Book.create(data)

const getBook = (id) => Book.findOne({where: {id: id}})

const BookModel = {
	Book: Book,
	getAll: getAllBooks,
	create: createBook,
	get: getBook
}

module.exports = BookModel
