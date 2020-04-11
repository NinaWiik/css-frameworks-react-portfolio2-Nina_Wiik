import React from 'react'
import Container from "react-bootstrap/Container";

function FooterPage() {
    return (
        <Container fluid>
            <p className="footer">Copyright &copy; {new Date().getFullYear()} </p>
        </Container>
    )
}

export default FooterPage
