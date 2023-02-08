import { Side, Main } from "./App.styled";
import { GlobalStyle } from "./GlobalStyle";

function App() {
  return (
    <>
      <GlobalStyle />
      <Side>Barre latérale</Side>
      <Main>Contenu principal</Main>
    </>
  );
}

export default App;
