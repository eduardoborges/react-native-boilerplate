import React from 'react';
import { Button, Input } from '~/components';
import { Container } from './home.styles';

const HomeScreen: React.FC = () => (
  <Container>
    <Button type="primary"> Teste</Button>

    <Button type="primary" isLoading>Teste</Button>

    <Button>Teste</Button>
    <Button isLoading>Teste</Button>

    <Input placeholder="Insina seu email" label="Email" />
    <Input type="outline" label="Email" />
  </Container>
);

export default HomeScreen;
