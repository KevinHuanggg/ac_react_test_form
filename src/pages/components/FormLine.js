export default function FormLine() {
  return (
    <form className="formContainer" action="">
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" name="name" required />

      <label htmlFor="email">Email:</label>
      <input type="email" id="email" name="email" required />

      <button type="submit">提交</button>
    </form>
  );
}
