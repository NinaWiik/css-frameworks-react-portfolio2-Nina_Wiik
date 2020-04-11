import React from 'react';
import PropTypes from 'prop-types';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Heading({ title }) {
    return (
        <Container>
            <Row>
                <Col className="col-md-12">
                    <h1>{title}</h1>
                </Col>
            </Row>
        </Container>
    )
}

Heading.propTypes = {
    title: PropTypes.string.isRequired
};

export default Heading



