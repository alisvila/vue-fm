var axios = require('axios')
var config = require('../../config')
var token

var login = async function (data, callback) {
    var username = data.username;
    var password = data.password;
    return await axios({
        method: 'post',
        url: config.api + '/api/account/login',
        data: `grant_type=password&username=${username}&password=${password}&client_id=ngAuthApp`,
        headers: { 
            "content-type": "application/x-www-form-urlencoded",
            "Access-Control-Allow-Origin": "*"
            }
    })
        .then(function (response) {
            callback(response.status, response.data)
            console.log(response)
        })
        .catch(function (err) {
            console.log(err)
            callback(err.response.status, err.response.data)
        })
}

var adminApi = async function (data, method, url, callback) {
    await getAdmin()
    return await axios({
        method: method,
        url: config.api + url,
        data: data,
        headers: {
            "Authorization": "bearer " + token,
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            'Accept': '*/*'
        }
    })
        .then(function (response) {
            callback(response.status, response.data)
            console.log(response)
        })
        .catch(function (err) {
            console.log(err)
            callback(err.response.status, err.response.data)
        })
}
var getAdmin = async function () {
    await axios({
        method: 'post',
        url: config.api + '/api/account/login',
        data: `grant_type=password&username=filan&password=123456&client_id=ngAuthApp`,
        headers: {
            "content-type": "application/x-www-form-urlencoded",
            "Access-Control-Allow-Methods": 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
            "Access-Control-Allow-Headers": "Access-Control-Allow-Headers, Access-Control-Allow-Origin, Access-Control-Request-Method",
            "Access-Control-Allow-Origin": "*",
            'Accept': '*/*'
        }
    })
        .then(function (response) {
            token = response.data.access_token
            // return token;
        })
        .catch(function (err) {
            console.log(err)
        })
}


module.exports.adminApi = adminApi
module.exports.login = login

