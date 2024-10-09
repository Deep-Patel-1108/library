import express from 'express';
import routes from './routes/index.js';
import { listen, middlewareConfigWrapper } from './config/middleware.js';
import httpStatus from 'http-status';

const app = express();
middlewareConfigWrapper(app);
app.set('view engine', 'ejs');
app.set('views', 'src/public');

app.get('/', (req, res) => {
  res.json({ error: false, message: 'You are now ready to explore' });
});

app.use('/api/v1/', routes);

app.use('*', (req, res) => {
  res.status(httpStatus.NOT_FOUND).json({ message: 'request not found' + '' });
});
listen(app, 8500);
