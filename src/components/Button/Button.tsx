import React, { FunctionComponent } from 'react';
import { Container, Text, Spinner } from './Button.styles';
import { Props, Button as ButtonProps } from './Button.types';
import { colors } from '~/constants';


const Button: FunctionComponent<Props & ButtonProps> = (props) => {
  const { children, isLoading, type } = props;

  return (
    <Container type={type} {...props}>
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
