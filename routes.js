/* This file is responsable for routes in the site */

const express = require('express')
const routes = express.Router()
const bodyParser = require('body-parser')
const db = require('./src/database/db')

routes.use(bodyParser.urlencoded({extended: true}))

routes.get('/', function(req, res){
    return res.redirect("/pesquisas")
})

routes.get('/pesquisas', function(req, res){
    return res.render('pesquisas')
})

routes.get('/pesquisa-concluida', function(req, res){
    return res.render('pesquisa-concluida')
})

routes.get('/pesquisas-registradas', function(req, res){
    
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

        return res.render('pesquisas-registradas', {rows: rows})
    })
})

module.exports = routes