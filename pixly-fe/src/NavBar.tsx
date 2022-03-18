import { NavLink } from "react-router-dom";

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
    return( <nav>
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/postcards"}>Postcard Collection</NavLink>
        <NavLink to={"/"}>Postcard Collection</NavLink>
    </nav>
    )
}

export default NavBar;