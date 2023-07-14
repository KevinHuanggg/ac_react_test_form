export default function FormDiv(props) {
  return (
    <form className="formContainer" action="">
      <label htmlFor="name">{props.name}</label>
      <input type="text" id="name" name="name" required />

      <label htmlFor="email">{props.email}</label>
      <input type="email" id="email" name="email" required />

      <button type="submit">提交</button>
    </form>
  );
}
