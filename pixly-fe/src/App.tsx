import './App.css';
import {BrowserRouter} from "react-router-dom";
import Routes from "./Routes";
import NavBar from "./NavBar";
import {useState} from "react";


/** App component
 * 
 * props:
 * 
 * state:
 * 
 * hierarchy:
 */
function App() {

  const [postcard, setPostcard] = useState(null);

  //make an async function that can make axios request and then send down to postcard as props
  return (
    <div className="App">
      <BrowserRouter >
        <NavBar />
        <Routes />
      </BrowserRouter>
    </div>
  );
}

export default App;
