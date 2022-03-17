import './App.css';
import { BrowserRouter } from "react-router-dom";
import Routing from "./Routing";
import NavBar from "./NavBar";
import { useState, useEffect } from "react";
import PixlyApi from './Api';
import { ImageInfoInterface } from "./Interfaces";


/** App component
 * 
 * props:
 * 
 * state:
 * 
 * hierarchy:
 */
function App() {
  console.log("inside of app");

  const [postcards, setPostcards] = useState<ImageInfoInterface[]>([])

  useEffect(
    function getPostcardsOnMount() {
      console.log("useEffect getPostcardsOnMount")
      async function fetchPostcards() {
        const response = await PixlyApi.getPostcards();
        setPostcards(response);
      }
      fetchPostcards();
    }, []
  );


  //TODO: Need to clean up routes and props etc
  return (
    <div className="App">
      <BrowserRouter >
        <NavBar />
        <Routing postcards={postcards} />
      </BrowserRouter>
    </div>
  );
}

export default App;
