import express, { 
    Request as req, 
    Response as res, 
    NextFunction as next } from 'express';
import cors from "cors";


//routers
import {postcardRoutes} from "./routes/postcards";

const app = express();

app.use(cors());

app.use(express.json());

app.use("/postcards", postcardRoutes);

module.exports = app;