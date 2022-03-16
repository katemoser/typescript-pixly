import { Route, Routes } from "react-router";
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
        </Routes>
    )
}

export default Routing;