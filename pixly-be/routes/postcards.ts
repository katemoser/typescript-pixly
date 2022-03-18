import express, { Request, response, Response } from "express";
import Postcard from "../models/postcard";
import { upload, uploadToS3Bucket } from "../middleware/encodeAndUpload"

/**
 * REST API Routes for Postcards
 */

const router = express.Router();

/**
 * Practice Route for testing purposes
 */
router.get("/demo", async function (req: Request, res: Response,) {
    const url: string = await Postcard.getSource();

    console.log(url);

    return res.json({ url });
});

/**
 * Get all postcards
 * 
 * returns object like:
 * 
 * {data:
 * [ {
 *      url:http://.....,
 *      key: abcd1234}, {...}, ...]}
 */
router.get("/", async function (req: Request, res: Response,) {
    const response = await Postcard.getAll();
    return res.json(response);
})

/**
 * Get one postcard info object
 * 
 * takes key (as url paramater)
 * 
 * returns object like
 * {data: {
 *      url: http://....
 *      key: abcd1234}
 * }
 */
router.get("/:key", async function (req: Request, res: Response,) {
    const key = req.params.key;
    const response = await Postcard.get(key);
    return res.json(response);
})

/**
 * POST route to uplooad image to the database
 * 
 * returns an object like: {data: {url: http://..., key:abcd1234 }}
 */
router.post("/upload", upload, async function (req: Request, res: Response,) {
    console.log("Reached the upload route in the back end")
    console.log("This is the file for upload: ", req.file)

    let url = ""

    if (req.file) {
        const response = await uploadToS3Bucket(req.file);
        if (response) {
            console.log("Response object from upload route", response)
            const dbResponse = await Postcard.addUpload(response)
            console.log(dbResponse);
        }
    }

    return res.json(response);
});

export { router as postcardRoutes };