const dbConn = require("../utilities/dbConn.js");
const getSql = "SELECT * FROM access_logs";
const insSql = "INSERT INTO access_logs (operator_id) VALUES (?)";
const updSql = "UPDATE access_logs SET operator_id = ? WHERE id = ?";
const delSql = "DELETE FROM access_logs WHERE ID = ?";

const accessLogsService = {
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
        
        await dbConn.execute(`${insSql}`, [model.operatorId])
            .then(result => {
                res.json(result[0].changedRows)
            })
            .catch(err => {
                res.status(500).json(err.message)
            })
    },
    update: async function(req, res, next) {
        await dbConn.execute(`${updSql}`, [model.operatorId, model.logId])
            .then(result => {
                res.json(result[0].changedRows)
            })
            .catch(err => {
                res.status(500).json(err.message)
            })
    },
    delete: async function(req, res, next) {
        await dbConn.execute(`${delSql}`, [model.logId])
            .then(result => {
                res.json(result[0].changedRows)
            })
            .catch(err => {
                res.status(500).json(err.message)
            })
    }
}

module.exports = accessLogsService;