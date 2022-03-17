import express, { Request, Response } from "express";
import Postcard from "../models/postcard";
import { upload, uploadToS3Bucket } from "../middleware/encodeAndUpload"

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

    let url = ""

    if(req.file){
        const response = await uploadToS3Bucket(req.file);
        const key = response.key;
        const url = response.url;
    }
    
 


    // const url: string = await Postcard.getSource();

    // console.log(url);

    // return res.json({ url });

    return res.send(url);
});

export { router as postcardRoutes };