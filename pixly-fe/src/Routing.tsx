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
    demoURL: string
}

function Routing({demoURL}: RoutesProps){
    return(
        <Routes>
            <Route path="/">
                <Postcard demoURL={demoURL}/>
            </Route>
        </Routes>
    )
}

export default Routing;