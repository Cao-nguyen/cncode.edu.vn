import express from 'express'
import { handleHome, handleUser } from '../controllers/homeController.js';

const router = express.Router()

const initWebRoutes = (app) => {
    router.get('/', handleHome)
    router.get('/user', handleUser)

    return app.use('/', router)
}

export default initWebRoutes
