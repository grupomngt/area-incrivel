import { ReactNode } from "react";

import {
  Container,
  Content,
  LeftContent,
  RightContent,
  Whatsapp,
} from "./styles";

interface AnuncioProps {
  type?: string;
  number?: string;
  whatsapp?: string;
}

export function Banner({ type, number, whatsapp }: AnuncioProps) {
  return (
    <Container>
      <Content>
        <LeftContent>
          <h1>VENDE-SE {type}</h1>
          <h2>EM CONDOMÍNIO</h2>
          <span>DIRETO COM O PROPRIETÁRIO</span>
        </LeftContent>

        <RightContent>
          <h3>R$ {number} MIL FINANCIADO</h3>
          <Whatsapp href="">
            <img src="whatsapp.svg" alt="" /> {whatsapp}
          </Whatsapp>
        </RightContent>
      </Content>
    </Container>
  );
}
