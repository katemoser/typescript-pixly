import axios from "axios";

const BASE_URL = "http://localhost:5001/";
/**
 * Api function that talks to the backend via axios
 * 
 * returns an array like [{id, source}, ...]
 * 
 */
class PixlyApi {
    static async getDemoPostcard() {
        console.log(`IN PIXLYAPI, GET DEMO POSTCARD, URL: ${BASE_URL}postcards/demo`)
        const resp = await axios.get(`${BASE_URL}postcards/demo`);
        const demoURL = resp.data;
        console.log(demoURL);
        return demoURL;
    }

    static async uploadImageToAWS(submittedImage: File) {

        console.log("Running uploadImageToAWS in API:", submittedImage);

        // const resp = await axios.post("TODO: FIND ENDPOINT", submittedImage, {
        //     headers: {
        //         "Content-Type": "multipart/form-data",
        //     }
        // })
    }
};

export default PixlyApi;