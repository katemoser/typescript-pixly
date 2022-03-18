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
exports.postcardRoutes = void 0;
const express_1 = __importDefault(require("express"));
const postcard_1 = __importDefault(require("../models/postcard"));
const encodeAndUpload_1 = require("../middleware/encodeAndUpload");
/**
 * REST API Routes for Postcards
 */
const router = express_1.default.Router();
exports.postcardRoutes = router;
/**
 * Practice Route for testing purposes
 */
router.get("/demo", function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const url = yield postcard_1.default.getSource();
        console.log(url);
        return res.json({ url });
    });
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
router.get("/", function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield postcard_1.default.getAll();
        return res.json(response);
    });
});
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
router.get("/:key", function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const key = req.params.key;
        const response = yield postcard_1.default.get(key);
        return res.json(response);
    });
});
/**
 * POST route to uplooad image to the database
 *
 * returns an object like: {data: {url: http://..., key:abcd1234 }}
 */
router.post("/upload", encodeAndUpload_1.upload, function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("Reached the upload route in the back end");
        console.log("This is the file for upload: ", req.file);
        let url = "";
        if (req.file) {
            const response = yield (0, encodeAndUpload_1.uploadToS3Bucket)(req.file);
            if (response) {
                console.log("Response object from upload route", response);
                const dbResponse = yield postcard_1.default.addUpload(response);
                console.log(dbResponse);
            }
        }
        // const url: string = await Postcard.getSource();
        // console.log(url);
        // return res.json({ url });
        return res.send(url);
    });
});
