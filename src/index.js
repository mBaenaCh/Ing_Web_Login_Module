import config from './config';
import app from './app';
import './database';

const PORT = config.SERVER_PORT || 4000;

app.listen(PORT, () => console.log(`Server Listening on port ${PORT}`));
