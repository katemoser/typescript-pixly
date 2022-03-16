
// TODO: Connect to the Database
// const db = require("../db");
// const { NotFoundError } = require("../expressError");

/** Related functions for companies. */

class Postcard {

    // TODO: update return type
    // TODO: build interface for final return object
    // TODO: Build out the table in PSQL
    // TODO: update the argument for our get method
    static async get() {

        const url: string = "https://smc-pixly-resources.s3.us-west-2.amazonaws.com/seattlePostcard.jpeg"

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
      }

}