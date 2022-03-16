import express, { Request, Response } from "express";
import Postcard from "../models/postcard";

const router = express.Router();

//TODO: Make a route for accessing a single image

router.get("/demo", async function (req: Request, res: Response,) {
    const url: string = await Postcard.get();

    console.log(url);

    return res.json({ url });
});

export { router as postcardRoutes };