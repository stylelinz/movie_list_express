const express = require('express')
const app = express()
const handlebars = require('express-handlebars')
const movieLists = require('./movies.json')

const port = 3000

app.engine('handlebars', handlebars({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

// Apply static resources
app.use(express.static('public'))

// Route settings
app.get('/', (req, res) => {
  res.render('index', { movies: movieLists.results })
})

app.listen(port, () => {
  console.log(`Express is listening on http://localhost:${port}`)
})