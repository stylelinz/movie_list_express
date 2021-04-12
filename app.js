const express = require('express')
const app = express()
const handlebars = require('express-handlebars')
const { results: movieLists } = require('./movies.json')

const port = 3000

app.engine('handlebars', handlebars({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

// Apply static resources
app.use(express.static('public'))

// Route settings
app.get('/', (req, res) => {
  res.render('index', { movies: movieLists })
})

// Get particular movie information
app.get('/movie/:id', (req, res) => {
  const movie = movieLists.find(movie => {
    movie.id.toString() === req.params.id
  })
  res.render('show', { movie })
})

// Get search keyword, and send back filtered movie(s)
app.get('/search', (req, res) => {
  const keyword = req.query.search
  const filteredMovies = movieLists.filter(movie => {
    return movie.title.toLowerCase().includes(keyword.trim().toLowerCase())
  })
  res.render('index', { movies: filteredMovies, keyword })
})

app.listen(port, () => {
  console.log(`Express is listening on http://localhost:${port}`)
})