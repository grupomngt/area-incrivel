import { ReactNode } from "react";

import { Container, Content, Number, Whatsapp } from "./styles";

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
        <h3>R$ {number} MIL FINANCIADO</h3>
        <Number>
          <Whatsapp href="">
            <img src="whatsapp.svg" alt="" /> 19999999999
          </Whatsapp>
          <span>DIRETO COM O PROPRIETÁRIO</span>
        </Number>
      </Content>
    </Container>
  );
}
