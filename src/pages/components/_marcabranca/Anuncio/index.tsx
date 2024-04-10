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
  type?: string;
  area?: string;
  price?: string;
  link?: string;
}

export function Anuncio({ imgUrl, type, area, price, link }: AnuncioProps) {
  return (
    <Container>
      <Content>
        <Image src={imgUrl} />
        <Information>
          <Text>
            <h1>Vende-se {type} em condomínio fechado em Rio Claro - SP</h1>
            <Topicos>
              <span>- Tamanho: {area}</span>
              <span>- Ótima localização, com vista para a serra</span>
              <span>- Bairro próximo a vários pontos comerciais</span>
            </Topicos>
            <h2>
              Valor: <span>R$ {price}</span>
            </h2>
          </Text>
          <Button href={link} target="_blank">
            Comprar
          </Button>
        </Information>
      </Content>
    </Container>
  );
}
