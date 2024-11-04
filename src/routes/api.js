import express from 'express'
import apiControllers from '../controllers/apiControllers.js';

const router = express.Router()

const initApiRoutes = (app) => {
    router.get('/test-api', apiControllers.testApi)
    router.post('/register', apiControllers.handleRegister)

    return app.use('/api/v1/', router)
}

export default initApiRoutes