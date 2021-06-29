import app from './app';
import dotenv from 'dotenv';
dotenv.config();
import './database';

app.listen(4000, () => console.log('Server Listening on port 4000'));
