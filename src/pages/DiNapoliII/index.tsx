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
import { Redes } from '../../components/Redes'
import { Depoimentos } from '../components/Depoimentos'
import { Imagens } from '../components/Imagens'
import { Garantia } from '../components/Garantia'
import { EA } from '../components/EA'
import { PorqueArea } from '../components/PorqueArea'
import { Empresas } from '../../components/Empresas'
import { SobreArea } from '../components/SobreArea'
import { Helmet } from 'react-helmet'
import { GrupoMNGT } from '../../components/GrupoMNGT'
import ReactPixel from 'react-facebook-pixel'
import TagManager from 'react-gtm-module'
import { Modular } from '../components/Modular'
import { WhatsappButton } from '../../components/elements/WhatsappButton'
import { hotjar } from 'react-hotjar'
const tagManagerArgs = {
  gtmId: 'GTM-KXPBB883',
  dataLayer: {
    page: 'Di Napoli II',
  },
  dataLayerName: 'PageDataLayer',
}
export function DiNapoliII() {
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
      name: 'Passagem de Elétrica',
      value: 25,
    },
    {
      name: 'Levantamento de Placas Lightwall',
      value: 90,
    },
    {
      name: 'Pintura e Acabamentos',
      value: 25,
    },
    {
      name: 'Esquadrias e Marmoaria',
      value: 0,
    },

    {
      name: 'Pisos e Azulejos',
      value: 25,
    },
    {
      name: 'Portas e Janelas',
      value: 0,
    },
  ]

  const totalValue = dataPhase.reduce(
    (acc, curr) => acc + curr.value,
    0,
  )

  // Calculando a média como uma porcentagem
  const mediaPorcentagem = totalValue / dataPhase.length

  const empreendimento = 'Di Napoli II'
  return (
    <ThemeProvider page="dinapoli2">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Di Napoli II</title>
        <link
          rel="canonical"
          href="http://mysite.com/example"
        />
      </Helmet>
      <Container>
        <Header />
        <Hero
          category="lançamento"
          video="https://primeiro.rioclarofc.com.br/~grupomn/dn2/dinapoli2background.mp4"
          subname="Condomínio Residencial"
          name={empreendimento}
          description="Lotes | Casas Modulares | Casas incríveis"
          value="617,00"
          facebook="https://www.facebook.com/area.incrivelrc"
          instagram="https://www.instagram.com/dinapoli_2_residencial/"
          whatsapp="https://api.whatsapp.com/send?phone=551930970232&text=Ol%C3%A1,%20gostaria%20de%20saber%20mais%20sobre%20o%20Di%20Napoli%20II"
          buttonLink="https://api.whatsapp.com/send?phone=551930970232&text=Ol%C3%A1,%20gostaria%20de%20saber%20mais%20sobre%20o%20Di%20Napoli%20II"
        />
        <Numeros empreendimentoItens="dinapoli2" />
        <Sobre
          logoEmpreendimento="https://primeiro.rioclarofc.com.br/~grupomn/dn2/logodn2.png"
          about="O lugar do seu sonho é o Condomínio Di Napoli II, que fica num bairro encantador, o Recanto Paraíso. São exclusivos 36 lotes de 105 m² a 120 m², com vista encantadora para a Serra do Itaqueri. Sua casa pode ser modular ou ter uma planta incrível bem charmosa, humanizada e tecnológica. O Di Napoli II é o lugar para ser e pertencer, com possibilidade de geração de energia solar limpa, automação residencial e qualidade de vida excepcional."
          linkButton="https://api.whatsapp.com/send?phone=551930970232&text=Ol%C3%A1,%20gostaria%20de%20saber%20mais%20sobre%20o%20Di%20Napoli%20II"
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
          empreendimento={empreendimento}
          apresentacao="/docs/folderdn2.pdf"
        />
        <Modular />
        <Ofertas
          empreendimento="dinapoli2"
          background="https://primeiro.rioclarofc.com.br/~grupomn/dn2/portariadn2.jpg"
        />

        <Empresas />
        <Estagio
          percentageTotal={Number(
            mediaPorcentagem.toFixed(0),
          )}
          listItems={dataPhase}
        />
        <Garantia />

        <Depoimentos empreendimento="dinapoli1" />
        <Imagens empreendimento="dinapoli2" />
        <PontosDeInteresse
          empreendimento="Di Napoli II"
          empreendimentoPonto="dinapoli2"
          linkWhatsapp="https://api.whatsapp.com/send?phone=551930970232&text=Ol%C3%A1,%20gostaria%20de%20saber%20mais%20sobre%20o%20Di%20Napoli%20II"
        />
        <VejaMais
          empreendimento={empreendimento}
          empreendimentoItens="dinapoli2"
        />

        <SobreArea />

        <Redes
          facebook="https://www.facebook.com/area.incrivelrc"
          instagram="https://www.instagram.com/area.incrivel/"
        />
        <GrupoMNGT />
        <Footer />
      </Container>
      <WhatsappButton link="https://api.whatsapp.com/send?phone=551930970232&text=Ol%C3%A1,%20gostaria%20de%20saber%20mais%20sobre%20o%20Di%20Napoli%20II" />
    </ThemeProvider>
  )
}
