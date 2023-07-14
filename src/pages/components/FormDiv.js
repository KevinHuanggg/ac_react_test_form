import Form from "./Form.js";
import { Button } from "react-bootstrap";
import { useState } from "react";

export default function FormDiv(props) {
  return (
    <form className="formContainer" action="">
      <Form label={props.name} name="name" required />
      <Form label={props.email} name="email" required />
      <Button className="mt-5" variant="primary" type="submit">
        Submit
      </Button>
    </form>
  );
}
