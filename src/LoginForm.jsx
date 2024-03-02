import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { AuthServices } from './AuthServices';

const LoginForm = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await AuthServices.login(formData);
            console.log(response.data);
        } catch (error) {
            console.error('Login failed:', error);
        }
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" name="email" onChange={handleChange} />
            </Form.Group>
            <Form.Group controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name="password" onChange={handleChange} />
            </Form.Group>
            <Button variant="primary" type="submit">
                Login
            </Button>
        </Form>
    );
};

export default LoginForm;
