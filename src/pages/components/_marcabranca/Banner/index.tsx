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
}

export function Banner({ type, number }: AnuncioProps) {
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
            <img src="whatsapp.svg" alt="" /> (19) 99999-9999
          </Whatsapp>
        </RightContent>
      </Content>
    </Container>
  );
}
