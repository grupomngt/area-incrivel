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
    page: "Di Napoli II",
  },
  dataLayerName: "PageDataLayer",
};
export function Ravena() {
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

  const empreendimento = "Ravena";
  return (
    <ThemeProvider page="ravena">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Ravena</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <Container>
        <Header />
        <Hero
          category="lançamento"
          video="https://res.cloudinary.com/duv6mjghr/video/upload/v1712927567/ravena/Ravena_1_OK_r5dtbo.mp4"
          subname="Condomínio Residencial"
          name={empreendimento}
          description="Lotes | Casas Modulares | Casas incríveis"
          value="617,00"
          facebook="https://www.facebook.com/area.incrivelrc"
          instagram="https://www.instagram.com/area.incrivel/"
          whatsapp="https://api.whatsapp.com/send?phone=551930970232&text=Ol%C3%A1,%20gostaria%20de%20saber%20mais%20sobre%20o%20Ravena"
          buttonLink="https://api.whatsapp.com/send?phone=551930970232&text=Ol%C3%A1,%20gostaria%20de%20saber%20mais%20sobre%20o%20Ravena"
        />
        <Numeros empreendimentoItens="ravena" />
        <Sobre
          logoEmpreendimento="https://res.cloudinary.com/duv6mjghr/image/upload/v1712864218/ravena/logoravena_dtgckl.png"
          about="Os Condomínios Ravena I e II, que ficam na Vila Industrial em Rio Claro (SP), são empreendimentos residenciais flexíveis e customizáveis do portfólio da Incorporadora Área Incrível, que podem ser adquiridos no formato de lote ou de casa (modulares ou padrão 'Casas Incríveis'). O Ravena I disponibiliza 111 unidades e o no Ravena II reúne 53 unidades. Os condomínios contam com salão de festas amplo, área de lazer com piscina, segurança condominial e portaria inteligente."
          linkButton="https://api.whatsapp.com/send?phone=551930970232&text=Ol%C3%A1,%20gostaria%20de%20saber%20mais%20sobre%20o%20Ravena"
        />

        <Apresentacao
          iframe={
            <iframe
              width="100%"
              src="https://www.youtube.com/embed/0B4tAaHzXBU"
              title="O que os moradores falam do bairro Vila Industrial em Rio Claro - SP"
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
          background="https://res.cloudinary.com/duv6mjghr/image/upload/v1712924006/ravena/projeto/02_6_-_Foto_z048kk.jpg"
        />

        <Empresas />
        <Estagio
          percentageTotal={Number(mediaPorcentagem.toFixed(0))}
          listItems={dataPhase}
        />
        <Garantia />

        {/* <Depoimentos empreendimento="dinapoli1" /> */}
        <Imagens empreendimento="ravena" />
        <PontosDeInteresse
          empreendimento="Ravena"
          empreendimentoPonto="ravena"
          linkWhatsapp="https://api.whatsapp.com/send?phone=551930970232&text=Ol%C3%A1,%20gostaria%20de%20saber%20mais%20sobre%20o%20Ravena"
        />
        <VejaMais
          empreendimento={empreendimento}
          empreendimentoItens="ravena"
        />

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
