var path = require('path')
var express = require('express')
var bodyParser = require('body-parser')
var cors = require('cors')

var server = express()

var items = require('./routes/items')
var item = require('./routes/item')
var user = require('./routes/user')
var userById = require('./routes/userById')
var loanItems = require('./routes/loanItems')
var loanedItems = require('./routes/loanedItems')
var borrowedItems = require('./routes/borrowedItems')
var saveItem = require('./routes/saveItem')
var saveUser = require('./routes/saveUser')
var deleteItem = require('./routes/deleteItem')
var loanRequest = require('./routes/loanRequest')

server.use(bodyParser.json())
server.use(bodyParser.urlencoded({ extended: true }))
server.use(express.static(path.join(__dirname, '../public')))
server.use(cors({origin: 'http://localhost:8080'}))

server.use('/items', items)
server.use('/item', item)
server.use('/user', user)
server.use('/userById', user)
server.use('/loanItems', loanItems)
server.use('/loanedItems', loanedItems)
server.use('/borrowedItems', borrowedItems)
server.use('/saveItem', saveItem)
server.use('/saveUser', saveUser)
server.use('/deleteItem', deleteItem)
server.use('/loanRequest', loanRequest)

module.exports = server
