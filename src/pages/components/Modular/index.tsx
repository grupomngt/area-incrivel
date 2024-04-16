import { ReactNode } from "react";

import {
  Button,
  Container,
  Content,
  ContentGarantia,
  LeftContent,
  RightContent,
  Security,
  Text,
} from "./styles";

export function Modular() {
  return (
    <Container>
      <Content>
        <ContentGarantia>
          <LeftContent>
            <h1>Casa Modular</h1>
            <p>
              Após diversas pesquisas com consumidores, a Área Incrível criou
              Casas Modulares com opções de 39 m² a 57 m². A planta modular
              prevê reformas até 55 m² deixando preparada a estrutura para
              ampliação, sem que você se preocupe com diversos aspectos da
              engenharia.
            </p>
          </LeftContent>
          {/* <RightContent>
            <Text>
              <p>
                A Incorporadora <span>Área Incrível</span> é a única empresa do
                mercado que oferece a Garantia de Entrega, um documento de
                certificação registrado em cartório, com validade de contrato,
                que garante a entrega do imóvel dentro do prazo previsto sob
                pena de multa. É uma certificação inovadora que protege seu
                investimento, seus sonhos e sua família.
              </p>
            </Text>
            <Button href="/docs/Garantia.pdf" target="_blank">
              Ver documento!
            </Button>
          </RightContent> */}
        </ContentGarantia>
        <video autoPlay muted loop>
          <source src="/modularbackground.mp4" type="video/mp4" />
        </video>
      </Content>
    </Container>
  );
}
