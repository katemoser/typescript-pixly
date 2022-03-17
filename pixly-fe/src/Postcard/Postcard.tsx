import { PostcardProps } from "../Interfaces";

/**
 * 
 * props: 
 * 
 * state:
 * 
 * hierarchy:
 * 
 */

 function Postcard({postcard}: PostcardProps){

    return(
    <div className="Postcard">
        <div className="postcardImageContainer"></div>
        <img src={postcard.url} alt="A postcard"/>
    </div>)
}

export default Postcard;