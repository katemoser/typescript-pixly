import { PostcardGridProps } from "../Interfaces";
import Postcard from "./Postcard";



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
 function PostcardGrid({postcards}: PostcardGridProps){
    return(
    <div className="PostcardGrid">
      Use our website and have a nicer day afterwards
      <Postcard postcard={PLACEHOLDER}/>
    </div>
    )
}

export default PostcardGrid;