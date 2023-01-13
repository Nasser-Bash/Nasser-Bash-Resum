import React,{useState} from 'react'
import {Container,Navbar,Nav} from 'react-bootstrap';
import { Link } from "react-router-dom";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Portofolio from "../pages/Portofolio";
import Resume from "../pages/Resume";
const Mobilemenu = ({isactive ,handleclick,setisactive}) => {
  const [activepage, setactivepage] = useState();
  const openpage=(open)=>{
    setactivepage(open);
  }

  return (
         <div >
           <div className={`text-center main-menu  p-2 ${isactive ===true ? 'active' :''} `}>
            
           
           <span className={`${isactive===true ?'active-portofolio-rorate' : ''} ${activepage==='portofoliopage' ?'active-page':'portofolio-page'} `}>
           <h6 className='title' onClick={()=>openpage('portofoliopage')} >Portofolio page</h6>
                 <span   ><Portofolio openpage={openpage}/> </span>
            </span>

            <span className={`${isactive===true ?'active-resume-rorate' : ''} ${activepage==='resumepage' ?'active-page':'resume-page  '} `}>
                 <h6 className='title' onClick={()=>openpage('resumepage')} >Resum page</h6>
                <span   ><Resume openpage={openpage}/> </span> 
                
                </span>
                
                <span  className={`${activepage==='aboutpage' ?'active-page':'about-page zoomOutRight'} `}>
                <h6 className='title' onClick={()=>openpage('aboutpage')} >About page</h6>
                <span ><About openpage={openpage}/> </span>
                </span>



                <span className='close text-center' onClick={()=>handleclick(false)}>
                        <i><FontAwesomeIcon icon={faXmark}/></i>
                </span>
                
          </div>
                
    </div>
  )
}

export default Mobilemenu