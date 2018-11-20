var mongoose = require('mongoose')

var model = new mongoose.Schema({
    name: {
        type: String
    },
    done: {
        type: Boolean
    }
},
{
    collection: 'services'
})

module.exports = mongoose.model('services', model)