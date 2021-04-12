const express = require('express')
const app = express()
const handlebars = require('express-handlebars')

const port = 3000

// app.use('handlebars', { defaultLayout: 'main' })
// app.set(express.static, 'public')

app.get('/', (req, res) => {
  res.render('index')
})

app.listen(port, () => {
  console.log(`Express is listening on http://localhost:${port}`)
})