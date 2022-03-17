import multer from "multer";
import multerS3 from "multer-s3";
import aws from "aws-sdk";
import dotenv from "dotenv"
dotenv.config();

const { S3Client, PutObjectCommand } = require("@aws-sdk/client-s3");
const { v4: uuid } = require("uuid");
const S3_BUCKET_NAME = process.env.S3_BUCKET_NAME
const REGION = process.env.AWS_REGION; //e.g. "us-east-1"

console.log("In our middleware for uploading")

const upload = multer().single("fileToUpload")


// Create S3 service object
const s3 = new S3Client({ region: REGION });


/**
 * Uploads an image file too s3 bucket
 * 
 * takes file
 * 
 * returns object like {
 * 
 *  url: "cskdmfsldkfm",
 *  key: "sldkfsdk"}
 *
 */
async function uploadToS3Bucket(file: any) {
    const key = uuid();
    const putObjectCommand = new PutObjectCommand({
        Bucket: S3_BUCKET_NAME,
        Key: key,
        Body: file.buffer,
        ContentType: "image/jpeg",
        Tagging: "public=yes"
    })
    try {
        const data = await s3.send(putObjectCommand);
        console.log("Success", data);
        const result = {
            url: `https://${S3_BUCKET_NAME}.s3.amazonaws.com/${key}`,
            key: key
        }
        return result;

    } catch (err) {
        console.log("Error", err);
        return null;
    }
};

export { upload, uploadToS3Bucket };






// const s3 = new aws.S3({
//     accessKeyId: process.env.AWS_ACCESS_KEY,
//     secretAccessKey: process.env.AWS_SECRET_KEY,
//     region: "us-west-2"
//     // endpoint: 'https://smc-pixly-resources.s3.us-west-2.amazonaws.com/'
// });

// const upload = multer({
//     storage: multerS3({
//         s3: s3,
//         bucket: "smc-pixly-resources",
//         acl: 'public-read',
//         key: function (req, file, cb) {
//             console.log("File within our middleware: ", file)
//             cb(null, file.originalname)
//         }
//     }),
//     limits: { fileSize: 2000000 }, // In bytes: 2000000 bytes = 2 MB
// }).single("fileToUpload");




/* S3 API
To send a request, you:
Initiate client with configuration (e.g. credentials, region).
Initiate command with input parameters.
Call send operation on client with command object as input.
If you are using a custom http handler, you may call destroy() to close open connections. */
