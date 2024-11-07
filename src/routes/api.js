import express from 'express'
import apiControllers from '../controllers/apiControllers.js';
import useControllers from '../controllers/userController.js'
const router = express.Router()

const initApiRoutes = (app) => {
    router.get('/test-api', apiControllers.testApi)
    router.post('/register', apiControllers.handleRegister)
    router.post('/login', apiControllers.handleLogin)

    router.get('/user/read', useControllers.readFunc)
    router.post('/user/create', useControllers.createFunc)
    router.put('/user/update', useControllers.updateFunc)
    router.delete('/user/delete', useControllers.deleteFunc)

    return app.use('/api/v1/', router)
}

export default initApiRoutes