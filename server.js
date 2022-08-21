const express = require('express')
const { mongo } = require('mongoose')
const mongoose = require('mongoose')
// require('dotenv/config')
const OrphanageRequests = require("./model/need")
const app = express()

// app.use(express.json)
// const mw = (req, res, next)=> {
//     console.log('Welcome to my MW')
//     next()
// }

// app.use(mw) 

app.get("/", (request, response) => {
    response.send("First request!!!")
})

app.get("/orphanages", (request, response) => {
    let orpahanges = ["ATC", "Nesakarangal", "Udhavum Karangal"]
    response.send({
        orpahanges: orpahanges,
    })
}) 

app.post("/submitRequest", async (request, reponse) => {
    try {
        let orphanageRequest = new OrphanageRequests(request.body)
        orphanageRequest.save()
        res.send('Created Request')
    } catch (err) {
        response.send({ message: err})
    }
    console.log(request.params)
})

mongoose.connect("mongodb+srv://srvignesh:MyMongodb$09@cluster0.ofqeznu.mongodb.net/?retryWrites=true&w=majority", (request, response) => {
    console.log('Connected to Mongo DB')
})

app.listen(process.env.PORT || 3000, ()=> {
    console.log('Listening to 3000')
})