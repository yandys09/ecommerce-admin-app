import React from "react";
import { Form } from "react-bootstrap";

const index = (props) => {
  return (
    <Form.Group controlId="formBasicEmail">
      <Form.Label>{props.label}</Form.Label>
      <Form.Control
        type={props.type}
        placeholder={props.placeholder}
      />
      <Form.Text className="text-muted">{props.errorMessage}</Form.Text>
    </Form.Group>
  );
};

export default index;
