import { cache } from "react";
import { Container, TextWrapper, Content } from "./styles";

interface Props {
  title: string;
  content: string;
  t?: (x:any) => any;
}

const Block = ({ title, content, t = (x) => x }: Props) => {
  return (
    <Container>
      <h6>{t(title)}</h6>
      <TextWrapper>
        <Content>{t(content)}</Content>
      </TextWrapper>
    </Container>
  );
};

export default cache(Block);
