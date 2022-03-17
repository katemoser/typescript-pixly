"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const multer_1 = __importDefault(require("multer"));
const multer_s3_1 = __importDefault(require("multer-s3"));
const aws_sdk_1 = __importDefault(require("aws-sdk"));
console.log("In our middleware for uploading");
const s3 = new aws_sdk_1.default.S3({
// accessKeyId: process.env.AWS_ACCESS_KEY,
// secretAccessKey: process.env.AWS_SECRET_KEY,
// region: "us-west-2"
// endpoint: 'https://smc-pixly-resources.s3.us-west-2.amazonaws.com/'
});
console.log("S3 object", s3);
const upload = (0, multer_1.default)({
    storage: (0, multer_s3_1.default)({
        s3: s3,
        // TODO: this doesn't seem to work with the process.env.AWS_BUCKET_NAME
        bucket: "smc-pixly-resources",
        // TODO: Maybe remove ACL if we don't have one. Check here if error
        acl: 'public-read',
        key: function (req, file, cb) {
            console.log("File within our middleware: ", file);
            cb(null, file.originalname);
        }
    }),
    limits: { fileSize: 2000000 }, // In bytes: 2000000 bytes = 2 MB
}).single("fileToUpload");
exports.default = upload;
