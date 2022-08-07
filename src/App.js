import React from "react";
import Form from "./Components/Form/Form";
import Header from "./Components/Header/Header";
import Container from "./Styles/Container";
import GlobalStyle from "./Styles/GlobalStyle";

function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Header />
        <Form />
      </Container>
    </>
  );
}

export default App;
