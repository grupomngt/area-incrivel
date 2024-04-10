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
  link?: string;
}

export function Banner({ type, number, whatsapp, link }: AnuncioProps) {
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
          <Whatsapp href={link} target="_blank">
            <img src="whatsapp.svg" alt="" /> {whatsapp}
          </Whatsapp>
        </RightContent>
      </Content>
    </Container>
  );
}
