import React from 'react';
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';
import * as yup from 'yup';
import onlyNumbers from '~/helpers/onlyNumbers';

import {
  Wrapper, Container,
  Header, Body, Footer,
  Title, Subtitle,
} from './login.styles';

import {
  Button, Input, Label,
} from '~/components';

const HomeScreen: React.FC = () => {
  const phoneSchema = yup
    .string()
    .required('Campo obrigatório')
    .length(11, 'Número inválido');

  const codeSchema = yup
    .string()
    .required('Campo obrigatório')
    .length(6);

  const [phone, setPhone] = React.useState('');
  const [code, setCode] = React.useState('');
  const [error, setError] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const [confirm, setConfirm] = React.useState<FirebaseAuthTypes.ConfirmationResult>();


  const getConfirmation = async () => {
    try {
      const number = await phoneSchema.validate(phone);
      setLoading(true);
      const confirmation = await auth().signInWithPhoneNumber(`+55${onlyNumbers(number)}`);
      setConfirm(confirmation);
      setLoading(false);
    } catch (e) {
      setLoading(false);
      setError(e.message);
    }
  };

  const signIn = async () => {
    try {
      const validatedCode = await codeSchema.validate(code);
      setLoading(true);
      await confirm?.confirm(validatedCode);
      setLoading(false);
    } catch (e) {
      setLoading(false);
      setError(e.message);
    }
  };

  return (
    <Wrapper behavior="height">
      <Container>
        <Header>
          <Title>Bem vindo ao Guapo</Title>
        </Header>

        <Footer>
          { !confirm ? (
            <>
              <Subtitle>Insira seu número para começar 😍</Subtitle>
              <Input
                mask="[00] [0] [0000] [0000]"
                onChangeText={(_, extracted) => setPhone(extracted || '')}
                placeholder="Seu número de telefone"
                keyboardType="decimal-pad"
              />

              {!!error && <Label>{error}</Label> }

              <Button isLoading={loading} type="primary" onPress={getConfirmation}>Continuar 👉🏼</Button>
            </>
          )
            : (
              <>
                <Subtitle>Insira o código enviado por SMS</Subtitle>
                <Input
                  mask="[000000]"
                  onChangeText={(_, extracted) => setCode(extracted || '')}
                  placeholder="Código recebido"
                  keyboardType="decimal-pad"
                />
                <Button isLoading={loading} type="primary" onPress={signIn}>Pronto 👍🏻</Button>
              </>
            ) }

        </Footer>

      </Container>
    </Wrapper>
  );
};

export default HomeScreen;
