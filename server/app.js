
const cors = require("cors")
const mongoose = require("mongoose")
const express = require ("express")
const { API_VERSION} = require("./constanst")
const bodyParser = require("body-parser")

const app = express()

//importacion de rutas 

// configurar Body parce
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

//configurar carpeta estaticos
app.use(express.static('uploads'))

// configurar Headers HTTP -CORS
app.use(cors())

//importar ruta
const authRoutes = require("./router/auth.router")
const userRoutes = require("./router/user.router")
const menuRoutes = require("./router/menu.router")
const courseRoutes = require("./router/course.router")
const postRoutes = require("./router/post.router")
const newsletterRoutes = require("./router/newsletter.router")
//configurar Rutas
app.use(`/api/${API_VERSION}`, authRoutes)
app.use(`/api/${API_VERSION}`, userRoutes)
app.use(`/api/${API_VERSION}`, menuRoutes)
app.use(`/api/${API_VERSION}`, courseRoutes)
app.use(`/api/${API_VERSION}`, postRoutes)
app.use(`/api/${API_VERSION}`, newsletterRoutes)

module.exports = app
