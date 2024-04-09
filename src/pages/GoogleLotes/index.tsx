import { Anuncio } from "../components/_marcabranca/Anuncio";
import { Banner } from "../components/_marcabranca/Banner";
import { Container } from "./styles";

import { Helmet } from "react-helmet";
export function GoogleLote() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Lote - Venda</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <Container>
        <Banner number="99" type="LOTE" />
        <Anuncio imgUrl="/terreno.jpg" />
      </Container>
    </>
  );
}
