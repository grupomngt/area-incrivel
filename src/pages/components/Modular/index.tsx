import { ReactNode } from "react";

import {
  Button,
  Container,
  Content,
  ContentGarantia,
  LeftContent,
} from "./styles";

export function Modular() {
  return (
    <Container>
      <Content>
        <ContentGarantia>
          <LeftContent>
            <h1>Entenda as Casas Modulares!</h1>
            <p>
              Após diversas pesquisas com consumidores, a Área Incrível criou
              Casas Modulares com opções de 39 m² a 57 m². A planta modular
              prevê reformas até 55 m² deixando preparada a estrutura para
              ampliação, sem que você se preocupe com diversos aspectos da
              engenharia.
            </p>
            <Button
              href="https://api.whatsapp.com/send?phone=551930970232&text=Ol%C3%A1,%20gostaria%20de%20saber%20mais%20sobre%20as%20casas%20modulares"
              target="_blank"
            >
              Conhecer mais sobre as modulares
            </Button>
          </LeftContent>
        </ContentGarantia>
        <video autoPlay muted loop>
          <source src="/modularbackground.mp4" type="video/mp4" />
        </video>
      </Content>
    </Container>
  );
}
