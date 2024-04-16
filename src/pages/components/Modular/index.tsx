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
        <h1>Garantia de entrega</h1>
        <ContentGarantia>
          <LeftContent>
            <img
              src="https://res.cloudinary.com/duv6mjghr/image/upload/v1712773625/solidez_tnb6vp.jpg"
              alt=""
            />
          </LeftContent>
          <RightContent>
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
          </RightContent>
        </ContentGarantia>
        <video autoPlay muted loop>
          <source src="/modularbackground.mp4" type="video/mp4" />
        </video>
      </Content>
    </Container>
  );
}
