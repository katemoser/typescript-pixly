import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import PixlyApi from "../Api";
/**
 * 
 * props: 
 * 
 * state:
 * 
 * hierarchy:
 * 
 */
function EditorHandler() {
    const { key } = useParams();

    const initialPostcard = { url: "", key: "" };
    const [postcard, setPostcard] = useState(initialPostcard);

    useEffect(
        function getPostcardOnMount() {
            console.log("useEffect getPostcardOnMount")
            async function fetchPostcard() {
                if (key) {
                    const response = await PixlyApi.getPostcard(key);
                    setPostcard(response);
                }
            }
            fetchPostcard();
        }, [key]
    );
    return (<div></div>)
}

export default EditorHandler;