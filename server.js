var express = require('express')
var morgan = require('morgan')
var path = require('path')

const app = express();

var mongoose = require('mongoose')

var bodyParser = require('body-parser')
var config = require('./config')

// mongoose.connect(config.DB)

app.use(express.static(path.join(__dirname, '/public')))
app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
const PORT = config.APP_PORT || 4000

app.use(function (req, res, next) {
    // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:8080')

    // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')

    // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type')

    // Pass to next layer of middleware
  next()
})

app.listen(PORT, () => {
    console.log('your server is running on port ' + PORT)
});
var serviceRouter = require('./Routes')
app.use('/api', serviceRouter)

app.get('/', (res, req) => {
    res.sendfile('./public/index.html')
});

