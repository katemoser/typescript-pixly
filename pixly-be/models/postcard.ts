
import db from "../db";



interface ImageInfoInterface{
  key: any,
  url: string
}

/** Related functions for companies. */

class Postcard {

  // TODO: update return type
  // TODO: build interface for final return object
  // TODO: Build out the table in PSQL
  // TODO: update the argument for our get method
  /**
   * Practice method for hardcoded url
   * returns url
   */
  static async getSource() {

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

  /**returns a list of postcard info objects like
   * [{url: hht://..., key: abcd1234}, {...}, ...]
   *  
   */
  static async getAll(){
    const result = await db.query(
      `SELECT key, url FROM uploads`
    )
    console.log("GET ALL:", result.rows);
    return result.rows;
  }

  /**Takes a key (string)
   * 
   * returns a postcard info object like
   * {url: hht://..., key: abcd1234}
   *  
   */
  static async get(key: string){
    const result = await db.query(
      `SELECT key, url 
        FROM uploads 
        WHERE key = $1`,
        [key]
    )
    console.log("GET BY KEY:",result.rows[0]);
    return result.rows[0];
  }

  

  /** Create a job (from data), update db, return new job data.
   *
   * data should be { title, salary, equity, companyHandle }
   *
   * Returns { id, title, salary, equity, companyHandle }
   **/
  static async addUpload({key, url}: ImageInfoInterface) {
    const result = await db.query(
      `INSERT INTO uploads (key,
                  url)
               VALUES ($1, $2)
               RETURNING key, url`,
      [
        key,
        url,
      ]);
    let uploadData = result.rows[0];

    return uploadData;
  }


}

export default Postcard;