
import axios from 'axios'
const baseUrl = 'http://service.sirang.sabinarya.com'

export default {
  apiCall: function () {
    this.sendApiCall()
  },

  getApiCall: async function (id) {
    let token = await this.beforeApiCall()
    let masterKey = localStorage.getItem("master-key")
    console.log(token)

    axios({
      method: 'get',
      url: baseUrl + '/api/UserManagement/' + id,
      headers: {
        "Authorization": "bearer " + token,
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        'Accept': '*/*'
      }
    })
      .then(function (response) {
        localStorage.setItem('user', JSON.stringify(response.data))
      })
      .catch(function (err) {
        console.log(err)
      })
  },
  postApiCall: async function (url, body, head, method) {
    let token = await this.beforeApiCall()
    let masterKey = localStorage.getItem("master-key")
    console.log("must be after ajax call", masterKey)
    let h = {
      "Authorization": "bearer " + token,
      "content-type": "application/x-www-form-urlencoded",
      "Access-Control-Allow-Methods": 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
      "Access-Control-Allow-Headers": "Access-Control-Allow-Headers, Access-Control-Allow-Origin, Access-Control-Request-Method",
      'Accept': '*/*'
    }
    let headers = { ...h, ...head }

    axios({
      method: method,
      url: baseUrl + url,
      data: body,
      headers: headers
    })
      .then((resp) => {
        console.log(resp)
      })
      .catch((err) => {
        console.log(err)
      })
  },
  beforeApiCall: function () {
    axios({
      method: 'post',
      url: baseUrl + '/api/account/login',
      data: `grant_type=password&username=filan&password=123456&client_id=ngAuthApp`,
      headers: {
        "content-type": "application/x-www-form-urlencoded",
        "Access-Control-Allow-Methods": 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        "Access-Control-Allow-Headers": "Access-Control-Allow-Headers, Access-Control-Allow-Origin, Access-Control-Request-Method",
        'Accept': '*/*'
      }
    })
      .then(function (response) {
        let token = response.data.access_token
        return token
        localStorage.setItem('filan', token)
        console.log(token)

      })
      .catch(function (err) {
        console.log(err)
      })
  }
}