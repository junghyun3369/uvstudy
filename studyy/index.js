import express from 'express'

const app = express()
const port = 3000

app.get('/', (req, res) => {
  var html = '<h1>화면 연습</h1>'
  res.send(html)
})

app.get('/hello', (req, res) => {
  res.send('Hello World')
})

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
})

