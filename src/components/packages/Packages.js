import React from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Paragraph from "../layout/Paragraph";

function Packages() {
    return (
        <Container>
            <Row>
                <Col className="col-md-3">
                    <h2>Package 1</h2>
                        <Paragraph text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam." />
                        <Button btn btn-default>Find out more</Button>
                </Col>
                <Col className="col-md-3">
                    <h2>Package 2</h2>
                    <Paragraph text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam." />
                        <Button btn btn-default>Find out more</Button>
                </Col>
                <Col className="col-md-3">
                    <h2>Package 3</h2>
                    <Paragraph text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam." />
                        <Button btn btn-default>Find out more</Button>
                </Col>
                <Col className="col-md-3">
                    <h2>Package 4</h2>
                    <Paragraph text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam." />
                        <Button btn btn-default>Find out more</Button>
                </Col>
            </Row>
        </Container>
    )
}

export default Packages
