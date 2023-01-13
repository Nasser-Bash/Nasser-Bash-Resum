import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { faFacebookF,faTwitter,faLinkedin,faGithub,faInstagram,faHtml5,faWordpressSimple } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaptopCode ,faBrush,faCube,faXmark} from "@fortawesome/free-solid-svg-icons";
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
const About = ({openpage}) => {
 const click = (active)=>{
  openpage(active)
  console.log(active);
 }
  return (
    <div className=' about  '>
      <span className='close-page text-center  p-2' >
                        <i onClick={()=>click('closeaboutpadge')}><FontAwesomeIcon icon={faXmark}/></i>
                </span>
            <h2 className='page-title my-5 '>About Page</h2>
            
            <Container>
            <div className='who-i-am d-lg-flex d-block '>
              <div className='w-100'>
                <img className='rounded' src='/images/nasser-bash.jpg'></img>
                </div>
                <div className='about-me  p-5 text-start'>
                <Fade>
                    <h4>Who am i ?</h4>
                    <h2 className='text-white'>I'm Nasser Bash , a Front End Developer and Web Designer</h2>
                    <p className='text-muted'>I am a freelancer based in the Egypt and i have been building many websites and designs for years.</p>
                    </Fade>
                    <hr/>
                    <div className='info d-lg-flex d-block justify-content-between text-muted'>
                      <Fade>
                      <span>
                        <h5 > <span className='text-white'> Name : </span>Nasser Bash </h5>
                        <h5> <span className='text-white'>Age :</span> 24 </h5>
                        </span>
                        </Fade>
                        <Fade>
                        <span>
                        <h5><span className='text-white'>Email : </span><a className='email' href='mailto:nasser9959@gmail.com'>nasser9959@gmail.com</a> </h5>
                        <h5><span className='text-white'>from : </span>Syria </h5>
                        </span>
                        </Fade>
                    </div>
                    
                    <div className='social my-4  d-sm-flex d-block justify-content-between p-2'>
                   
                    <Button className='cv rounded-pill p-2  mb-2' href='https://drive.google.com/file/d/1l28YV1aKOj7nd_1AbcMuDpa6v6wkdP9-/view?usp=share_link'> Download cv</Button> 
                   
                     <div className='my-auto '>
                     <i className='mx-1'> <a href='https://www.facebook.com/nasser.ibrahim.56884'> <FontAwesomeIcon icon={faFacebookF}/></a></i>
                      <i className='mx-1'> <a href='https://www.linkedin.com/in/nasser-bash-61a363185/'> <FontAwesomeIcon icon={faLinkedin}/></a></i>
                      <i className='mx-1'> <a href='https://github.com/Nasser-Bash'> <FontAwesomeIcon icon={faGithub}/></a></i>
                      <i className='mx-1'> <a href='https://www.instagram.com/nasserbash98/'> <FontAwesomeIcon icon={faInstagram}/></a></i>
                     
                     </div>
                      
                      </div>
                </div>
                
            </div>
            <div className='my-services my-5'>
            <Fade> <h1 className='my-3 section-title'>My Services</h1></Fade>
                <Container>
                <Row>

                
                  <Col lg={4} sm={6} className="mb-3">
                 
                        <div className='p-3 service'>
                        <Zoom>
                       <i> <FontAwesomeIcon icon={faHtml5} /></i>
                            <h4>UI Design</h4>
                            <p className='text-muted'>Give your website a smooth experience by the latest technologies</p>
                            </Zoom>
                        </div>
                        
                  </Col>
                
                  
                  <Col lg={4} sm={6} className="mb-3">
                
                        <div className='p-3 service'>
                        <Zoom>
                        <i> <FontAwesomeIcon icon={faCube}/></i>
                            <h4>Responsive Design</h4>
                            <p className='text-muted'>Make your website looks good in all devices</p>
                            </Zoom>
                        </div>
                       
                  </Col>
                  <Col lg={4} sm={6} className="mb-3">
                  
                        <div className='p-3 service'>
                        <Zoom>
                        <i> <FontAwesomeIcon icon={faWordpressSimple}/></i>
                            <h4>Web Developer</h4>
                            <p className='text-muted'>Organize your website using best and simple technologies</p>
                            </Zoom>
                        </div>
                       
                  </Col>
                  <Col lg={4} sm={6} className="mb-3">
                 
                        <div className='p-3 service'>
                        <Zoom>
                        <i> <FontAwesomeIcon icon={faLaptopCode}/></i>
                            <h4>Clean Code</h4>
                            <p className='text-muted'>design and develop your website using organized and simple code</p>
                            </Zoom>
                        </div>
                        
                  </Col>
                  <Col lg={4} sm={6} className="mb-3"> 
                 
                        <div className='p-3 service'>
                        <Zoom>
                        <i> <FontAwesomeIcon icon={faBrush}/></i>
                            <h4>Motion Design</h4>
                            <p className='text-muted'>Make your website smoothy and motion graphic design</p>
                            </Zoom>
                        </div>
                       
                  </Col>
                </Row>
                </Container>
            </div>
            </Container>
    </div>
  )
}

export default About