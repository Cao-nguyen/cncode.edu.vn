import express from 'express'
require('dotenv').config()
import configViewEngine from './src/configs/viewEngine'
import initWebRoutes from './src/routes/web'

const app = express()
const PORT = process.env.PORT || 8080

// config view engine
configViewEngine(app)

// init web routes
initWebRoutes(app)

app.listen(PORT, () => {
    console.log(`Run web in ${PORT}`)
})