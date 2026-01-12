import { Router } from 'express';
import {
  createRegistration,
  getCompetitionRegistrations,
  getUserRegistrations,
  getRegistrationById,
  updateRegistrationStatus,
  cancelRegistration
} from '../modules/registrations/registrationController';

const router = Router();

router.post('/', createRegistration);
router.get('/competition/:competitionId', getCompetitionRegistrations);
router.get('/user/:userId', getUserRegistrations);
router.get('/:id', getRegistrationById);
router.put('/:id/status', updateRegistrationStatus);
router.delete('/:id', cancelRegistration);

export default router;