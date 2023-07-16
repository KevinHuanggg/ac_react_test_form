import FormDiv from "./components/FormDiv.jsx";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

const data = {
  name: "姓名：",
  email: "信箱：",
};

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [formData, setFormData] = useState({ name: "", email: "" });

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleSubmit = () => {
    setFormData({ name, email });
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>My First React Form</h1>
        <FormDiv
          name={data.name}
          nameValue={name}
          email={data.email}
          emailValue={email}
          onChangeName={onChangeName}
          onChangeEmail={onChangeEmail}
          onSubmit={handleSubmit}
        />
        <div>
          <p>已送出資料</p>
          <p>{formData.name}</p>
          <p>{formData.email}</p>
        </div>
      </header>
    </div>
  );
}

export default App;
