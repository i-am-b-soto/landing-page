import { StyledContainer } from "./styles";
import { ContainerProps } from "../types";

const Container = ({ border, children }: ContainerProps) => (
  <StyledContainer>{children}</StyledContainer>
);

export default Container;
