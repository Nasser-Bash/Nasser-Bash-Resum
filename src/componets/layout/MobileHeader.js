import React from 'react'
import {Container,Navbar,Nav} from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartSimple } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
function MobileHeader({handleclick}) {
   
  return (
    <div className='mobile-header d-md-none d-block'>
         <Navbar  variant='dark'>
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                 <div className='trigger  p-2' onClick={()=>handleclick(true)}>
                            <span className='tr1 '></span>
                            <span className='tr2'></span>
                            <span className='tr3'></span>
                 </div>
        </Container>
      </Navbar>
    </div>
  )
}

export default MobileHeader