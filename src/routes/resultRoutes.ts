import { Router } from 'express';
import {
  addOrUpdateResult,
  getCompetitionResults,
  getRegistrationResult,
  getUserResults,
  deleteResult
} from '../modules/results/resultController';

const router = Router();

router.post('/', addOrUpdateResult);
router.get('/competition/:competitionId', getCompetitionResults);
router.get('/registration/:registrationId', getRegistrationResult);
router.get('/user/:userId', getUserResults);
router.delete('/:id', deleteResult);

export default router;