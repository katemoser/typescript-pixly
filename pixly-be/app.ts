import express, { 
    Request as req, 
    Response as res, 
    NextFunction as next } from 'express';


//routers
import {postcardRoutes} from "./routes/postcards";

const app = express();

app.use(express.json());
// app.get('/', (req, res) => {
//     res.send('Well done!');
// })

module.exports = app;