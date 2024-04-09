import { ReactNode } from "react";

import {
  Container,
  Content,
  Information,
  Image,
  Topicos,
  Button,
  Text,
} from "./styles";

interface AnuncioProps {
  imgUrl?: string;
}

export function Anuncio({ imgUrl }: AnuncioProps) {
  return (
    <Container>
      <Content>
        <Image src={imgUrl} />
        <Information>
          <Text>
            <h1>Vende-se Terreno em condomínio fechado em Rio Claro - SP</h1>
            <Topicos>
              <span>- Tamanho: 90 m² de área total</span>
              <span>- Ótima localização, com vista para a serra</span>
              <span>- Bairro próximo a vários pontos comerciais</span>
            </Topicos>
            <h2>
              Valor: <span>R$ 99.000</span>
            </h2>
          </Text>
          <Button>Comprar</Button>
        </Information>
      </Content>
    </Container>
  );
}
