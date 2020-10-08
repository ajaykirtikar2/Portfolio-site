import React from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

function Footer(){

    return(
        <footer className="mt-5">
            <Container fluid={true}>
                <Row className="border-top justify-content-between p-3">
                    <Col className="p-0 font-weight-light" small={12}>
                        Ajay Kirtikar
                    </Col>
                    <Col className="p-0 d-flex justify-content-end font-weight-light" md={5}>
                        Made by Ajay Kirtikar 2020.
                    </Col>
                </Row>
            </Container>
        </footer>
    );

}

export default Footer;