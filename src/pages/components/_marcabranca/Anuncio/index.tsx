import { ReactNode } from "react";

import { Container, Content, Information, Image } from "./styles";

interface AnuncioProps {
  imgUrl?: string;
}

export function Anuncio({ imgUrl }: AnuncioProps) {
  return (
    <Container>
      <Content>
        <Image src={imgUrl} />
        <Information></Information>
      </Content>
    </Container>
  );
}
