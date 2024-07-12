import React, { useState } from "react";
import CompApiRequest from "./API";

export const CompBtnFrase: React.FC = () => {
    const [showAPIRequest, setShowAPIRequest] = useState(false);

    return (
        <div>
            <button className='buttonEspecial2 bg-dark' onClick={() => setShowAPIRequest(!showAPIRequest)}>
                {showAPIRequest ? 'Ocultar' : 'OBTEN FRASE CHUCK NORRIS'}
            </button>
            {showAPIRequest && <CompApiRequest />}
        </div>
    );
};

export default CompBtnFrase;


