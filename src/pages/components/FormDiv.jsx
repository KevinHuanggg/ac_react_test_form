import Form from "./Form.jsx";
import { Button } from "react-bootstrap";

export default function FormDiv(props) {
  return (
    <form className="formContainer" action="">
      <Form label={props.name} name="name" onChange={props.onChangeName} />
      <Form label={props.email} name="email" onChange={props.onChangeEmail} />
      <Button
        className="mt-5 btn"
        variant="primary"
        type="button"
        onClick={props.onSubmit}
      >
        Submit
      </Button>
    </form>
  );
}
