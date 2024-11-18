import { useState } from "react";
import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from './components/TextForm';



function App(){
  const [darkMode, setDarkMode] = useState(false);
  return (
    <>
    <Navbar title="Textutils" mode={darkMode}/>
    <div className="container my-3">
     <TextForm heading="Enter the Text to analyze"/>
    {/* <About></About> */}
    </div>
    
    
    </>    
  );
}

export default App;

