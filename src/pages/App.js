import FormDiv from "./components/FormDiv.js";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

const data = {
  name: "姓名：",
  email: "信箱：",
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
