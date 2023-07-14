import FormDiv from "./components/FormDiv.js";
import "./App.css";

const data = {
  name: "name",
  email: "email",
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>My First React Form</h1>
        <FormDiv name={data.name} email={data.email} />
      </header>
    </div>
  );
}

export default App;
