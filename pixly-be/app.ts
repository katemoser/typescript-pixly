import express from 'express';

//routers
import {postcardRoutes} from "./routes/postcards";

const app = express();
// app.get('/', (req, res) => {
//     res.send('Well done!');
// })

module.exports = app;