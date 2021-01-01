import React from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';

export function EmailForm() {
    return (
        <Form className="email-form">
            <Form.Group controlId="formBasicEmail">
                <Form.Label />
                <Form.Control type="first-name" placeholder="First Name" />

                <Form.Label />
                <Form.Control type="last-name" placeholder="Last Name" />

                <Form.Label />
                <Form.Control type="subject" placeholder="Subject" />

                <Form.Label />
                <Form.Control type="email" placeholder="Email" />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label />
                <Form.Control as="textarea" rows={3} placeholder="Type your message here..."/>
            </Form.Group>
            <Form.Group as={Row}>
                <Col xs={{ span: 10, offset: 2 }} md={{ span: 10, offset: 4 }} >
                    <Button variant="primary" type="submit" size="lg">Submit</Button>
                </Col>
            </Form.Group>
        </Form>
    )
}