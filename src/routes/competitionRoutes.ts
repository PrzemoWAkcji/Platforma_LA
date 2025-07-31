import { Router } from 'express';
import { competitionController } from '../modules/competitions/competitionController';

const router = Router();

router.get('/', competitionController.getAll);
router.get('/:id', competitionController.getById);
router.post('/', competitionController.create);
router.put('/:id', competitionController.update);
router.delete('/:id', competitionController.delete);

export default router;