export default function Form(props) {
  return (
    <>
      <label htmlFor={props.name}> {props.label} </label>
      <input type="text" name={props.name} required />
    </>
  );
}
