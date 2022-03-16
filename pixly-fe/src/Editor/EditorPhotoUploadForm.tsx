import React from "react";

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

    function handleSubmission(evt: React.FormEvent) {
        evt.preventDefault();
        const target = evt.target as HTMLFormElement
        // const file: EventTarget | Null = evt.target.files;
        console.log(target.files)
    }

    function handleChange(evt: React.ChangeEvent){
        const target = evt.target as HTMLInputElement

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