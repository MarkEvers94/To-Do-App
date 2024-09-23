import express from 'express'
import bodyParser from 'body-parser'

const app = express()
const port = 3000

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static("public"));
app.set("view engine", 'ejs')

const todos = [
     
]

app.get('/', (req, res) => {
    res.render('main', {todos: todos});
})

app.get('/new.ejs', (req, res) => {
    res.render('new');
})

app.post('/main.ejs', (req, res) => {
    const new_todo = req.body.todo;
    todos.push(new_todo)
    res.render('main', {todos: todos})
})

app.post('/delete', (req, res) => {
    const todoIndex = req.body.index;
    todos.splice(todoIndex, 1)
    res.render('main', {todos: todos})
})

app.listen(port, () => {
    console.log(`Listening on port: ${port}`)
})

