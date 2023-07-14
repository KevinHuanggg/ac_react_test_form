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
        <div>
          <p>已送出資料</p>
          <p>姓名為：</p>
          <p>信箱為：</p>
        </div>
      </header>
    </div>
  );
}

export default App;
