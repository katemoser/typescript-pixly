import { Link } from "react-router-dom";
import { PostcardGridProps } from "../Interfaces";
import Postcard from "./Postcard";
import "./PostcardGrid.css";


/**
 * Presentational
 * 
 * Can display all via all route (TODO:) or specific subset based on search params
 * 
 * props: 
 * 
 * state:
 * 
 * hierarchy:
 * 
 */
function PostcardGrid({ postcards }: PostcardGridProps) {
  return (
    <div className="PostcardGrid">
      Use our website and have a nicer day afterwards
      <ul>

        {postcards.map(postcardInfo =>
          <li key={postcardInfo.key}>
            <Link to={`/postcard/${postcardInfo.key}/edit`}>
              <Postcard postcard={postcardInfo} />
            </Link>
          </li>)}
      </ul>
    </div>
  )
}

export default PostcardGrid;