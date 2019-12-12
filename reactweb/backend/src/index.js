const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const app = express()
const path = require('path')

const server = require('http').Server(app)
const io = require('socket.io')(server);

app.use(cors())

mongoose.connect(`mongodb://localhost:27017/bdsi`, {
    useNewUrlParser: true,
    useUnifiedTopology: true 
})

app.use((req, res, next) => {
  req.io = io;
  next();
})
/*
app.get('/', (req,res) => {
    const { name } = req.query
    res.send(`Hello World ${name}`)
})
*/
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')))

app.use(require('./routes'))

server.listen(3333, () => {
  console.log('Servidor Executando')
})