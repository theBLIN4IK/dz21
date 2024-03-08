const express = require('express') 
const path = require('path') 
const server = express() 
const PORT = 3000

server.use(express.static(path.join(__dirname + '/pages')))


server.listen(PORT, (error) => {
    if (error) {
        console.log(error)
    } else {
        console.log(`Listening on port ${PORT}`)
    }
})

const createPath = (page, ext) => path.resolve(__dirname, 'pages', `${page}.${ext}`)

server.get('/', (req, res) => {
    res.sendFile(createPath('main', 'html'))
})

server.get('/main', (req, res) => {
    res.sendFile(createPath('main', 'html'))
})

server.get('/page1', (req, res) => {
    res.sendFile(createPath('page1', 'html'))
})
server.get('/page2', (req, res) => {
    res.sendFile(createPath('page2', 'html'))
})
server.get('/page3', (req, res) => {
    res.sendFile(createPath('page3', 'html'))
})
server.get('/page4', (req, res) => {
    res.sendFile(createPath('page4', 'html'))
})

//джейсон
let jsonData = { 
    "ooo":{text1: 'Hello World Page 1' },
   "oooo":{text2: 'https://arthive.net/res/media/img/oy1200/work/6e1/7500532@2x.jpg'} 

 }

server.get('/api/data', (req, res) => {
  res.json(jsonData)
})

server.post('/api/data', express.json(), (req, res) => {
  jsonData = req.body
  res.json({ message: 'Данные обновлены' })
})

server.use((req, res) => {
    res.status(404).sendFile(createPath('error', 'html'))
  })

  


//http://localhost:3000/main 