import React from 'react'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

function PackagesPage() {
    return (
        <Container>
            <Row>
                <Col md-12>
                    <h2>Packages</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
                </Col>
            </Row>
            <Row>
                <Col md-4 className="packCard">
                    <h2>Package 1</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
                        <Button class="btn btn-default">Find out more</Button>
                </Col>
                <Col md-4 className="packCard">
                    <h2>Package 2</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
                        <Button class="btn btn-default">Find out more</Button>
                </Col>
                <Col md-4 className="packCard">
                    <h2>Package 3</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
                        <Button class="btn btn-default">Find out more</Button>
                </Col>
            </Row>
            <Row>
                <Col md-4 className="packCard">
                    <h2>Package 4</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
                        <Button class="btn btn-default">Find out more</Button>
                </Col>
                <Col md-4 className="packCard">
                    <h2>Package 5</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
                        <Button class="btn btn-default">Find out more</Button>
                </Col>
                <Col md-4 className="packCard">
                    <h2>Package 6</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
                        <Button class="btn btn-default">Find out more</Button>
                </Col>
            </Row>
            <Row>
                <Col md-4 className="packCard">
                    <h2>Package 7</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
                        <Button class="btn btn-default">Find out more</Button>
                </Col>
                <Col md-4 className="packCard">
                    <h2>Package 8</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
                        <Button class="btn btn-default">Find out more</Button>
                </Col>
                <Col md-4 className="packCard">
                    <h2>Package 9</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
                        <Button class="btn btn-default">Find out more</Button>
                </Col>
            </Row>
            
        </Container>
    )
}

export default PackagesPage
