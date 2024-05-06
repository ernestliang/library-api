const dbConn = require('../utilities/dbConn.js');
const getSql = "SELECT * FROM books";
const insSql = "INSERT into books (title, pub_date, author_id, status, create_date) VALUES (?, ?, ?, ?, ?, ?)";
const updSql = "UPDATE books SET title = ?, pub_date = ?, author_id = ?, status = ?, create_date = ? WHERE id = ?";
const delSql = "DELETE from books WHERE id = ?";

const booksService = {
    getAll: async function(req, res, next) {
        await dbConn.query(`${getSql}`)
            .then( ([data, fields]) => {
                res.json(data[0]);
            })
            .catch(err => {
                res.status(500).json(err.message)
            })
    },
    getById: async function(req, res, next) {
        let model = req.body;

        await dbConn.query(`${getSql} WHERE id = ?`, [model.bookId])
            .then( ([data, fields]) => {
                res.json(data[0])
            })
            .catch(err => {
                res.status(500).json(err.message)
            })
    },
    insert: async function(req, res, next) {
        let model = req.body;

        await dbConn.execute(`${insSql}`, [model.bookTitle, bookPubDate, model.bookAuthId, model.bookStatus, model.bookCreateDate])
            .then(result => {
                res.json(result[0].changedRows)
            })
            .catch(err => {
                res.status(500).json(err.message)
            })
    },
    update: async function(req, res, next) {
        let model = req.body;

        await dbConn.execute(`${updSql}`, [model.bookTitle, bookPubDate, model.bookAuthId, model.bookStatus, model.bookCreateDate, model.bookId])
            .then(result => {
                res.json(result[0].changedRows)
            })
            .catch(err => {
                res.status(500).json(err.message)
            })
    },
    delete: async function(req, res, next) {
        let model = req.body;

        await dbConn.execute(`${delSql} WHERE id = ?`, [model.bookId])
            .then(result => {
                res.json(result[0].changedRows)
            })
            .catch(err => {
                res.status(500).json(err.message)
            })
    }
}
module.exports = booksService;