import { Route, Routes } from "react-router";
import EditorPhotoUploadForm from "./Editor/EditorPhotoUploadForm";
import { RoutesProps } from "./Interfaces";
import PostcardHandler from "./Postcard/PostcardHandler";
import EditorHandler from "./Editor/EditorHandler";




/**
 * 
 * props: 
 * 
 * state:
 * 
 * hierarchy:
 * 
 */

function Routing({postcards}: RoutesProps){
    return(
        <Routes>
            <Route path="/" element={<PostcardHandler postcards={postcards}/>} />
            <Route path="/form" element={<EditorPhotoUploadForm />} />
            <Route path="postcard/:key/edit" element={<EditorHandler/>} />
        </Routes>
        
    )
}

export default Routing;