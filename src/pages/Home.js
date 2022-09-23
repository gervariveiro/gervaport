import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import NavigateBar from '../components/Navbar.js';
import GervaPhoto from '../assets/gervaphoto1.jpg';
import HtmlIcon from '../assets/htmlicon.png';
import CssIcon from '../assets/cssicon.png';
import DbIcon from '../assets/dbicon.png';
import NodeIcon from '../assets/nodeicon.png';
import ReactIcon from '../assets/reacticon.png';
import JsIcon from '../assets/jsicon.png';
import F1Img from '../assets/f1photo.jpg';
import FarmImg from '../assets/farmphoto.jpg';
import TwitchIcon from '../assets/twitchicon.png';
import GitHubIcon from '../assets/githubicon.png';
import FaceIcon from '../assets/faceicon.png';
import LinkedIcon from '../assets/linkedicon.png';
import swal from 'sweetalert';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faFileArrowDown} from '@fortawesome/free-solid-svg-icons';


function Home () {

    const mostrarAlert = () => { 
        swal({
            title: "Your message was sent",
            icon: "success",
            button: "Close"
        })
    }

    return (
    <><NavigateBar />

        <section className="filosofia py-4 bg-primary text-center text-white fluid" id="#aboutme">
            <Container fluid>
                <Row>
                    <Col>
                        <Image src={GervaPhoto} alt="foto" width="260" height="auto"
                        className="img-fluid rounded-circle my-3 mb-4"/>
                    </Col>
                    <Col className="col-12 text-center">
                        <h3 className="mb-3"> About Me</h3>
                        <p className="h5 mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit eum corporis fugit 
                            modi ipsam asperiores molestias, ut qui repudiandae architecto dolore quibusdam labore 
                            exercitationem. Reprehenderit natus modi nesciunt aperiam repellat?</p>
                        <p className="h4 pb-2">- Gervasio Riveiro</p>
                        <Button variant="light" size="lg" href="https://f1backend.herokuapp.com/downloadcv">
                            My Resume
                            <FontAwesomeIcon icon={faFileArrowDown} className='downloadIcon' />
                        </Button>
                    </Col>
                </Row>
            </Container>
        </section>

        <section>
            <Container className="m-5">
                <Row classname="text-md-center">
                    <h3 className="mb-4">My Work</h3>
                    <Col col md={6} className="mb-3 mb-lg-0">
                        <Card>
                            <Card.Img variant="top" src={F1Img} alt="f1imagen"/>
                            <div className="card-body">
                                <Card.Title>API for F1</Card.Title>
                                <Card.Text>A MERN Stack proyect about Formula 1 in 2022.</Card.Text>
                                <a href="https://f1-gervaproyect.herokuapp.com/" className="btn btn-primary">Link to Website</a>
                            </div>
                        </Card>
                    </Col>
                    <Col col md={6} className="mb-3 mb-lg-0">
                        <Card>
                            <Card.Img variant="top" src={FarmImg} alt="f1imagen"/>
                            <div className="card-body">
                                <Card.Title>Website for turistic farm</Card.Title>
                                <Card.Text>A full nodejs proyect about a turistic proyect.</Card.Text>
                                <a href="https://chacra-gervaproyect.herokuapp.com" className="btn btn-primary">Link to Website</a>
                            </div>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </section>

        
        <section>
            <h3 className="m-5">My Skills</h3>
            <Container className='d-flex flex-row justify-content-md-adround'>
                <Row >
                    <Col col md={6}>
                        <ul className='skill'>
                            <li className='mb-4'>
                                <img src={HtmlIcon} width="50" height="50"></img>
                                HTML
                            </li>
                            <li className='mb-4'>
                                <img src={CssIcon} width="50" height="50"></img>
                                CSS
                            </li>
                            <li className='mb-4'>
                                <img src={DbIcon} width="50" height="50"></img>
                                MONGDB-MYSQL
                            </li>
                            <li className='mb-4'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="#042C4B" class="bi bi-bootstrap-fill" viewBox="0 0 16 16">
                                    <path d="M6.375 7.125V4.658h1.78c.973 0 1.542.457 1.542 1.237 0 .802-.604 1.23-1.764 1.23H6.375zm0 3.762h1.898c1.184 0 1.81-.48 1.81-1.377 0-.885-.65-1.348-1.886-1.348H6.375v2.725z"/>
                                    <path d="M4.002 0a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4V4a4 4 0 0 0-4-4h-8zm1.06 12V3.545h3.399c1.587 0 2.543.809 2.543 2.11 0 .884-.65 1.675-1.483 1.816v.1c1.143.117 1.904.931 1.904 2.033 0 1.488-1.084 2.396-2.888 2.396H5.062z"/>
                                </svg>
                                Bootstrap
                            </li>
                        </ul>
                    </Col>
                </Row>
                <Row>
                    <Col col md={6}>
                        <ul className='skill'>
                            <li className='mb-4'>
                                <img src={NodeIcon} width="50" height="50"></img>
                                NODEJS
                            </li>
                            <li className='mb-4'>
                                <img src={JsIcon} width="50" height="50"></img>
                                JAVASCRIPT
                            </li>
                            <li className='mb-4'>
                                <img src={ReactIcon} width="50" height="50"></img>
                                React
                            </li>
                            
                        </ul>
                    </Col>
                </Row>
            </Container>
            
        </section>
        <section>
            <h3 className="m-5">Contact Me</h3>
            <Container>
                <Row>
                    <Col>
                        <ul className='redes'>
                            <li className=''>
                            <a href='https://www.linkedin.com/in/gervasio-riveiro-martínez-36a8b0234/' target="_blank">
                                <img src={LinkedIcon} className='imgicon'></img>
                            </a>
                        </li>
                        <li className=''>
                            <a href='https://www.facebook.com/gervasio.riveiro/' target="_blank">
                                <img src={FaceIcon} className='imgicon'></img>
                            </a>
                        </li>
                        </ul>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <ul>
                            <li className=''>
                                <a href='https://github.com/gervariveiro' target="_blank">
                                    <img src={GitHubIcon} className='imgicon'></img>
                                </a>
                            </li>
                            <li className=''>
                                <a href='https://www.twitch.tv/rashgaminguy/' target="_blank">
                                    <img src={TwitchIcon} className='imgicon'></img>
                                </a>
                            </li>
                        </ul>
                    </Col>
                </Row>
                    
            </Container>
        </section>
                
                <form className='formcontact' action="https://f1backend.herokuapp.com/send-emailportfolio" method="POST">
                <label>
                    Name:
                    <input type="text" name="name" placeholder='Name' />
                </label>
                <label>
                    Email:
                    <input type="text" name="email" placeholder='Email' />
                </label>
                <label className='labelMessage'>
                    Menssage:
                    <textarea className='mensaje' type="text" name="message" placeholder='Write your message' />
                </label>
                <button className='buttonsend' type="submit" value="Enviar" onClick={() => mostrarAlert()}>Send</button>
            </form></>
                

    )

}

export default Home;