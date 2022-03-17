import { Route, Routes } from "react-router";
import EditorPhotoUploadForm from "./Editor/EditorPhotoUploadForm";
import { RoutesProps } from "./Interfaces";
import PostcardHandler from "./Postcard/PostcardHandler";




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
        </Routes>
        
    )
}

export default Routing;