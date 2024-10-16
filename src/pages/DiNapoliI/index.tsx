import { ReactNode, useEffect } from 'react'

import { Container } from './styles'

import { Footer } from '../../components/Footer'
import { Hero } from '../components/Hero'
import { Sobre } from '../components/Sobre'
import { ThemeProvider } from '../ThemeContext'

import { Apresentacao } from '../components/Apresentacao'
import { VejaMais } from '../components/VejaMais'
import { Estagio } from '../components/Estagio'
import { Header } from '../components/Header'
import { Explore } from '../components/3D'
import { Numeros } from '../components/Numeros'
import { Ofertas } from '../components/Ofertas'
import { PontosDeInteresse } from '../components/PontosDeInteresse'

import { Depoimentos } from '../components/Depoimentos'
import { Imagens } from '../components/Imagens'
import { Garantia } from '../components/Garantia'
import { EA } from '../components/EA'
import { PorqueArea } from '../components/PorqueArea'
import { Empresas } from '../../components/Empresas'
import { SobreArea } from '../components/SobreArea'
import { Helmet } from 'react-helmet'
import { GrupoMNGT } from '../../components/GrupoMNGT'
import { Redes } from '../../components/Redes'
import ReactPixel from 'react-facebook-pixel'
import TagManager from 'react-gtm-module'
import { WhatsappButton } from '../../components/elements/WhatsappButton'
import { hotjar } from 'react-hotjar'

const tagManagerArgs = {
  gtmId: 'GTM-KXPBB883',
  dataLayer: {
    page: 'Di Napoli I',
  },
  dataLayerName: 'PageDataLayer',
}

export function DiNapoliI() {
  TagManager.dataLayer(tagManagerArgs)
  useEffect(() => {
    ReactPixel.init('1528293361047131')

    TagManager.initialize(tagManagerArgs)

    const optionsHotjar = {
      id: 4947054,
      sv: 6,
    }

    hotjar.initialize(optionsHotjar)
  }, [])
  const dataPhase = [
    {
      name: 'Fundação',
      value: 100,
    },
    {
      name: 'Alvenaria',
      value: 100,
    },
    {
      name: 'Cobertura',
      value: 33,
    },
    {
      name: 'Passagem de Elétrica',
      value: 0,
    },
    {
      name: 'Pintura e Acabamentos',
      value: 50,
    },
    {
      name: 'Esquadrias e Marmoaria',
      value: 50,
    },

    {
      name: 'Pisos e Azulejos',
      value: 50,
    },
    {
      name: 'Portas e Janelas',
      value: 50,
    },
  ]

  const totalValue = dataPhase.reduce(
    (acc, curr) => acc + curr.value,
    0,
  )

  // Calculando a média como uma porcentagem
  const mediaPorcentagem = totalValue / dataPhase.length

  const empreendimento = 'Di Napoli I'
  return (
    <ThemeProvider page="dinapoli1">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Di Napoli I</title>
        <link
          rel="canonical"
          href="http://mysite.com/example"
        />
      </Helmet>
      <Container>
        <Header />
        <Hero
          category="lançamento"
          image="https://primeiro.rioclarofc.com.br/~grupomn/fachadadn1.jpg"
          subname="Condomínio Residencial"
          name={empreendimento}
          description="Casas de 2 ou 3 quartos"
          value="1.074,00"
          facebook="https://www.facebook.com/area.incrivelrc"
          instagram="https://www.instagram.com/dinapoli_residencial/"
          whatsapp=""
          buttonLink="https://api.whatsapp.com/send?phone=551930970232&text=Ol%C3%A1,%20gostaria%20de%20saber%20mais%20sobre%20o%20Di%20Napoli%20I"
        />
        <Numeros empreendimentoItens="dinapoli1" />
        <Sobre
          logoEmpreendimento="https://primeiro.rioclarofc.com.br/~grupomn/logodinapoli1.png"
          about="Bem-vindo ao Di Napoli I, onde a inovação e o conforto se unem para criar um ambiente excepcional para você e sua família. Inspirado no nome da terceira maior cidade italiana, Napoli, que significa 'cidade nova', nosso condomínio de casas térreas é a representação perfeita de qualidade e modernidade."
          linkButton="https://api.whatsapp.com/send?phone=551930970232&text=Ol%C3%A1,%20gostaria%20de%20saber%20mais%20sobre%20o%20Di%20Napoli%20I"
        />

        <Apresentacao
          iframe={
            <iframe
              width="100%"
              src="https://www.youtube.com/embed/uUFCYPn-k6o"
              title="O que os moradores falam do bairro Recanto Paraiso em Rio Claro - SP"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen></iframe>
          }
          // iframe={
          //   <iframe
          //     width="100%"
          //     src="https://www.youtube.com/embed/LwuLEmqY1Xc"
          //     title="Como é a vida no Recanto Paraiso em Rio Claro - SP?"
          //     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          //     allowFullScreen
          //   ></iframe>
          // }
          empreendimento={empreendimento}
          apresentacao="/docs/folderdn1.pdf"
        />
        <Ofertas
          empreendimento="dinapoli1"
          background="https://primeiro.rioclarofc.com.br/~grupomn/fachadadn1.jpg"
        />
        {/* <ExplicacaoCasas/> */}
        <Empresas />
        <Estagio
          percentageTotal={Number(
            mediaPorcentagem.toFixed(0),
          )}
          listItems={dataPhase}
        />
        <Garantia />

        <Depoimentos empreendimento="dinapoli1" />
        <Imagens empreendimento="dinapoli1" />
        <PontosDeInteresse
          empreendimento="Di Napoli I"
          empreendimentoPonto="dinapoli1"
          linkWhatsapp="https://api.whatsapp.com/send?phone=551930970232&text=Ol%C3%A1,%20gostaria%20de%20saber%20mais%20sobre%20o%20Di%20Napoli%20I"
        />
        <VejaMais
          empreendimento={empreendimento}
          empreendimentoItens="dinapoli1"
        />

        {/* <EA /> */}
        <SobreArea />

        {/* <Redes
          instagram="https://www.instagram.com/dinapoli_residencial/"
          facebook="https://www.facebook.com/dinapoli1.residencial"
          mockupImgInsta="https://primeiro.rioclarofc.com.br/~grupomn/dn1/mockupdn1.png"
          mockupImgFace="https://res.cloudinary.com/duv6mjghr/image/upload/v1712167494/dn1/facedn1mockup_rsebyl.png"
        /> */}
        <Redes
          facebook="https://www.facebook.com/area.incrivelrc"
          instagram="https://www.instagram.com/area.incrivel/"
        />
        <GrupoMNGT />
        <Footer />
      </Container>
      <WhatsappButton link="https://api.whatsapp.com/send?phone=551930970232&text=Ol%C3%A1,%20gostaria%20de%20saber%20mais%20sobre%20o%20Di%20Napoli%20I" />
    </ThemeProvider>
  )
}
