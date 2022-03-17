import { PostcardHandlerProps } from "../Interfaces";
import PostcardGrid from "./PostcardGrid";

/**
 * Logical
 * 
 * Will have state and AJAX and other Postcard logic encapsulated here
 * 
 * props: 
 * 
 * state:
 * 
 * hierarchy:
 * 
 */
 function PostcardHandler({postcards}: PostcardHandlerProps){
    return(
    <div className="PostcardHandler">
      <PostcardGrid postcards={postcards}/>
    </div>
    )
}

export default PostcardHandler;