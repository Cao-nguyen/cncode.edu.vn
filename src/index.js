import express from 'express'
import dotenv from 'dotenv'
import bodyParser from 'body-parser'
import path from 'path'
import initWebRoutes from './routes/web.js'
import initApiRoutes from './routes/api.js'
import connection from './config/db.js'
import configCors from './config/cors.js'
import { fileURLToPath } from 'url'
const { exec } = require("child_process");
const cors = require("cors");
const fs = require("fs");

dotenv.config()

const app = express()
const PORT = process.env.PORT || 8080

configCors(app)

// config body parser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');

// TEST

// test connection
connection()

// CORS
app.use(cors({
    origin: 'http://localhost:3000', // Chỉ cho phép yêu cầu từ frontend
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
}));


// init web routes
initWebRoutes(app)
initApiRoutes(app)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});