//import React from 'react'
//import {Button} from 'react-bootstrap';

import React from "react";
// import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.css";
import Button from "react-bootstrap/Button";
import img1 from "../assets/img/erika-fletcher-YfNWGrQI3a4-unsplash.jpg";
import img2 from "../assets/img/gabe-pierce-mLqWFEtlIEs-unsplash.jpg";
import img3 from "../assets/img/mourizal-zativa-gNMVpAPe3PE-unsplash.jpg";
import "../assets/css/Home.css";

export default function home() {

    const ingresar = async () => {
        window.location.href = '/ingresarDocente'
    }

    const ingresarAdmin = async () => {
        window.location.href = '/ingresarAdmin'
    }

    const registrarse = async () => {
        setTimeout(() => {
            window.location.href = '/registrarAdmin'
        }, 1600)
    }


    return (
        <div className="Home">
            {/*
            <Button variant="primary" onClick={registrarse}>
              Registrarse
            </Button>
            <Button variant="primary" onClick={ingresar}>
              Ingresar
            </Button>
            */}
            {/*<Container className="Home">*/}
            <div className="Home-Top">
                <Row>
                    <Col className="Home-Top-Col">
                        <Carousel variant="dark" className="my-5">
                            <Carousel.Item>
                                <img
                                    src={img1}
                                    alt="First slide"
                                    className="img-carousel"
                                />
                                <Carousel.Caption>
                                    {/*<h3>First slide label</h3>*/}
                                    {/*<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>*/}
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    src={img2}
                                    alt="Second slide"
                                    className="img-carousel"
                                />
                                <Carousel.Caption>
                                    {/*<h3>Second slide label</h3>*/}
                                    {/*<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>*/}
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    src={img3}
                                    alt="Third slide"
                                    className="img-carousel"
                                />
                                <Carousel.Caption>
                                    {/*<h3>Third slide label</h3>*/}
                                    {/*<p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>*/}
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </Col>
                    <Col className="Home-Top-Col">
                        <div className="d-grid gap-2 m-5">
                            <Button className="Home-Top-Button" variant="info" size="sm" onClick={registrarse}>
                                Crea tu cuenta
                            </Button>
                            <Button className="Home-Top-Button" variant="info" size="sm" onClick={ingresar}>
                                Docente Inicia Sesión
                            </Button>
                            <Button className="Home-Top-Button" variant="info" size="sm" onClick={ingresarAdmin}>
                                Admin Inicia Sesión
                            </Button>
                        </div>
                    </Col>
                </Row>
            </div>
            <div className="Home-Bottom">
                <h1 className="Home-Bottom-Header">¿Quiénes somos?</h1>
                <Row xs={1} md={5} className="g-2 mx-5">
                    <Col>
                        <Card className="Home-Bottom-Card">
                            {/*<Card.Img variant="top" src={img_profile} style={{width:'50%',margin:'auto'}}/>*/}
                            <Card.Body className="Home-Bottom-Card-Body">
                                <Card.Title className="Home-Bottom-Card-Title">Mario</Card.Title>
                                <Card.Text>
                                    Desarrollador
                                </Card.Text>
                            </Card.Body>
                            {/*<Card.Footer>
                            <small className="text-muted">Last updated 3 mins ago</small>
                            </Card.Footer>*/}
                        </Card>
                    </Col>
                    <Col>
                        <Card className="Home-Bottom-Card">
                            {/*<Card.Img variant="top" src={img_profile} style={{width:'50%',margin:'auto'}}/>*/}
                            <Card.Body className="Home-Bottom-Card-Body">
                                <Card.Title className="Home-Bottom-Card-Title">Ariel</Card.Title>
                                <Card.Text>
                                    Desarrollador
                                </Card.Text>
                            </Card.Body>
                            {/*<Card.Footer>
                            <small className="text-muted">Last updated 3 mins ago</small>
                            </Card.Footer>*/}
                        </Card>
                    </Col>
                    <Col>
                        <Card className="Home-Bottom-Card">
                            {/*<Card.Img variant="top" src={img_profile} style={{width:'50%',margin:'auto'}}/>*/}
                            <Card.Body className="Home-Bottom-Card-Body">
                                <Card.Title className="Home-Bottom-Card-Title">Camilo</Card.Title>
                                <Card.Text>
                                    Desarrollador
                                </Card.Text>
                            </Card.Body>
                            {/*<Card.Footer>
                            <small className="text-muted">Last updated 3 mins ago</small>
                            </Card.Footer>*/}
                        </Card>
                    </Col>
                    <Col>
                        <Card className="Home-Bottom-Card">
                            {/*<Card.Img variant="top" src={img_profile} style={{width:'50%',margin:'auto'}}/>*/}
                            <Card.Body className="Home-Bottom-Card-Body">
                                <Card.Title className="Home-Bottom-Card-Title">Miguel</Card.Title>
                                <Card.Text>
                                    Desarrollador
                                </Card.Text>
                            </Card.Body>
                            {/*<Card.Footer>
                            <small className="text-muted">Last updated 3 mins ago</small>
                            </Card.Footer>*/}
                        </Card>
                    </Col>
                    <Col>
                        <Card className="Home-Bottom-Card">
                            {/*<Card.Img variant="top" src={img_profile} style={{width:'50%',margin:'auto'}}/>*/}
                            <Card.Body className="Home-Bottom-Card-Body">
                                <Card.Title className="Home-Bottom-Card-Title">Edison</Card.Title>
                                <Card.Text>
                                    Desarrollador
                                </Card.Text>
                            </Card.Body>
                            {/*<Card.Footer>
                            <small className="text-muted">Last updated 3 mins ago</small>
                            </Card.Footer>*/}
                        </Card>
                    </Col>
                </Row>
            </div>
            {/*</Container>*/}

        </div>
    )
}