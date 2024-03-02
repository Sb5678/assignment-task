import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { AuthServices } from './AuthServices';
import './RegistrationForm.css'; 

const RegistrationForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await AuthServices.register(formData);
            console.log(response.data);
        } catch (error) {
            console.error('Registration failed:', error);
        }
    };

    return (
        <Container>
            <Row className="justify-content-md-center mt-5">
                <Col md="6">
                    <Form onSubmit={handleSubmit} className="custom-form">
                        <Form.Group controlId="name">
                            <Form.Label className="center-label">Name</Form.Label>
                            <Form.Control type="text" name="name" onChange={handleChange} />
                        </Form.Group>
                        <Form.Group controlId="email">
    <Form.Label className="center-label">Email</Form.Label>
    <Form.Control type="email" name="email" onChange={handleChange} className="email-input" />
</Form.Group>
<Form.Group controlId="password">
    <Form.Label className="center-label">Password</Form.Label>
    <Form.Control type="password" name="password" onChange={handleChange} className="password-input" />
</Form.Group>
<Button variant="primary" type="submit" className="register-button">
    Register
</Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default RegistrationForm;
