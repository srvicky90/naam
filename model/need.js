const  mongoose = require('mongoose')
const uuid = require('uuid')

const OrphanageRequests = new mongoose.Schema({
    requestId: {
        type: String,
        required: true,
        default: () => uuid.v4(),
        index: { unique: true},
    },
    orphanageId: {
        type: String, 
        required: true,
    },
    requestDescription: String,
    dateNeeded: Date,
    requestType: String,
    isFulfilled: Boolean,
})

module.exports = mongoose.model('orphanage_requests', OrphanageRequests)