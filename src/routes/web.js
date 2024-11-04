import express from 'express'
import { handleHome, handleUser, handleUserCreate, handleDelete, handleUpdate, handleUpdatePost } from '../controllers/homeController.js';
import { testApi } from '../controllers/apiControllers.js';

const router = express.Router()

const initWebRoutes = (app) => {
    router.get('/', handleHome)
    router.get('/user', handleUser)
    router.post('/users/create-user', handleUserCreate)
    router.post('/delete-user/:id', handleDelete)
    router.get('/update-user/:id', handleUpdate)
    router.post('/users/update-user', handleUpdatePost)

    router.get('/api/test-api', testApi)

    return app.use('/', router)
}

export default initWebRoutes