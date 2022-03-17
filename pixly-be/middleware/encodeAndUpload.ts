import multer from "multer";
import multerS3 from "multer-s3";
import aws from "aws-sdk";

console.log("In our middleware for uploading")

const s3 = new aws.S3({
    // accessKeyId: process.env.AWS_ACCESS_KEY,
    // secretAccessKey: process.env.AWS_SECRET_KEY,
    // region: "us-west-2"
    // endpoint: 'https://smc-pixly-resources.s3.us-west-2.amazonaws.com/'
});

console.log("S3 object", s3)

const upload = multer({
    storage: multerS3({
        s3: s3,
        // TODO: this doesn't seem to work with the process.env.AWS_BUCKET_NAME
        bucket: "smc-pixly-resources",
        // TODO: Maybe remove ACL if we don't have one. Check here if error
        acl: 'public-read',
        key: function (req, file, cb) {
            console.log("File within our middleware: ", file)
            cb(null, file.originalname)
        }
    }),
    limits: { fileSize: 2000000 }, // In bytes: 2000000 bytes = 2 MB
}).single("fileToUpload");

export default upload;