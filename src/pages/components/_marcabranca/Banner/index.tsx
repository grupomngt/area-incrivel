import { ReactNode } from "react";

import { Container, Content } from "./styles";

interface AnuncioProps {
  type?: string;
  number?: string;
}

export function Banner({ type, number }: AnuncioProps) {
  return (
    <Container>
      <Content>
        <h1>VENDE-SE {type}</h1>
        <h2>EM CONDOMÍNIO</h2>
        <h3>R$ 99 MIL FINANCIADO</h3>
        <Number>
          <h4>{number}</h4>
          <span>DIRETO COM O PROPRIETÁRIO</span>
        </Number>
      </Content>
    </Container>
  );
}
