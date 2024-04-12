import { ReactNode, useEffect } from "react";

import { Container } from "./styles";
import { Footer } from "../../components/Footer";
import { Hero } from "../components/Hero";
import { Sobre } from "../components/Sobre";
import { ThemeProvider } from "../ThemeContext";
import { Apresentacao } from "../components/Apresentacao";
import { VejaMais } from "../components/VejaMais";
import { Estagio } from "../components/Estagio";
import { Header } from "../components/Header";
import { Explore } from "../components/3D";
import { Numeros } from "../components/Numeros";
import { Ofertas } from "../components/Ofertas";
import { PontosDeInteresse } from "../components/PontosDeInteresse";
import { Redes } from "../../components/Redes";
import { Depoimentos } from "../components/Depoimentos";
import { Imagens } from "../components/Imagens";
import { Garantia } from "../components/Garantia";
import { EA } from "../components/EA";
import { PorqueArea } from "../components/PorqueArea";
import { Empresas } from "../../components/Empresas";
import { SobreArea } from "../components/SobreArea";
import { Helmet } from "react-helmet";
import { GrupoMNGT } from "../../components/GrupoMNGT";
import ReactPixel from "react-facebook-pixel";
import TagManager from "react-gtm-module";
import { Modular } from "../components/Modular";
const tagManagerArgs = {
  gtmId: "GTM-KXPBB883",
  dataLayer: {
    page: "Siena",
  },
  dataLayerName: "PageDataLayer",
};
export function Siena() {
  TagManager.dataLayer(tagManagerArgs);
  useEffect(() => {
    ReactPixel.init("1528293361047131");

    TagManager.initialize(tagManagerArgs);
  }, []);
  const dataPhase = [
    {
      name: "Rede de Abastecimento de Água",
      value: 0,
    },

    {
      name: "Rede de Captação de Água Pluvial",
      value: 0,
    },
    {
      name: "Rede de Captação de Esgoto",
      value: 0,
    },
    {
      name: "Pavimentação",
      value: 0,
    },
    {
      name: "Contrução da Lixeira",
      value: 0,
    },

    {
      name: "Construção do Playgorund",
      value: 0,
    },
    {
      name: "Construção da Portaria",
      value: 0,
    },
    {
      name: "Construção do Salão de Festas",
      value: 0,
    },
    {
      name: "Construção da Piscina e Vestiário",
      value: 0,
    },
  ];
  const totalValue = dataPhase.reduce((acc, curr) => acc + curr.value, 0);

  // Calculando a média como uma porcentagem
  const mediaPorcentagem = totalValue / dataPhase.length;

  const empreendimento = "Siena";
  return (
    <ThemeProvider page="siena">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Siena</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <Container>
        <Header />
        <Hero
          category="lançamento"
          video="https://res.cloudinary.com/duv6mjghr/video/upload/v1712927462/siena/Siena_OK_cejzoz.mp4"
          subname="Condomínio Residencial"
          name={empreendimento}
          description="Lotes | Casas Modulares | Casas incríveis"
          value="617,00"
          facebook="https://www.facebook.com/area.incrivelrc"
          instagram="https://www.instagram.com/dinapoli_2_residencial/"
          whatsapp="https://api.whatsapp.com/send?phone=551930970232&text=Ol%C3%A1,%20gostaria%20de%20saber%20mais%20sobre%20o%20Di%20Napoli%20II"
          buttonLink="https://api.whatsapp.com/send?phone=551930970232&text=Ol%C3%A1,%20gostaria%20de%20saber%20mais%20sobre%20o%20Di%20Napoli%20II"
        />
        <Numeros empreendimentoItens="siena" />
        <Sobre
          logoEmpreendimento="https://res.cloudinary.com/duv6mjghr/image/upload/v1712586382/dn2/logodn2_xi3ie4.png"
          about="O condomínio Siena é um empreendimento da Área Incrível, localizado no bairro Santa Eliza, um dos bairros que mais cresce em Rio Claro por sua localização estratégica, investimos em urbanização e valorização imobiliária. Nesse condomínio, a Área Incrível disponibiliza 99 unidades, que podem ser lotes ou casas de acordo com a escolha do comprador."
          linkButton="https://api.whatsapp.com/send?phone=551930970232&text=Ol%C3%A1,%20gostaria%20de%20saber%20mais%20sobre%20o%20Di%20Napoli%20II"
        />

        <Apresentacao
          iframe={
            <iframe
              width="100%"
              src="https://www.youtube.com/embed/_QqZEG_OTbc"
              title="O que os moradores falam do bairro Santa Eliza em Rio Claro - SP"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          }
          empreendimento={empreendimento}
          apresentacao="https://res.cloudinary.com/duv6mjghr/image/upload/v1712592778/dn2/Di_Napoli_II_1_pmql2g.png"
        />
        {/* <Modular /> */}
        <Ofertas
          empreendimento="dinapoli2"
          background="https://res.cloudinary.com/duv6mjghr/image/upload/v1712925515/siena/projeto/00_1_-_Photo_ojusox.jpg"
        />

        <Empresas />
        <Estagio
          percentageTotal={Number(mediaPorcentagem.toFixed(0))}
          listItems={dataPhase}
        />
        <Garantia />

        <Depoimentos empreendimento="siena" />
        <Imagens empreendimento="siena" />
        <PontosDeInteresse
          empreendimento="Siena"
          empreendimentoPonto="siena"
          linkWhatsapp="https://api.whatsapp.com/send?phone=551930970232&text=Ol%C3%A1,%20gostaria%20de%20saber%20mais%20sobre%20o%20Siena"
        />
        <VejaMais empreendimento={empreendimento} empreendimentoItens="siena" />

        <SobreArea />

        <Redes
          facebook="https://www.facebook.com/area.incrivelrc"
          instagram="https://www.instagram.com/area.incrivel/"
        />
        <GrupoMNGT />
        <Footer />
      </Container>
    </ThemeProvider>
  );
}
