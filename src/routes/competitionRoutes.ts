import { Router } from 'express';
import {
  getAllCompetitions,
  getCompetitionById,
  createCompetition,
  updateCompetition,
  deleteCompetition
} from '../modules/competitions/competitionController';

const router = Router();

router.get('/', getAllCompetitions);
router.get('/:id', getCompetitionById);
router.post('/', createCompetition);
router.put('/:id', updateCompetition);
router.delete('/:id', deleteCompetition);

export default router;