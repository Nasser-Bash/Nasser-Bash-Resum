import React,{useState} from 'react'
import { Container, Row ,Col} from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaptopCode ,faBrush,faCube,faXmark} from "@fortawesome/free-solid-svg-icons";
import Zoom from "react-reveal/Zoom";
const Portofolio = ({openpage}) => {
  const items = [
    {id:1 , title:'Nasser Store' , category:'Html5&CSS3&JS' , url:'http://nasserbashstore.000webhostapp.com' , image:'nasserbashstore.png'},
    {id:2 , title:'Gallery' , category:'Html5&CSS3&JS' , url:'https://nassergallery.000webhostapp.com' , image:'Web capture_14-9-2022_3408_nassergallery.000webhostapp.com.jpeg'},
    {id:3 , title:'Portofolio' , category:'Html5&CSS3&JS' , url:'http://nasserbashstore.000webhostapp.com' , image:'nasserbashstore.png'},
    {id:4 , title:'Newspaper App' , category:'React js' , url:'https://mynewspaperapp.000webhostapp.com' , image:'mynewspaperapp.000webhostapp.com.jpeg'},
    {id:5 , title:'Resturants' , category:'React js' , url:'https://resturantsapp.000webhostapp.com' , image:'resturantsapp.jpeg'},
    {id:6 , title:'kolaycakonus' , category:'Wordpress' , url:'https://kolaycakonus.com' , image:'kolaycakonus.jpeg'},
    {id:7 , title:'Beautybonanza' , category:'Wordpress' , url:'https://beautybonanza.net/wp' , image:'beautybonanza.net.jpeg'},
    {id:8 , title:'Salee33' , category:'Wordpress' , url:'https://salee33.com' , image:'salee33.com.jpeg'},
    {id:9 , title:'Quiz App' , category:'Html5&CSS3&JS' , url:'https://nasserquizapp.000webhostapp.com' , image:'quizapp.jpeg'}
  ]
  const [projects, setprojects] = useState(items);
  const categories = ['All' , ...new Set(items.map((i)=>i.category))]
  const [active, setactive] = useState(0);
    const fillteritems=(cate,active)=>{
      if(cate==='All'){
        setprojects(items)
      }else{
        const fillter = items.filter((item)=>item.category===cate);
        setprojects(fillter)
} 
setactive(active)  
   }
   const click = (active)=>{
    openpage(active)
    console.log(active);
   }

  return (
    <div className='portofoliopage'>
          <h2 className='page-title my-5'>Portofolio</h2>
          <span className='close-page text-center' >
          <i onClick={()=>click('closeportofoliopadge')}><FontAwesomeIcon icon={faXmark}/></i>
                </span>
      <Container >
        <div className='portofolio-menu navbar text-center px-3'>
            <ul className='menu  list-unstyled  '>
              {
                categories.map((category,i)=>{
                  return(
                      <li className={`nav-item me-3 mb-2 d-inline-block p-2 rounded ${active===i ?'active-fillter' : ''}`} onClick={()=>fillteritems(category,i)}>{category}</li>
                  )
                })
              }
            </ul>
        </div>
        <Container>
        <Row >
          {
            projects.map((item)=>{
              return(
               
                <Col lg={4} sm={6} className=''>
                    <a href={item.url}>
                    <Zoom>
                <Card key={item.id}  className="p-3 mx-auto mb-3 ">
            <Card.Body className=''>
              <Card.Title>{item.title}</Card.Title>
              <div className='img-border'>
              <Card.Img variant="top" className='' src={`images/${item.image}`} />
              </div>
            </Card.Body>
                </Card>
                </Zoom>
                </a>
              </Col>
              
              )
            })
          }
         

        
    </Row>
    </Container>
    </Container>
    </div>
  )
}

export default Portofolio