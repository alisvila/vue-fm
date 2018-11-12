const mocks = {
    'auth': { 'POST': { token: 'This-is-a-mocked-token' } },
    'user/me': { 'GET': { name: 'doggo', title: 'sir' } }
  }
  
  const apiCall = ({url, method, ...args}) => new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        resolve(mocks[url][method || 'GET'])
        console.log(`Mocked '${url}' - ${method || 'GET'}`)
        console.log('response: ', mocks[url][method || 'GET'])
      } catch (err) {
        reject(new Error(err))
      }
    }, 1000)
  })


  export default {
    getAdmin: function() {
    this.axios({
      method: 'post',
      url: 'http://test-service.sabinarya.com/account/login', 
      data: `grant_type=password&username=aliam&password=123456&client_id=ngAuthApp`,
      headers: { 
          "content-type": "application/x-www-form-urlencoded",
          "Access-Control-Allow-Methods": 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
          "Access-Control-Allow-Headers": "Access-Control-Allow-Headers, Access-Control-Allow-Origin, Access-Control-Request-Method", 
          'Accept': '*/*'
          }
  })
  .then (function(response) {
      token = response.data.access_token
      localStorage.setItem('admin-token', token)

  })
  .catch( function(err) {
      console.log(err)
  })
}
}