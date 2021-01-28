const express = require('express')
const router = require('./routes/index')
const session = require('express-session')
const app = express()
const port = 3000


app.set('view engine', 'ejs')

app.use(express.urlencoded ({ extended: false }))

app.set('trust proxy', 1) 
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}))

app.use('/', router)

app.listen(port, () => {
  console.log(`calories-counter app running on port ${port}`)
})
