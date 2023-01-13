import React,{useState,useEffect} from 'react'
import { faFacebookF,faTwitter,faLinkedin,faGithub,faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Typical from 'react-typical'

const Home = () => {
  // const [typing, settyping] = useState();
  
  // const text = ()=>{
  //   setTimeout(() => {
  //     settyping( "Web Designer")
  //   }, 0);
  //   setTimeout(() => {
  //     settyping( "Web Developer")
  //   }, 4300);
  // }
 
  // useEffect(() => {
  //   for (let index = 0; index < 1000; index++) {
  //     text();
  //     continue;
  //   }
   
  // }, []);

 
  return (
    <div className='home' style={{backgroundImage:'url(/images/nasserbash.png)'}}>
                <div className='content  text-center p-2' >
                
                <div className='imfo '>
                
                <span className='who-iam '>
                
                        <h3>Nasser Bash</h3>
                          <h6 className='text-2'>
                            I am a <Typical
        steps={['Web Desginer', 2000, 'Web Developer', 2000,]}
        loop={Infinity}
        wrapper="b"
      /> </h6>
                        </span>
                </div>
                
                        
                </div>
                <div className='social  p-3'>
                    <ul>
                      <li> <a href='https://www.facebook.com/nasser.ibrahim.56884'> <FontAwesomeIcon icon={faFacebookF}/></a></li>
                      <li> <a href='https://www.linkedin.com/in/nasser-bash-61a363185/'> <FontAwesomeIcon icon={faLinkedin}/></a></li>
                      <li> <a href='https://github.com/Nasser-Bash'> <FontAwesomeIcon icon={faGithub}/></a></li>
                      <li> <a href='https://www.instagram.com/nasserbash98/'> <FontAwesomeIcon icon={faInstagram}/></a></li>
                      <li> <a href='https://twitter.com/nasser9959'> <FontAwesomeIcon icon={faTwitter}/></a></li>
                       </ul>
                </div>

    </div>
  )
}

export default Home