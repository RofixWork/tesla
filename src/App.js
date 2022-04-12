import React from "react";
import Header from "./components/Header";
import Section from "./components/Section";
import styled from "styled-components";
const App = () => {
  return (
    <Container>
      <Header />
      <Section
        title="Model S"
        desc="order online for touchless delivery"
        bgImage="model-s.jpg"
        leftButton="Custom order"
        rightButton="existing inventory"
        icon
        firstSection
        id="model-s"
      />
      <Section
        title="Model Y"
        desc="order online for touchless delivery"
        bgImage="model-y.jpg"
        leftButton="Custom order"
        rightButton="existing inventory"
        id="model-y"
      />
      <Section
        title="Model 3"
        desc="order online for touchless delivery"
        bgImage="model-3.jpg"
        leftButton="Custom order"
        rightButton="existing inventory"
        id="model-3"
      />
      <Section
        title="Model X"
        desc="order online for touchless delivery"
        bgImage="model-x.jpg"
        leftButton="Custom order"
        rightButton="existing inventory"
        id="model-x"
      />
      <Section
        title="lowest Cost Solar Panels in America"
        desc="Money-back guarantee"
        bgImage="solar-panel.jpg"
        leftButton="order now"
        rightButton="learn more"
      />
      <Section
        title="Solar for New Roofs"
        desc="Solar Roof Costs Less Than a new Roof"
        bgImage="solar-roof.jpg"
        leftButton="order now"
        rightButton="learn more"
      />
      <Section
        title="Accessories"
        bgImage="accessories.jpg"
        leftButton="shop now"
        id="access"
      />
    </Container>
  );
};

export default App;

const Container = styled.section`
  height: 100vh;
`;
