import { ReactNode } from "react";

import { Container, Content, ContentCards, Image } from "./styles";
import { CardEmpreendimento } from "../../elements/CardEmpreendimento";

import { List, ListItem } from "../../elements/CardEmpreendimento/styles";

export function CasasModulares() {
  return (
    <Container>
      <Content>
        <h1>
          Casas mo<span>dulares</span>
        </h1>
        <ContentCards>
          <CardEmpreendimento
            title={
              <h2>
                CASAS DE 39 <span>m²</span>
              </h2>
            }
            preco="R$ 740,00"
            linkButton="https://api.whatsapp.com/send?phone=551930970232&text=Ol%C3%A1,%20gostaria%20de%20saber%20mais%20sobre%20as%20casas%20modulares%20de%2036m%C2%B2"
            img="https://primeiro.rioclarofc.com.br/~grupomn/casa39.png"
            imgModal="https://primeiro.rioclarofc.com.br/~grupomn/casa39.png"
          />
          <CardEmpreendimento
            title={
              <h2>
                CASAS DE 48 <span>m²</span>
              </h2>
            }
            preco="R$ 931,00"
            linkButton="https://api.whatsapp.com/send?phone=551930970232&text=Ol%C3%A1,%20gostaria%20de%20saber%20mais%20sobre%20as%20casas%20modulares%20de%2048m%C2%B2"
            img="https://primeiro.rioclarofc.com.br/~grupomn/casa48.png"
            imgModal="https://primeiro.rioclarofc.com.br/~grupomn/casa48.png"
          />
          <CardEmpreendimento
            title={
              <h2>
                CASAS DE 57 <span>m²</span>
              </h2>
            }
            preco="R$ 1.163,00"
            linkButton="https://api.whatsapp.com/send?phone=551930970232&text=Ol%C3%A1,%20gostaria%20de%20saber%20mais%20sobre%20as%20casas%20modulares%20de%2055m%C2%B2"
            img="https://res.cloudinary.com/duv6mjghr/image/upload/v1712086280/casade57_xjwly9.png"
            imgModal="https://res.cloudinary.com/duv6mjghr/image/upload/v1712086181/casa57_pacz63.png"
          />
        </ContentCards>
      </Content>
      <Image>
        <img
          src="https://res.cloudinary.com/duv6mjghr/image/upload/v1711492200/public/family_e0bzfz.png"
          alt=""
        />
      </Image>
    </Container>
  );
}
