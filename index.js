import express from 'express'
import dotenv from 'dotenv'
import configViewEngine from './src/configs/viewEngine.js'
import initWebRoutes from './src/routes/web.js'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 8080

// config view engine
configViewEngine(app)

// init web routes
initWebRoutes(app)

app.listen(PORT, () => {
    console.log(`Run web in ${PORT}`)
})