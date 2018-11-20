var express = require('express')
var serviceRoter = express.Router()
var helper = require('./src/server/apiHandler')
var model = require('./src/models/model')

// serviceRoter.route('/add').get(async function(req, res) {
//     await helper.api();

//             res.status(200).json('service')
// })
serviceRoter.route('/register').post(async function(req, res) {
    function stat(status, msg) {
        console.log("\n in call bacl \n")
        if(status == 200){
            res.status(200).json('ok')
        }
        res.status(status).json(msg)
        console.log(status)
    }
    register_url = '/api/UserManagement'
    var filan = await helper.adminApi(req.body, 'post',register_url, stat);
})

serviceRoter.route('/getUser/:id').get(async function(req, res) {
    var id = req.params.id
    function stat(status, msg) {
        if(status == 200){
            res.status(200).json(msg)
        }
        res.status(status).json(msg)
        console.log(status)
    }
    register_url = '/api/UserManagement/' + id
    var filan = await helper.adminApi(req.body, 'get', register_url, stat);
})

serviceRoter.route('/addService/').put(async function(req, res) {
    function stat(status, msg) {
        if(status == 200){
            res.status(200).json(msg)
        }
        res.status(status).json(msg)
        console.log(status)
    }
    register_url = '/api/UserManagement/'
    var filan = await helper.adminApi(req.body, 'put', register_url, stat);
})

serviceRoter.route('/updateUser/').put(async function(req, res) {
    function stat(status, msg) {
        if(status == 200){
            res.status(200).json(msg)
        }
        res.status(status).json(msg)
        console.log(status)
    }
    register_url = '/api/UserManagement/'
    console.log(req.body)
    var filan = await helper.adminApi(req.body, 'put', register_url, stat);
})



module.exports = serviceRoter   