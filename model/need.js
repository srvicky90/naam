const  mongoose = require('mongoose')

const OrphanageRequests = new mongoose.Schema({
    orphanageId: {
        type: String, 
        required: true,
    },
    requestDescription: String,
    dateNeeded: Date,
    requestType: String
})

module.exports = mongoose.model('orphanage_requests', OrphanageRequests)