import { Route, Routes } from "react-router";
import EditorPhotoUploadForm from "./Editor/EditorPhotoUploadForm";
import Postcard from "./Postcard/Postcard";


/**
 * 
 * props: 
 * 
 * state:
 * 
 * hierarchy:
 * 
 */

interface RoutesProps {
    demoURL: {url: string}
}

function Routing({demoURL}: RoutesProps){
    return(
        <Routes>
            <Route path="/" element={<Postcard demoURL={demoURL}/>} />
            <Route path="/form" element={<EditorPhotoUploadForm />} />
        </Routes>
        
    )
}

export default Routing;