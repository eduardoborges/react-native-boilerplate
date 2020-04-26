import React from "react";
import { Button, Input } from "~/components";
import { Container } from "./home.styles";

const HomeScreen: React.FC = () => (
  <Container>
    <Button type="primary"> Teste</Button>

    <Button type="primary" isLoading>
      Teste
    </Button>

    <Button>Teste</Button>
    <Button isLoading>Teste</Button>
    <Input />
    <Input />
  </Container>
);

export default HomeScreen;
