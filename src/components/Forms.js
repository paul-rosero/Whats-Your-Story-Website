import React from 'react';
import { Form, Button } from 'react-bootstrap';

export function EmailForm() {
    return (
        <Form>
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
            <Button variant="primary" type="submit" size="lg">Submit</Button>
        </Form>
    )
}

export function SubscribeForm() {
    return (
        <Form>
            <Form.Group controlId="formBasicEmail">
                <Form.Label />
                <Form.Control type="first-name" placeholder="First Name" />

                <Form.Label />
                <Form.Control type="last-name" placeholder="Last Name" />

                <Form.Label />
                <Form.Control type="email" placeholder="Email" />
                
                <Form.Label />
                <i className="far fa-calendar-alt"></i>
                <Form.Control type="birthday" placeholder="Birthday" />
            </Form.Group>
            <Button variant="primary" type="submit" size="lg">Subscribe</Button>
        </Form>
    )
}
