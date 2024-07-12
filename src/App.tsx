import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';  //importo Booststrap
import CompNav from './ComponenteNAVBAR'
import CompAPIRequest from './API'  //importo componente que contiene api
import ImagenChuck from './ImagenChuck';
import CompFooter1 from './CompFooter';
import CompFormu from './CompForm';

export default function App() {
  const [showAPIRequest, setShowAPIRequest] = useState(false);


  return (
    <>
      <div>
        <CompNav />
        <div className="container p-3">
          <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 cool-xxl-6">
            <CompFormu />
          </div>
          <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 cool-xxl-6">
            <ImagenChuck />
            <button className='buttonEspecial bg-dark' onClick={() => setShowAPIRequest(!showAPIRequest)}>
                {showAPIRequest ? 'Ocultar' : 'Obten frase Chuck-Norris'}
            </button>
              {showAPIRequest && <CompAPIRequest />}
          </div>
        </div>
      </div>
      <CompFooter1 />
    </>
  )
}



