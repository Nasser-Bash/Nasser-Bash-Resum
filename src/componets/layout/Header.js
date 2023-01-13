import React from 'react'
import {Container,Navbar,Nav} from 'react-bootstrap';
import { Link } from "react-router-dom";

const Header = ({handleclick}) => {
  return (
    <div className='header '>
       <Navbar  variant='dark'>
        <Container>
          <Navbar.Brand  ><Link ><img style={{width:"70px"}} src='/images/NB.png'/></Link></Navbar.Brand>
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

export default Header