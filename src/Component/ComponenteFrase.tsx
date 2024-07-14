import React, { useState } from "react";
import CompApiRequest from "./CompAPI";  
import Revolver from "../assets/revolverDibujo.png"  

export const CompBtnFrase: React.FC = () => {
    const [showAPIRequest, setShowAPIRequest] = useState(false); // Estado para controlar si mostrar o no la solicitud a la API

    return (
        <div>
            {/* Botón que contiene logica para cambiar el estado showAPIRequest al hacer clic */}
            <button className='buttonEspecial2 bg-info' onClick={() => setShowAPIRequest(!showAPIRequest)}>
                {showAPIRequest ? 'OCULTAR' : 'FRASE INSTANTANEA CHUCK!'}  {/*Ternario, cambia el texto del botón según el estado showAPIRequest */}
                <img className="revolver" src={Revolver} alt="Revolver" />  {/* Muestra la imagen del revolver girando junto al texto del botón */}
            </button>
            {showAPIRequest && <CompApiRequest />}  {/* Renderiza CompApiRequest solo si showAPIRequest es true */}
        </div>
    );
};

export default CompBtnFrase;


