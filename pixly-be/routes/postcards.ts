import express, { Request, Response } from "express";
import Postcard from "../models/postcard";

const router = express.Router();

//TODO: Make a route for accessing a single image

router.get("/demo", async function(res: Response, req: Request, next: NextFunction) :Promise<JSON>{
    const url : string = await Postcard.get();
    
    return res.json(url,);
});

export { router as postcardRoutes};