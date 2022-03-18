import axios from "axios";

const BASE_URL = "http://localhost:5001";
/**
 * API class with static methods
 * 
 * Makes AJAX requests tot he backend using axios
 * 
 */
class PixlyApi {

    /**
     * Get all postcards 
     * 
     * returns an array like [{url, key}, ...]
     */
    static async getPostcards() {
        console.log(`Sending GET /postcards/ request`)
        const resp = await axios.get(`${BASE_URL}/postcards/`);
        const postcards = resp.data;
        console.log(postcards);
        return postcards;
    }


    /**
     * Get one postcard
     * 
     * returns an object like {url, key}
     */
    static async getPostcard(key: string) {
        console.log(`Sending GET /postcard/ request`)
        const resp = await axios.get(`${BASE_URL}/postcards/${key}`);
        const postcard = resp.data;
        console.log(postcard);
        return postcard;
    }

    /**
     * upload image to backend
     * 
     * takes formData like {fileToUpload: File}
     * 
     * returns nothing (TODO: FIX THIS)
     */
    static async uploadImageToAWS(submittedFormData: FormData) {
        console.log("Sending image to back end route via Axios");
        console.log("Submitted Form Data", submittedFormData.get("fileToUpload"));

        await axios.post(`${BASE_URL}/postcards/upload`, submittedFormData)
    }
};

export default PixlyApi;