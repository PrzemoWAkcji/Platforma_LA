import { Request, Response } from 'express';

export const getAllCompetitions = async (req: Request, res: Response) => {
  res.json({ message: 'Get all competitions - placeholder' });
};

export const getCompetitionById = async (req: Request, res: Response) => {
  res.json({ message: `Get competition ${req.params.id} - placeholder` });
};

export const createCompetition = async (req: Request, res: Response) => {
  res.json({ message: 'Create competition - placeholder' });
};

export const updateCompetition = async (req: Request, res: Response) => {
  res.json({ message: `Update competition ${req.params.id} - placeholder` });
};

export const deleteCompetition = async (req: Request, res: Response) => {
  res.json({ message: `Delete competition ${req.params.id} - placeholder` });
};