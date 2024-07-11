import { useState } from 'react'
import './App.css'
import CompNav from './Componente'
import 'bootstrap/dist/css/bootstrap.min.css';  //importo Booststrap
import CompAPIRequest from './API'  //importo componente que contiene api
import ImagenChuck from './ImagenChuck';
import CompFooter1 from './CompFooter';

export default function App() {
  const [showAPIRequest, setShowAPIRequest] = useState(false);


  return (
    <>
      <div>
        <CompNav />
        <ImagenChuck />
        <div>
          <button onClick={() => setShowAPIRequest(!showAPIRequest)}>
            {showAPIRequest ? 'Ocultar' : 'Obten frase Chuck-Norris'}
          </button>
          {showAPIRequest && <CompAPIRequest />}
        </div>
      </div>
      <CompFooter1 />
    </>
  )
}



