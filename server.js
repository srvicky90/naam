const { Router } = require('express')
const express = require('express')
const { mongo } = require('mongoose')
const mongoose = require('mongoose')
// require('dotenv/config')
const OrphanageRequests = require("./model/need")
const app = express()

app.use(express.json())
const mw = (req, res, next) => {
    console.log('Welcome to my MW')
    next()
}

mongoose.connect("mongodb+srv://srvignesh:MyMongo$09@cluster0.ofqeznu.mongodb.net/?retryWrites=true&w=majority", (request, response) => {
    console.log('Connected to Mongo DB')
})

app.listen(process.env.PORT || 3000, ()=> {
    console.log('Listening to 3000')
})

app.use(mw) 

authService = require('./routes/auth');
app.use('api/user', authService);

app.get("/", (request, response) => {
    response.send("welcome to naam....")
})

/*
get list of orphanages
*/
app.get("/orphanages", (request, response) => {
    let orpahanges = ["ATC", "Nesakarangal", "Udhavum Karangal"]
    response.send({
        orpahanges: orpahanges,
    })
}) 

/*
submit a request from the orphanage
*/
app.post("/submitRequest", async (request, response) => {
    try {
        let orphanageRequest = new OrphanageRequests(request.body)
        await orphanageRequest.save()
        response.status(200).send( { requestId: orphanageRequest.requestId } )
    } catch (err) {
        response.status(500).send({ message: err})
    }
    console.log(request.params)
})

/*
get a list of all requests posted by a given orphanage
*/
app.get('/requests', function(req, res) {
    console.log('Requested Orphange ID', req.query.orphanageId)
    const orpId = req.query.orphanageId
    OrphanageRequests.find(({ orphanageId : orpId }), function(err, val) {
        try {
            if(err) {
            res.status(500).send(err)
        } else {
            if (val.length == 0) {
                res.status(201).send('No Requests available')
            } else {
                res.status(200).send(val)
            }
        }
    } catch {
            res.send(500)
        }
    })
})