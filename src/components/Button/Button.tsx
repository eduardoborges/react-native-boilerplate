/* eslint-disable */
import React, { FunctionComponent } from "react";
import { Container, Text, Spinner } from "./Button.styles";
import { Props } from './Button.types';
import { colors } from "~/theme";

const Button: FunctionComponent<Props> = (props) => {
  const { children, isLoading, type } = props;

  return (
    <Container
       type={type}>


      {isLoading ? (
        <>
          {!type && <Spinner color={colors.primary} />}
          {type === 'primary' && <Spinner color={colors.white} />}
        </>
      ) : (
        <Text type={type}>{children}</Text>
      )}
    </Container>
  );
};

export default Button;
