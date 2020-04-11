import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Banner1 from "../../assets/banner1.jpg";
import Banner2 from "../../assets/banner2.jpg";
import Banner3 from "../../assets/banner3.jpg";
import Container from "react-bootstrap/Container";

function Slider() {
    return (
        <Container fluid>
        <Carousel>
            <Carousel.Item>
            <img
                className="d-block w-100"
                src={Banner1}
                alt="First slide"
            />
            </Carousel.Item>

            <Carousel.Item>
            <img
                className="d-block w-100"
                src={Banner2}
                alt="Second slide"
            />
            </Carousel.Item>
            <Carousel.Item>
            <img
                className="d-block w-100"
                src={Banner3}
                alt="Third slide"
            />
            </Carousel.Item>
        </Carousel>
        </Container>
    )
}

export default Slider;
