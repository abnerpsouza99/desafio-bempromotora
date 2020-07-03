/* This file is responsable for routes in the site */

const express = require('express')
const routes = express.Router()
const bodyParser = require('body-parser')
const db = require('./src/database/db')

routes.use(bodyParser.urlencoded({extended: true}))

routes.get('/', function(req, res){
    return res.redirect("/cadastro")
})

routes.get('/cadastro', function(req, res){
    return res.render('cadastro')
})

routes.get('/cadastro-concluido', function(req, res){
    return res.render('cadastro-concluido')
})

routes.get('/usuarios', function(req, res){
    

    const search = req.query.search

    if(search == "") {
        // Pesquisa vazia
        return res.render("search-results.html", {rows: 0})
    }

    const query = `
    SELECT * FROM users`

    db.all(query, [], function(err, rows){
        if(err){
            throw err;
        }

        rows.forEach(function(row){
        })

        return res.render('usuarios', {rows: rows})
    })
})

module.exports = routes