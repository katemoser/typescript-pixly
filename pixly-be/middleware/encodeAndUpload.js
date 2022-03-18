"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadToS3Bucket = exports.upload = void 0;
const multer_1 = __importDefault(require("multer"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const { S3Client, PutObjectCommand } = require("@aws-sdk/client-s3");
const { v4: uuid } = require("uuid");
const S3_BUCKET_NAME = process.env.S3_BUCKET_NAME;
const REGION = process.env.AWS_REGION; //e.g. "us-east-1"
console.log("In our middleware for uploading");
//middleware multer prepares img for upload
const upload = (0, multer_1.default)().single("fileToUpload");
exports.upload = upload;
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
function uploadToS3Bucket(file) {
    return __awaiter(this, void 0, void 0, function* () {
        const key = uuid();
        const putObjectCommand = new PutObjectCommand({
            Bucket: S3_BUCKET_NAME,
            Key: key,
            Body: file.buffer,
            ContentType: "image/jpeg",
            Tagging: "public=yes"
        });
        try {
            const data = yield s3.send(putObjectCommand);
            console.log("Success", data);
            const result = {
                url: `https://${S3_BUCKET_NAME}.s3.amazonaws.com/${key}`,
                key: key
            };
            return result;
        }
        catch (err) {
            console.log("Error", err);
            return null;
        }
    });
}
exports.uploadToS3Bucket = uploadToS3Bucket;
;
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
