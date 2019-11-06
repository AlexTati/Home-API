const mysql = require('mysql2');

const pool = mysql.createPool({
        host:"localhost",
        port:3306,
        database:"homeshare",
        user:"TatiAlexLabo",
        password:"TatiAlexLabo",
        waitForConnections: true,
        connectionLimit: 10,
    }
);

const query = function(sql)
{
    return pool.promise().query(sql);
}

const preparedStatement = function(sql, params)
{
    return pool.promise().execute(sql, params);
}

module.exports = {
    query: query,
    stmt: preparedStatement
}