import { Side, Main } from "./App.styled";
import { ThemeProvider } from "styled-components";
import { darkTheme, GlobalStyle } from "./GlobalStyle";
import Note from "./Note";

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyle />
      <Side>Barre latérale</Side>
      <Main>
        <Note />
      </Main>
    </ThemeProvider>
  );
}

export default App;
