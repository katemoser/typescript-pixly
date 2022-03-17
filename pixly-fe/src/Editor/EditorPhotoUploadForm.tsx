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

        if (fileToUpload) {
            const submittedFormData = new FormData();
            submittedFormData.append("fileToUpload", fileToUpload)
            PixlyApi.uploadImageToAWS(submittedFormData);
        }
    }

    function handleChange(evt: React.ChangeEvent) {
        const target = evt.target as HTMLInputElement
        const files = target.files;
        if (files) {
            const file: File = files[0];
            console.log("FILE:", file);
            setFileToUpload(file);

        } else {
            console.log("There was an issue with the file");
        }

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