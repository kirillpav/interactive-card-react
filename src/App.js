import React from "react";
import Header from "./Components/Header/Header";
import Container from "./Styles/Container";
import GlobalStyle from "./Styles/GlobalStyle";

function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Header />
      </Container>
    </>
  );
}

export default App;
