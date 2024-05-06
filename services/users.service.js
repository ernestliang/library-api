const dbConn = require("../utilities/dbConn.js");
const getSql = "SELECT * FROM users";
const insSql = "INSERT INTO users (name, role_id, email) VALUES (?, ?, ?)";
const updSql = "UPDATE users SET name = ?, role_id = ?, email = ? WHERE id = ?";
const delSql = "DELETE FROM users WHERE ID = ?";

const usersService = {
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
        
        await dbConn.execute(`${insSql}`, [model.userName, model.roleId, model.userEmail])
            .then(result => {
                res.json(result[0].changedRows)
            })
            .catch(err => {
                res.status(500).json(err.message)
            })
    },
    update: async function(req, res, next) {
        await dbConn.execute(`${updSql}`, [model.userName, model.roleId, model.userEmail, model.userId])
            .then(result => {
                res.json(result[0].changedRows)
            })
            .catch(err => {
                res.status(500).json(err.message)
            })
    },
    delete: async function(req, res, next) {
        await dbConn.execute(`${delSql}`, [model.userId])
            .then(result => {
                res.json(result[0].changedRows)
            })
            .catch(err => {
                res.status(500).json(err.message)
            })
    }
}

module.exports = usersService;