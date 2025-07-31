import express from 'express';
import competitionRoutes from './routes/competitionRoutes';
import registrationRoutes from './routes/registrationRoutes';
import resultRoutes from './routes/resultRoutes';

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use('/api/competitions', competitionRoutes);
app.use('/api/registrations', registrationRoutes);
app.use('/api/results', resultRoutes);

// Basic health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

export default app;