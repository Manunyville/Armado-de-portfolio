import { useState } from 'react'

import './App.css'
import Hero from './componentes/Hero/hero'
import About from './componentes/about/about'
import Service from './componentes/servicio/servicio'
import Contacto from './componentes/form/contact'

function App() {
 

  return (
    <div>
   <Hero/>
   <About/>
   <Service/>
   <Contacto/>
    </div>
  )
}

export default App
