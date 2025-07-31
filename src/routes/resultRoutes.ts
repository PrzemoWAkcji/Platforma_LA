import { Router } from 'express';
import { resultController } from '../modules/results/resultController';

const router = Router();

router.post('/', resultController.addOrUpdateResult);
router.get('/competition/:competitionId', resultController.getCompetitionResults);
router.get('/registration/:registrationId', resultController.getRegistrationResult);
router.get('/user/:userId', resultController.getUserResults);
router.delete('/:id', resultController.deleteResult);

export default router;