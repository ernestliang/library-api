const dbConn = require("../utilities/dbConn.js");
const getSql = "SELECT * FROM roles";
const insSql = "INSERT INTO roles (name) VALUES (?)";
const updSql = "UPDATE roles SET name = ? WHERE id = ?";
const delSql = "DELETE FROM roles WHERE ID = ?";

const rolesService = {
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
        
        await dbConn.execute(`${insSql}`, [model.roleName])
            .then(result => {
                res.json(result[0].changedRows)
            })
            .catch(err => {
                res.status(500).json(err.message)
            })
    },
    update: async function(req, res, next) {
        await dbConn.execute(`${updSql}`, [model.roleName, model.roleId])
            .then(result => {
                res.json(result[0].changedRows)
            })
            .catch(err => {
                res.status(500).json(err.message)
            })
    },
    delete: async function(req, res, next) {
        await dbConn.execute(`${delSql}`, [model.roleId])
            .then(result => {
                res.json(result[0].changedRows)
            })
            .catch(err => {
                res.status(500).json(err.message)
            })
    }
}

module.exports = rolesService;