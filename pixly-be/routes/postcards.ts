import express, { Request, Response } from "express";
import Postcard from "../models/postcard";
import upload from "../middleware/encodeAndUpload"

const router = express.Router();

//TODO: Make a route for accessing a single image

router.get("/demo", async function (req: Request, res: Response,) {
    const url: string = await Postcard.getSource();

    console.log(url);

    return res.json({ url });
});

router.post("/upload", upload, async function (req: Request, res: Response,) {
    console.log("Reached the upload route in the back end")
    console.log("This is the file for upload: ", req.file)



    // const url: string = await Postcard.getSource();

    // console.log(url);

    // return res.json({ url });
});

export { router as postcardRoutes };