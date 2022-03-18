import { NavLink } from "react-router-dom";
import "./NavBar.css";

/**NavBar Component for navigating through the site
 * 
 * props: none
 * 
 * state: none
 * 
 * hierarchy: App -> NavBar
 * 
 */
 function NavBar(){
    return( <nav className="Pixly-NavBar">
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/postcards"}>Postcard Collection</NavLink>
        <NavLink to={"/form"}>Submit Postcard</NavLink>
    </nav>
    )
}

export default NavBar;