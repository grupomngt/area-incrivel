import TagManager from 'react-gtm-module'
import { Anuncio } from '../components/_marcabranca/Anuncio'
import { Banner } from '../components/_marcabranca/Banner'
import { Container } from './styles'
import ReactPixel from 'react-facebook-pixel'
import { Helmet } from 'react-helmet'
import { useEffect } from 'react'
import { hotjar } from 'react-hotjar'
const tagManagerArgs = {
  gtmId: 'GTM-KXPBB883',
  dataLayer: {
    page: 'Casa - Venda',
  },
  dataLayerName: 'PageDataLayer',
}
export function GoogleCasa() {
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
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Casa - Venda</title>
        <link
          rel="canonical"
          href="http://mysite.com/example"
        />
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
        />
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
          number="210"
          type="CASA"
          whatsapp="(19) 3097-0312"
          link="https://wa.me/551930970312?text=Tenho+interesse+na+casa"
        />
        <Anuncio
          imgUrl="https://res.cloudinary.com/duv6mjghr/image/upload/v1712778021/casavenda_i0d9gb.png"
          price="210.000,00"
          type="casa"
          link="https://wa.me/551930970312?text=Tenho+interesse+na+casa"
        />
      </Container>
    </>
  )
}
