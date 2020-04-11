import React from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Paragraph({ text }) {
    return (
        <Container>
            <Row>
                <Col className="col-md-12">
                    <p>{text}</p>
                </Col>
            </Row>
        </Container>
    )
}

export default Paragraph;
