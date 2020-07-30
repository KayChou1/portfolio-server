const info = require('./env');
const {Pool} = require('pg');
const pool = new Pool({
 user: info.user, 
 host: info.host,
 database: info.database,
 password: info.password,
 port: info.port,
})
const getProjects = (request, response) => {
 pool.query('SELECT * FROM projects', (error, results) => {
 if(error) {
 throw error;
 }
 response.status(200).json(results.rows);
 })
}
module.exports = { getProjects}