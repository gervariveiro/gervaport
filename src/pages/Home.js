import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
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

        <section className="filosofia py-4 bg-primary text-center text-white fluid" >
            <Container fluid>
                <Row>
                    <Col>
                        <img src={GervaPhoto} alt="foto" width="260" height="auto"
                        className="img-fluid rounded-circle my-3 mb-4"/>
                    </Col>
                    <Col className="col-12 text-center">
                        <h3 className="mb-3"> About Me</h3>
                        <p className="h5 mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit eum corporis fugit 
                            modi ipsam asperiores molestias, ut qui repudiandae architecto dolore quibusdam labore 
                            exercitationem. Reprehenderit natus modi nesciunt aperiam repellat?</p>
                        <p className="h4 pb-2">- Gervasio Riveiro</p>
                        <Button variant="primary" size="lg" href="#">My Resume</Button>
                    </Col>
                </Row>
            </Container>
        </section>

        <section>
            <Container>
                <Row classname="text-md-center">
                    <h2>My Work</h2>
                    <Col col md={4} className="mb-3 mb-lg-0">
                        <Card>
                            <Card.Img variant="top" src={F1Img} alt="f1imagen"/>
                            <div className="card-body">
                                <Card.Title>API for F1</Card.Title>
                                <Card.Text>A MERN Stack proyect about Formula 1 in 2022.</Card.Text>
                                <a href="https://f1-gervaproyect.herokuapp.com/" className="btn btn-primary">Link to Website</a>
                            </div>
                        </Card>
                    </Col>
                </Row>
            </Container>

            <Container>
                <Row classname="text-md-center">
                <Col col md={4} className="mb-3 mb-lg-0">
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



<section className='seccion2' id='mywork'>
                
                <ul className='worklist'>
                    <li className='work'>
                        <h3>Api For F1</h3>
                        <a href="https://f1-gervaproyect.herokuapp.com" target="_blank">
                            <img src={F1Img} className='WorkImg'></img>
                            <p>A MERN (mongodb, express, nodejs) proyect about Formula 1 in 2022</p>
                        </a>
                    </li>
                    <li className='work'>
                        <h3>Website for turistic farm</h3>
                        <a href="https://chacra-gervaproyect.herokuapp.com" target="_blank">
                            <img src={FarmImg} className='WorkImg'></img>
                            <p>A full nodejs proyect about a turistic proyect</p>
                        </a>
                    </li>
                </ul>
</section>
        
        <section className='seccion1' id='myskills'>
            <button className='myresume'>
                <a href="https://f1backend.herokuapp.com/downloadcv" target="_blank">
                    <FontAwesomeIcon icon={faFileArrowDown} className='downloadIcon' />
                    My Resume
                </a>
            </button>
            <h2 className='title2'>My Skills</h2>
            <ul className='skills'>
                <li className='skillicon'>
                    <img src={HtmlIcon} className='imgicon'></img>
                    HTML
                </li>
                <li className='skillicon'>
                    <img src={CssIcon} className='imgicon'></img>
                    CSS
                </li>
                <li className='skillicon'>
                    <img src={DbIcon} className='imgicon'></img>
                    MONGDB-MYSQL
                </li>
                <li className='skillicon3'>
                    <img src={NodeIcon} className='imgicon'></img>
                    NODEJS
                </li>
                <li className='skillicon'>
                    <img src={JsIcon} className='imgicon'></img>
                    JAVASCRIPT
                </li>
                <li className='skillicon2'>
                    <img src={ReactIcon} className='imgicon'></img>
                    React
                </li>
            </ul>
        </section>

        <h2 className='title2' id='talk'>Let`s Talk</h2><ul className='redes'>
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
            </ul><form className='formcontact' action="https://f1backend.herokuapp.com/send-emailportfolio" method="POST">
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