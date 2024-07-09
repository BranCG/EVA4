import { useState } from 'react'
import './App.css'
import CompNav from './Componente' 
import 'bootstrap/dist/css/bootstrap.min.css';  //importo Booststrap
import CompAPIRequest from './API'  //importo componente que contiene api

function App() {
  const [showAPIRequest, setShowAPIRequest] = useState(false);


  return (
    <>
    <div>
      <div><CompNav /></div>
      <div>
        <button onClick={() => setShowAPIRequest(!showAPIRequest)}>
          {showAPIRequest ? 'Ocultar' : 'Obten frase Chuck-Norris'}
        </button>
        {showAPIRequest && <CompAPIRequest />}
      </div>
    </div>  
    </>
  )
}


export default App
