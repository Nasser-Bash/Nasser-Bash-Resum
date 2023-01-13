import React,{useState} from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight ,faXmark} from "@fortawesome/free-solid-svg-icons";
import ProgressBar from "@ramonak/react-progress-bar";

 
const Resume = ({openpage}) => {
 
 
  const click = (active)=>{
    openpage(active)
    console.log(active);
   }
  return (
    <div className='resumepage'>
       <h2 className='page-title my-5'>Resume Page</h2>
       <span className='close-page text-center  p-2' >
                        <i onClick={()=>click('closeresumpage')}><FontAwesomeIcon icon={faXmark}/></i>
                </span>
       <Container>
              <Row>
                      <Col md={6} className="mb-4">
                              <h3 className='section-title '>Education</h3>
                              <div className='education text-start  '>
                               
                              <div className='education-section bg-dark p-3'>
                                        <h3 className='resume-title ps-1'>Bachelor's degree</h3>
                                        <p className='resume-date text-muted'> <span>Egypt/Mansoura University</span> 11/2017 - 07/2022</p>
                                        <p className='resume-description'>Bachelor's degree in Computers and Information Sciences from Mansoura University</p>
                                  </div>
                               
                                  <div className='education-section bg-dark p-3'>
                                        <h3 className='resume-title ps-1'>Web Design</h3>
                                        <p className='resume-date text-muted'> <span>NEW Horizons institute</span> (08/2021 - 01/2022)</p>
                                        <p className='resume-description'>certificate of achievement 60 HOURS web design course (HTML5-CSS3- JAVASCRIPT-JQUERY-BOOTSTRAP-AJAX)</p>
                                  </div>

                                  <div className='education-section bg-dark p-3'>
                                        <h3 className='resume-title ps-1'>Web Develop</h3>
                                        <p className='resume-date text-muted'> <span>NEW Horizons institute</span> (08/2021 - 01/2022)</p>
                                        <p className='resume-description'>certificate of achievement 53 HOURS web design course (PHP-Laravel - MYSQL) FROM NEW Horizons institute</p>
                                  </div>
                              </div>
                      </Col>  
                      <Col md={6} className="mb-4">
                              <h3 className='section-title'>Experience</h3>
                              <div className='experience bg-danger text-start '>
                              <div className='education-section bg-dark p-3'>
                                        <h3 className='resume-title ps-1'>Front End Developer (Remote)</h3>
                                        <p className='resume-date text-muted'> <span>newvetco</span>04/2022 - 10/2022</p>
                                        <p className='resume-description'>internship in many projects with a team and worked on developing main website using React js</p>
                                  </div>
                              </div>
                      </Col>  
              </Row>    

            {/* <div className='my-skills my-4 '>
              <h3 className='section-title'>My Skills</h3>
             

              <div className='d-flex justify-content-between'>
              <div className='skills '>
                <span >Html5 <ProgressBar  completed={60} /></span>
                <span >CSS3 <ProgressBar completed={60} /></span>
                <span >JavaScript <ProgressBar completed={60} /></span>
                <span >Sass <ProgressBar completed={60} /></span>
                <span >Bootstrap <ProgressBar completed={60} /></span>
                <span >React js <ProgressBar completed={60} /></span>
              </div>
              <div className='skills '>
                <ul>
                <li className='skill'>PHP </li>
                <li className='skill'>MYSQL </li>
                <li className='skill'>Ajax </li>
                <li className='skill'>Rest api </li>
                <li className='skill'>Axios </li>
                <li className='skill'>Git </li>
                </ul>
              </div>

             
                  </div>
                  </div> */}
       </Container>
    </div>
  )
}

export default Resume