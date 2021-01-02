import React from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';

// function sendEmail(e) {
//     e.preventDefault();

//     emailjs.sendForm('gmail', 'template_z3d9ajg', e.target, 'user_EngDUayYS8iZ5uyXLsnzZ')
//       .then((result) => {
//           console.log(result.text);
//       }, (error) => {
//           console.log(error.text);
//       });
//       e.target.reset()
// }

export function EmailForm() {
    return (
        <Form className="email-form">{/* onSubmit={ sendEmail }*/}  
            <Form.Group controlId="formBasicEmail">
                <Form.Label />
                <Form.Control type="text" placeholder="First Name" />

                <Form.Label />
                <Form.Control type="text" placeholder="Last Name" />

                <Form.Label />
                <Form.Control type="text" placeholder="Subject" />

                <Form.Label />
                <Form.Control type="email" placeholder="Email" />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label />
                <Form.Control as="textarea" rows={3} placeholder="Type your message here..."/>
            </Form.Group>
            <Form.Group as={Row}>
                <Col xs={{ span: 10, offset: 4 }} md={{ span: 10, offset: 5 }} >
                    <Button variant="primary" type="submit" size="lg">Submit</Button>
                </Col>
            </Form.Group>
        </Form>
    )
}