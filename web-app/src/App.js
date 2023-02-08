import styled from "styled-components";

const Side = styled.aside`
  position: fixed;
  width: 240px;
  top: 0;
  left: 0;
  bottom: 0;
  background-color: #1d2327;
`;

const Main = styled.main`
  height: 100vh;
  margin-inline-start: 240px;
`;

function App() {
  return (
    <>
      <Side>Barre latérale</Side>
      <Main>Contenu principal</Main>
    </>
  );
}

export default App;
