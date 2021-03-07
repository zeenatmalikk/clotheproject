import logo from "./logo.svg";
import Header from "../src/screens/Header";
import "./App.css";
import Pokemon from "./axios/Pokemon";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login1 from "../src/screens/Login1"


function App() {
  return (
    
   <div>
      <Header />
      <Login1/>
      
      {/* <Pokemon /> */}
     </div>
    
   
  );
}

export default App;
