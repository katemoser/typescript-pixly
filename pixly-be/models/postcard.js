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
const db_1 = __importDefault(require("../db"));
/** Related functions for companies. */
class Postcard {
    // TODO: update return type
    // TODO: build interface for final return object
    // TODO: Build out the table in PSQL
    // TODO: update the argument for our get method
    static getSource() {
        return __awaiter(this, void 0, void 0, function* () {
            const url = "https://smc-pixly-resources.s3.us-west-2.amazonaws.com/seattlePostcard.jpeg";
            // const result = await db.query(
            //   `INSERT INTO jobs (title,
            //                          salary,
            //                          equity,
            //                          company_handle)
            //        VALUES ($1, $2, $3, $4)
            //        RETURNING id, title, salary, equity, company_handle AS "companyHandle"`,
            //   [
            //     data.title,
            //     data.salary,
            //     data.equity,
            //     data.companyHandle,
            //   ]);
            // let job = result.rows[0];
            return url;
        });
    }
    /** Create a job (from data), update db, return new job data.
     *
     * data should be { title, salary, equity, companyHandle }
     *
     * Returns { id, title, salary, equity, companyHandle }
     **/
    static addUpload({ key, url }) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield db_1.default.query(`INSERT INTO uploads (key,
                  url)
               VALUES ($1, $2)
               RETURNING key, url`, [
                key,
                url,
            ]);
            let uploadData = result.rows[0];
            return uploadData;
        });
    }
}
exports.default = Postcard;
