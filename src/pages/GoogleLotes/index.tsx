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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <Container>
        <Banner number="99" type="LOTE" />
        <Anuncio imgUrl="/terreno.jpg" />
      </Container>
    </>
  );
}
