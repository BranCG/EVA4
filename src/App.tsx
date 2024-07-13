import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';  //importo Booststrap
import CompNav from './Component/ComponenteNAVBAR'; 
import ImagenChuck from './Component/ComponenteImagenChuck';
import CompFooter1 from './Component/CompFooter';
import CompBtnFrase from './Component/ComponenteFrase';
import CompLogicaCrud from './Component/ComponenteLogicaCrud';
//En total realice 10 componentes, estan todos en carpeta "Component".
//Profesor, favor instalar libreria scrollReveal para funcionalidad "npm install scrollreveal".
//App.css uso estilos para las CLASES que cree.
//index.css uso los estilos para los ELEMENTOS/ETIQUETAS HTML

const App: React.FC = () => {  
    return (
        <>
            <div>
                <CompNav /> {/*Barra de navegacion Contiene componente anidado LogoChuckNorris*/}
                <div className='container'> 
                    <p className='titulo'><b>~ Chuck Norris no duerme, ESPERA.</b></p>
                    <ImagenChuck /> {/*Imagen principal de Chuck Norris*/}
                    <CompBtnFrase /> {/*Contiene componente anidado CompApiRequest*/}
                    <CompLogicaCrud /> {/*Contiene logica y 2 componentes anidados CompLista y CompFormu*/}
                </div> 
            </div>
            <CompFooter1 /> {/*Footer de contacto "pie de pagina"*/}
        </>
    );
}

export default App;
