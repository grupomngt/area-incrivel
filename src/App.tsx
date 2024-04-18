import './App.css'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Numeros } from './components/Numeros'
import { Apresentacao } from './components/Apresentacao'

import { Redes } from './components/Redes'
import { Depoimentos } from './components/Depoimentos'
import { Sobre } from './components/Sobre'
import { Garantia } from './components/Garantia'
import { GrupoMNGT } from './components/GrupoMNGT'
import { Contato } from './components/Contato'
import { Footer } from './components/Footer'
import { Empreendimentos } from './components/Empreendimentos'
import { PorqueArea } from './components/PorqueArea'
import { Empresas } from './components/Empresas'
import ReactPixel from 'react-facebook-pixel'
import { useEffect } from 'react'
import TagManager from 'react-gtm-module'
import { WhatsappButton } from './components/elements/WhatsappButton'
import { hotjar } from 'react-hotjar'
function App() {
  useEffect(() => {
    const optionsHotjar = {
      id: 4947054,
      sv: 6,
    }

    hotjar.initialize(optionsHotjar)
    const options = {
      autoConfig: true,
      debug: false,
    }
    ReactPixel.init('1528293361047131', undefined, options)
    ReactPixel.pageView()
    TagManager.initialize({ gtmId: 'GTM-KXPBB883' })
  }, [])

  return (
    <main>
      <Header />
      <Hero />
      <Numeros />
      <Apresentacao />
      <Empreendimentos />

      <Depoimentos />

      <Empresas />
      <Redes
        facebook="https://www.facebook.com/area.incrivelrc"
        instagram="https://www.instagram.com/area.incrivel/"
      />

      <Sobre />
      <Garantia />
      <GrupoMNGT />
      <Contato />
      <Footer />
      <WhatsappButton link="https://api.whatsapp.com/send?phone=551930970232&text=Ol%C3%A1,%20gostaria%20de%20saber%20mais%20sobre%20os%20empreendimentos%20da%20%C3%81rea%20Incr%C3%ADvel!" />
    </main>
  )
}

export default App
