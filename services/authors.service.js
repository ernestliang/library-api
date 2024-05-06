const dbConn = require("../utilities/dbConn.js");
const getSql = "SELECT * FROM authors";
const insSql = "INSERT INTO authors (name, email) VALUES (?)";
const updSql = "UPDATE authors SET name = ?, email = ? WHERE id = ?";
const delSql = "DELETE FROM authors WHERE ID = ?";

const authorsService = {
    getAll: async function(req, res, next) {
        await dbConn.query(`${getSql}`)
            .then( ([data, fields]) => {
                res.json(data[0])
            })
            .catch(err => {
                res.status(500).json(err.message);
            })
    },
    insert: async function(req, res, next) {
        let model = req.body;
        
        await dbConn.execute(`${insSql}`, [model.authorName, model.authorEmail])
            .then(result => {
                res.json(result[0].changedRows)
            })
            .catch(err => {
                res.status(500).json(err.message)
            })
    },
    update: async function(req, res, next) {
        await dbConn.execute(`${updSql}`, [model.authorName, model.authorEmail, model.authorId])
            .then(result => {
                res.json(result[0].changedRows)
            })
            .catch(err => {
                res.status(500).json(err.message)
            })
    },
    delete: async function(req, res, next) {
        await dbConn.execute(`${delSql}`, [model.authorId])
            .then(result => {
                res.json(result[0].changedRows)
            })
            .catch(err => {
                res.status(500).json(err.message)
            })
    }
}

module.exports = authorsService;