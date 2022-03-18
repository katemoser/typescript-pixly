import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import PixlyApi from "../Api";
import EditorCanvas from "./EditorCanvas";
import EditorInputForm from "./EditorInputForm";

/**
 * 
 * props: none
 * 
 * state: postcard : {url, key}
 * 
 * hierarchy: App -> Routing -> EditorHandler -> {Editor Canvas, EditorInputForm}
 * 
 */
function EditorHandler() {
    const { key } = useParams();

    const initialPostcard = { url: "", key: "" };
    const [postcard, setPostcard] = useState(initialPostcard);
    const [filter, setFilter] = useState("normal");


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

    function updateFilter(filter: string){
        setFilter(filter);
    }

 
    // TODO: Add handleSubmit to retrieve form data from the InputForm



    return (
        <div className="EditorHandler">
            <EditorCanvas postcard={postcard} filter={filter}/>
            <EditorInputForm updateFilter={updateFilter}/>
        </div>
    )
}

export default EditorHandler;