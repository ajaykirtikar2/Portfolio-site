import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Hero(props){

    return(
        <Jumbotron className="bg-transparent jumbotron-fluid p-0">
            <Container fluid={true}>
                <Row className="justify-content-center py-5">
                    <Col md={8} sm={12}>
                        { props.title && <h2 className="display-3 font-weight-light">{props.title}</h2> }
                        { props.subtitle && <h3 className="h-description-text font-weight-light">{props.subtitle}</h3> }
                        { props.text && <p className="h-subdescription-text font-weight-lighter">{props.text}</p> }
                    </Col>
                </Row>
            </Container>
        </Jumbotron>


    );
}

export default Hero;