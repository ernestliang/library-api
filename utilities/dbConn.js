const mysql2 = require("mysql2/promise");
const connObject = mysql2.createPool({
    host: "103.3.173.137",
    user: "looksee",
    password: "return2626!",
    database: "testdb2",
    waitForConnections: true,
    multipleStatements: true
})
module.exports = connObject;