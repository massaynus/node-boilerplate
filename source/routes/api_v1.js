import express from 'express';
import * as PersonController from '../controllers/personController'
import { SERVER_USE_REDIS_CACHE } from '../lib/config'
import ResponseCache from '../middlewares/ResponseCache'
import CacheResponse from '../middlewares/CacheResponse'

const router = express.Router();

if (SERVER_USE_REDIS_CACHE)
    router.use(ResponseCache)

router.get('/', PersonController.getAll)
router.get('/:id', PersonController.getOne)

router.post('/create', PersonController.createOne)

if (SERVER_USE_REDIS_CACHE)
    router.use(CacheResponse)

export default router