import { Request, Response } from 'express';

export const competitionController = {
  getAll: async (req: Request, res: Response) => {
    res.json({ message: 'Get all competitions - placeholder' });
  },

  getById: async (req: Request, res: Response) => {
    res.json({ message: `Get competition ${req.params.id} - placeholder` });
  },

  create: async (req: Request, res: Response) => {
    res.json({ message: 'Create competition - placeholder' });
  },

  update: async (req: Request, res: Response) => {
    res.json({ message: `Update competition ${req.params.id} - placeholder` });
  },

  delete: async (req: Request, res: Response) => {
    res.json({ message: `Delete competition ${req.params.id} - placeholder` });
  }
};