import { Request, Response } from 'express';
import express from 'express'
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req: Request, res: Response) => {
    res.send('Well done!');
})

app.post('/', (req: Request, res: Response) => {
    res.send({
        data: req.body
    });
})

app.listen(3000, () => {
    console.log('The application is listening on port 3000!');
})  