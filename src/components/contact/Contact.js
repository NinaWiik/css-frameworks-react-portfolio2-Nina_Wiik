import React, { useState } from 'react';
import Heading from "../layout/Heading";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import ErrorMessage from "./ErrorMessage";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Paragraph from "../layout/Paragraph";

const schema = yup.object().shape({
    firstName: yup.string()
    .required("First name is required"),
    lastName: yup.string()
    .required("Last name is required"),
    phone: yup.number()
    .typeError("A phone number is reqired")
    .min(8, "The number should include minimun 8 numbers"),
    email: yup.string()
    .email("Please enter a valid email")
    .required("Email is required")
});

function Contact() {

    const [validated, setValidated] = useState(false);
    const { register, handleSubmit, errors } = useForm({
        validationSchema: schema
    });

    function onSubmit(data) {
        console.log("data", data);
        setValidated(true);
    }

    return (
        <Container>
            <Row className="justify-content-md-center">
                <Col className="col-md-6">
                    <Heading title="Contact Us" />
                    <Paragraph text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. " />
                    { validated && <div className="validationForm">Form validated</div> }
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <Form.Group className="firstName">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control name="firstName" placeholder="Enter your first name" ref={register} />
                            {errors.firstName && <ErrorMessage>{errors.firstName.message}</ErrorMessage>}
                        </Form.Group>
                        <Form.Group className="lastName">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control name="lastName" placeholder="Enter your last name" ref={register} />
                            {errors.lastName && <ErrorMessage>{errors.lastName.message}</ErrorMessage>}
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Phone</Form.Label>
                            <Form.Control name="phone" placeholder="Enter your phone number" ref={register} />
                            {errors.phone && <ErrorMessage>{errors.phone.message}</ErrorMessage>}
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Email</Form.Label>
                            <Form.Control name="email" placeholder="Enter your email" ref={register} />
                            {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
                        </Form.Group>
                        <Button type="submit">Submit</Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

export default Contact;
