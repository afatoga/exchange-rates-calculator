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
        <AppSection mobileOrder={1} flexGrow={1}>
          <Rates />
        </AppSection>
        <AppSection paddingLeft={"60px"} mobileOrder={0}>
          <Form title="Convert CZK" />
        </AppSection>
      </AppContainer>
    </>
  );
}

export default App;
