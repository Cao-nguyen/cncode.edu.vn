import express from 'express'
import dotenv from 'dotenv'
import bodyParser from 'body-parser'
import path from 'path'
import initWebRoutes from './routes/web.js'
import { fileURLToPath } from 'url'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 3001

// config body parser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');

// init web routes
initWebRoutes(app)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});