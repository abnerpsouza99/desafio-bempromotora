/* This file is responsable for routes in the site */

const express = require('express')
const routes = express.Router()

routes.get('/', function(req, res){
    return res.redirect("/cadastro")
})

routes.get('/cadastro', function(req, res){
    return res.render('cadastro')
})

routes.get('/usuarios', function(req, res){
    return res.render('usuarios')
})

module.exports = routes