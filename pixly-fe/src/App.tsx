import './App.css';
import { BrowserRouter } from "react-router-dom";
import Routing from "./Routing";
import NavBar from "./NavBar";
import { useState, useEffect } from "react";
import PixlyApi from './Api';


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

  const [postcard, setPostcard] = useState<string>("");

  useEffect(
    function getDemoPostcardOnMount() {
      console.log("Inside use effect fn for demo")
      async function fetchDemoPostcard() {
        console.log("Inside async fn for demo")

        const demoURL = await PixlyApi.getDemoPostcard();
        console.log("demoURL", demoURL);

        setPostcard(demoURL);
      }
      fetchDemoPostcard();
    },
    []
  );


  return (
    <div className="App">
      <BrowserRouter >
        <NavBar />
        <Routing demoURL={postcard}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
