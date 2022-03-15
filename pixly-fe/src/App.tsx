import './App.css';
import {BrowserRouter} from "react-router-dom";
import Routes from "./Routes";
import NavBar from "./NavBar";


/** App component
 * 
 * props:
 * 
 * state:
 * 
 * hierarchy:
 */
function App() {
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
