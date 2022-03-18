import { PostcardHandlerProps } from "../Interfaces";
import PostcardGrid from "./PostcardGrid";

/**
 * Logical
 * 
 * Will have state and AJAX and other Postcard logic encapsulated here
 * 
 * props: postcards [{url, key}, {...}, ...]
 * 
 * state: none
 * 
 * hierarchy: App-> Routing -> PostcardHandler -> PostcardGrid
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