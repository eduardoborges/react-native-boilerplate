import styled from "styled-components/native";
import { colors } from "~/theme";

export const Container = styled.View`
  display: flex;
  flex: 1;
  justify-content: space-evenly;
  flex-direction: column;
  padding: 30px;
  background: ${colors.white};
`;
