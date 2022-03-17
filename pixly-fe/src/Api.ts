import axios from "axios";

const BASE_URL = "http://localhost:5001";
/**
 * Api function that talks to the backend via axios
 * 
 * returns an array like [{id, source}, ...]
 * 
 */
class PixlyApi {
    static async getDemoPostcard() {
        console.log(`IN PIXLYAPI, GET DEMO POSTCARD, URL: ${BASE_URL}postcards/demo`)
        const resp = await axios.get(`${BASE_URL}/postcards/demo`);
        const demoURL = resp.data;
        console.log(demoURL);
        return demoURL;
    }

    static async uploadImageToAWS(submittedFormData: FormData) {
        console.log("Sending image to back end route via Axios");
        console.log("Submitted Form Data", submittedFormData.get("fileToUpload"));

        await axios.post(`${BASE_URL}/postcards/upload`, submittedFormData)
    }
};

export default PixlyApi;