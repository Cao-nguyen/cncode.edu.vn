import express from 'express'
import { handleHome, handleUser, handleUserCreate } from '../controllers/homeController.js';

const router = express.Router()

const initWebRoutes = (app) => {
    router.get('/', handleHome)
    router.get('/user', handleUser)
    router.post('/users/create-user', handleUserCreate)

    return app.use('/', router)
}

export default initWebRoutes