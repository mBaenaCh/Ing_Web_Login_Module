import express from 'express';
import cors from 'cors';
import employeeRoutes from './routes/employee.routes';
import authRoutes from './routes/auth.routes';

const app = express();

app.use(express.json());
app.use(cors());

app.use('/api/auth', authRoutes);
app.use('/api/employees', employeeRoutes);

app.use((err, req, res, next) => {
  if (err.name === 'UnauthorizedError') {
    return res.status(401).json({ message: 'Unauthorized' });
  }
});

export default app;
