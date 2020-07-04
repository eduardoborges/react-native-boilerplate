import React from 'react';
import auth from '@react-native-firebase/auth';
import { Button, Input } from '~/components';
import { Container } from './home.styles';

const HomeScreen: React.FC = () => (
  <Container>
    <Button type="primary" onPress={() => auth().signOut()}> Logout</Button>

    <Button type="primary" isLoading>Teste</Button>

    <Button>Teste</Button>
    <Button isLoading>Teste</Button>

    <Input type="custom" options={{ mask: '*' }} placeholder="Insina seu email" label="Email" />
    <Input type="custom" options={{ mask: '*' }} label="Email" />
  </Container>
);

export default HomeScreen;
