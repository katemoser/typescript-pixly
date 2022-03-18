import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import PixlyApi from "../Api";
import EditorCanvas from "./EditorCanvas";

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
    return (
        <div className="EditorHandler">
            <EditorCanvas postcard={postcard}/>
        </div>
    )
}

export default EditorHandler;