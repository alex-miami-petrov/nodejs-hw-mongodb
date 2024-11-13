import express from 'express';
import cors from 'cors';
import pino from 'pino';
import contactController from './contactController.js';

const logger = pino();
const app = express();

app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
  logger.info(`${req.method} ${req.url}`);
  next();
});

app.get('/contacts', contactController.getContacts);

app.use((req, res, next) => {
  res.status(404).json({ message: 'Not found' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
