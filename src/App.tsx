import "./App.css";
import { Form } from "./components/Organisms/Form/Form";
import { Rates } from "./components/Organisms/Rates/Rates";
import {
  AppContainer,
  AppSection,
} from "./components/Templates/App/App.styles";

function App() {
  return (
    <>
      <AppContainer>
        <AppSection>
          <Rates />
        </AppSection>
        <AppSection flexGrow={1} paddingLeft={"20px"}>
          <Form title="Converter" />
        </AppSection>
      </AppContainer>
    </>
  );
}

export default App;
