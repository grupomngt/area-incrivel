import { useEffect } from "react";
import TagManager from "react-gtm-module";
import { Anuncio } from "../components/_marcabranca/Anuncio";
import { Banner } from "../components/_marcabranca/Banner";
import { Container } from "./styles";
import ReactPixel from "react-facebook-pixel";
import { Helmet } from "react-helmet";

const tagManagerArgs = {
  gtmId: "GTM-KXPBB883",
  dataLayer: {
    page: "Lote - Venda",
  },
  dataLayerName: "PageDataLayer",
};
export function GoogleLote() {
  TagManager.dataLayer(tagManagerArgs);
  useEffect(() => {
    ReactPixel.init("1528293361047131");

    TagManager.initialize(tagManagerArgs);
  }, []);
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
        <Banner
          number="99"
          type="TERRENO"
          whatsapp="(19) 3097-0234"
          link="https://wa.me/551930970234?text=Tenho+interesse+no+terreno+de+99+m²"
        />
        <Anuncio
          imgUrl="https://res.cloudinary.com/duv6mjghr/image/upload/v1712778063/terreno_cq4ppv.jpg"
          price="99.000,00"
          type="terreno"
          link="https://wa.me/551930970234?text=Tenho+interesse+no+terreno+de+99+m²"
        />
      </Container>
    </>
  );
}
