import React, { useState } from "react";
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
function EditorPhotoUploadForm() {
    const [fileToUpload, setFileToUpload] = useState<File | null>(null);

    //TODO: MOVE THIS API CALL TO THE APP
    function handleSubmission(evt: React.FormEvent) {
        evt.preventDefault();
        if(fileToUpload){
            PixlyApi.uploadImageToAWS(fileToUpload);
        }
    }

    function handleChange(evt: React.ChangeEvent){
        const target = evt.target as HTMLInputElement
        const files = target.files;
        if(files){
            const file: File = files[0];
            console.log("FILE:", file);
            setFileToUpload(file);

        }else{
            console.log("There was an issue with the file");
        }

        // TODO: figure out target.files[0] and store it in state
        // TODO: Look into file / image encoding when transmitting
        // TODO: google multipart form data (this is the default browser submission)
        // Look for FormData api (check MDN).
        // Array like obj
        console.log("handle change", target.files)
    }


    return (
        <form className="EditorPhotoUploadForm" onSubmit={handleSubmission}>
            <label></label>
            <input
                type="file"
                id="postcardUploadForm"
                accept="image/png, image/jpeg"
                onChange={handleChange}></input>
            <button>Submit</button>
        </form>
    )
}

export default EditorPhotoUploadForm;