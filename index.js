import express from 'express'
import dotenv from 'dotenv'
import path from 'path'
import initWebRoutes from './src/routes/web.js'
import { fileURLToPath } from 'url'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 3001

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.set('views', path.join(__dirname, './src/views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, './src/public')));

// init web routes
initWebRoutes(app)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});