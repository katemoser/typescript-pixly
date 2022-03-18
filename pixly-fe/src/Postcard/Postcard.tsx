import { PostcardProps } from "../Interfaces";
import "./Postcard.css";

/** Presentational Component
 * 
 * props: postcard {url, key}
 * 
 * state: None
 * 
 * hierarchy: PostcardGrid -> PostCard
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