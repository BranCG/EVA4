import React, { useState } from "react";
import CompApiRequest from "./CompAAPI";
import Revolver from "../assets/revolverDibujo.png"

export const CompBtnFrase: React.FC = () => {
    const [showAPIRequest, setShowAPIRequest] = useState(false);

    return (
        <div>
            <button className='buttonEspecial2 bg-info' onClick={() => setShowAPIRequest(!showAPIRequest)}>
                {showAPIRequest ? 'OCULTAR' : 'FRASE INSTANTANEA CHUCK!'}
                <img className="revolver" src={Revolver} alt="Revolver" />
            </button>
            {showAPIRequest && <CompApiRequest />}
        </div>
    );
};

export default CompBtnFrase;


