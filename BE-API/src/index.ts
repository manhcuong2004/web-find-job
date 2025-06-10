import { Request, Response } from 'express';
import express from 'express';
import routes from './routes';
import dotenv from 'dotenv';
dotenv.config();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes)

const port = process.env.PORT || 6969




app.listen(port, () => {
    console.log(`The application is listening on port ${port}!`);
})  