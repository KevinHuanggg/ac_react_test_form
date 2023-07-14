import Form from "./Form.js";

export default function FormDiv(props) {
  return (
    <form className="formContainer" action="">
      <Form label={props.name} name="name" required />
      <Form label={props.email} name="email" required />
      <button type="submit">提交</button>
    </form>
  );
}
