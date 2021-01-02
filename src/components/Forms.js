import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { Form, Button, Row, Col } from 'react-bootstrap';

export function EmailForm() {
    function sendEmail(e) {
        e.preventDefault();
        emailjs.sendForm('service_s98zskc', 'template_z3d9ajg', e.target, 'user_EngDUayYS8iZ5uyXLsnzZ')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
    }

    const [validated, setValidated] = useState(false);
    const handleSubmit = (e) => {
        const form = e.currentTarget;
        if (form.checkValidity() === false) {
            e.preventDefault();
            e.stopPropagation();
        }
        setValidated(true);
    };

    return (
        <Form className="email-form" onSubmit={ (sendEmail, handleSubmit) } noValidate validated={ validated }>
            <Form.Group controlId="formBasicEmail">
                <Form.Label />
                <Form.Control required type="text" placeholder="First Name" name="first_name"/>
                <Form.Control.Feedback type="invalid">
                    This can't be blank. Please provide your First Name.
                </Form.Control.Feedback>

                <Form.Label />
                <Form.Control required type="text" placeholder="Last Name" name="last_name"/>
                <Form.Control.Feedback type="invalid">
                    This can't be blank. Please provide your Last Name.
                </Form.Control.Feedback>

                <Form.Label />
                <Form.Control required type="text" placeholder="Subject" name="subject"/>
                <Form.Control.Feedback type="invalid">
                    This can't be blank. Please provide a subject.
                </Form.Control.Feedback>

                <Form.Label />
                <Form.Control required type="email" placeholder="Email" name="email"/>
                <Form.Control.Feedback type="invalid">
                    This can't be blank. Please provide a valid Email Address.
                </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label />
                <Form.Control required as="textarea"  placeholder="Type your message here..." name="message"/>
                <Form.Control.Feedback type="invalid">
                    This can't be blank. Please provide a message.
                </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Row}>
                <Col xs={{ span: 10, offset: 4 }} md={{ span: 10, offset: 5 }} >
                    <Button variant="primary" type="submit" size="lg">Submit</Button>
                </Col>
            </Form.Group>
        </Form>
    )
}