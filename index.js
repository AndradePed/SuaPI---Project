const express = require('express')
const app = express()
const port = 3000

app.set('views', 'views')
app.set('view engine', 'ejs')
app.use(express.urlencoded({extended:false}))

// o express-ejs-layouts permite a reutilzação de templates nas páginas 
const expressLayouts = require('express-ejs-layouts')
const mainRouter = require('./routes/router')


app.use(express.static('public'))
app.use(expressLayouts);
app.set('layout', 'layout')


app.use('/', mainRouter)

app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`)
})