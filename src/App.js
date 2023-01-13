import React , {useState,useEffect} from 'react'
import Header from "./componets/layout/Header";
import MobileHeader from "./componets/layout/MobileHeader";
import Mobilemenu from "./componets/layout/Mobilemenu";
import Footer from "./componets/layout/Footer";
import Home from "./componets/pages/Home";
import About from "./componets/pages/About";
import Contact from "./componets/pages/Contact";
import Portofolio from "./componets/pages/Portofolio";
import Resume from "./componets/pages/Resume";
import { BrowserRouter, Route , Routes } from "react-router-dom";
function App() {
  const [isactive, setisactive] = useState();
  const [isLoading, setLoading] = React.useState(false);
  const openmenu=(active)=>{
    setisactive(active);
  }
  
 useEffect(() => {
  setLoading(true);
  setTimeout(() => {
    setLoading(false);
  }, 2000);

 }, []);

 return isLoading ? (
<div className='loader'>
        <span id='loader'><img src='/images/NB.png'/></span>
    </div>
):(  <div className="App">
      
<BrowserRouter>
<Header handleclick={openmenu}/>
<Mobilemenu isactive={isactive} handleclick={openmenu} setisactive={setisactive}/>
<Routes>
  <Route path="/" element={<Home/>}></Route>
  <Route path="/About" element={<About/>}></Route>
  <Route path="/Contact" element={<Contact/>}></Route>
  <Route path="/Resume" element={<Resume/>}></Route>
  <Route path="/Portofolio" element={<Portofolio/>}></Route>
</Routes>
</BrowserRouter>
</div>)
}

export default App;
