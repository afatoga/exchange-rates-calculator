import "./App.css";
import { Form } from "./components/Organisms/Form/Form";
import { Rates } from "./components/Organisms/Rates/Rates";

function App() {
  return (
    <div className="App">
      <h1>Momence</h1>
      <div className="card">
        <Rates />
        <Form title="Converter" />
      </div>
    </div>
  );
}

export default App;
