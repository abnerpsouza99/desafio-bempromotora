const sqlite3 = require("sqlite3").verbose() 
const db = new sqlite3.Database("./src/database/database.db")

module.exports = db

db.serialize(() => {
    
    db.run(`
    CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name VARCHAR(60),
        idade VARCHAR(60),
        convenio VARCHAR(60),
        salario VARCHAR(60),
        emprestimo VARCHAR(60)
    )`)

})