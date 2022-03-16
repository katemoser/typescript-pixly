import axios from "axios";

const BASE_URL = "http://localhost/5001/";
/**
 * Api function that talks to the backend via axios
 * 
 * returns an array like [{id, source}, ...]
 * 
 */
class PixlyApi {
    static async getDemoPostcard(){
        const resp = await axios.get(`${BASE_URL}postcards/demo`);
        const demoURL = resp.data;
        console.log(demoURL);
        return demoURL;
    }

}

export default PixlyApi;