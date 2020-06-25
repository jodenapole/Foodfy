const express = require('express')
const nunjucks = require ('nunjucks')

const server = express()
const data = require("./data")

server.use(express.static('public'))

server.set("view engine", "njk")

nunjucks.configure("views", {
    express: server
})

server.get("/", function(req, res){
    return res.render("home", {items: data})
})

server.get("/about", function(req, res){
    return res.render("about")
})

server.get("/recipes", function(req, res){
    return res.render("recipes", {items: data})
})

server.get("/recipes/:index", function (req, res) {
    const recipeIndex = req.params.index;
    const recipe = data[recipeIndex];
    return res.render("recipe", {recipe})
})

server.listen(3000, function(){
    console.log("server is running")
})