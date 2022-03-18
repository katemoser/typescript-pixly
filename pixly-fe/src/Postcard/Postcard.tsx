import { PostcardProps } from "../Interfaces";
import "./Postcard.css";

/**
 * 
 * props: 
 * 
 * state:
 * 
 * hierarchy:
 * 
 */

function Postcard({ postcard }: PostcardProps) {

    return (
        <div className="Postcard">
            <div className="postcardImageContainer">
                <img src={postcard.url} alt="A postcard" />
            </div>
        </div>)
}

export default Postcard;