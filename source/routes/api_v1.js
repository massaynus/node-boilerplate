import express from 'express';
import * as PersonController from '../controllers/personController'

const router = express.Router();

router.get('/', PersonController.GetAll)
router.get('/:id', PersonController.GetOne)

router.post('/create', PersonController.createOne)

export default router