import express, { json, urlencoded } from 'express';
import path from 'path';
import morgan from 'morgan';
import { create } from 'express-handlebars';
import { routes } from './routers';

const app = express();

// Settings
// app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', create({ defaultLayout: 'main', extname: '.hbs' }).engine);
app.set('view engine', '.hbs');

// middlewares
app.use(morgan('dev'));
app.use(json());
app.use(urlencoded({ extended: false }));

// Routes
app.use(routes);

// Static files
// app.use('/public', express.static(path.join(__dirname, 'public')));

export default app;
