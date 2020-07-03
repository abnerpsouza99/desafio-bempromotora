const express = require('express')
const server = express()
const nunjucks = require("nunjucks")

/* This const is responsable for routes. (Import the routes of routes.js) */
const routes = require('./routes')
const db = require('./src/database/db')

server.use(routes)

server.use(express.static('public/styles'))

server.set("view engine", "njk")

nunjucks.configure("views", {
    express: server,
    autoescape: false,
    noCache: true
})

server.post("/enviarForm", function (req, res){

    const query = `
    INSERT INTO users (
        name,
        idade,
        convenio,
        salario,
        emprestimo
    ) VALUES (?,?,?,?,?)`
    
    const values = [
        req.body.name,
        req.body.idade,
        req.body.convenio,
        req.body.salario,
        req.body.emprestimo
    ]

    db.run(query, values)

    return res.render('pesquisa-concluida')
})



//server.use(function (req, res) {
//    res.status(404).render("not-found");
// });


server.listen(5000, function () {
    console.log("Server is running!")
})