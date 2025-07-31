import { Router } from 'express';
import { registrationController } from '../modules/registrations/registrationController';

const router = Router();

router.post('/', registrationController.create);
router.get('/competition/:competitionId', registrationController.getCompetitionRegistrations);
router.get('/user/:userId', registrationController.getUserRegistrations);
router.get('/:id', registrationController.getById);
router.put('/:id/status', registrationController.updateStatus);
router.delete('/:id', registrationController.cancel);

export default router;