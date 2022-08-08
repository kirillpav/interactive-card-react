import React from "react";
import Form from "./Components/Form/Form";
import Header from "./Components/Header/Header";
import Container from "./Styles/Container";
import DesktopLayout from "./Styles/DesktopLayout";
import GlobalStyle from "./Styles/GlobalStyle";

function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <DesktopLayout>
          <Header />
          {/* <Form /> */}
        </DesktopLayout>
      </Container>
    </>
  );
}

export default App;
