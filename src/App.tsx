import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';  //importo Booststrap
import CompNav from './ComponenteNAVBAR' 
import ImagenChuck from './ImagenChuck';
import CompFooter1 from './CompFooter';
import CompFormu from './CompForm';
import CompBtnFrase from './ComponenteFrase';

export default function App() {

  return (
    <>
    <div>
      <CompNav /> {/*Contiene componente anidado LogoChuckNorris*/}
      <div className="container p-3">
        <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 cool-xxl-6">
            <p className='titulo'><b>~ Chuck Norris no duerme, ESPERA.</b></p>
          <ImagenChuck />
          <CompBtnFrase /> {/*Contiene componente anidado CompApiRequest*/}
        </div>
        <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 cool-xxl-6">
          <CompFormu />
        </div>
      </div>
    </div>
    <CompFooter1 />
    </>
  )
}



