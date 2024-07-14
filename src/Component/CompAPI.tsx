import { useState, useEffect } from "react";

//Componente funcional CompApiRequest que rEaliza una solicitud a una API y muestra el resultado.
export default function CompApiRequest() {
    const [data, setData] = useState("CARGANDO...");  //Estado local para almacenar los datos obtenidos de la API

    //Función asincrónica para obtener datoos de la API de Chuck Norris.
    const getData = async () => {
        try {
            const resp = await fetch("https://api.chucknorris.io/jokes/random");  // Realiza la solicitud GET a la API
            const json = await resp.json();  //Convierte la respuesta a formato JSON
            setData(json.value);  //Actualiza el estado 'data' con el valor del chiste obtenidoo.
        } catch (err: any) {
            setData(err.message);  //Si ocurre un error, muestra el mensaje de error en 'data'
        }
    };

    //useEffect que se ejecuta una vez al montar el componente.
    useEffect(() => {
        getData();  //Llama a la función getData para obtener los datos iniciales al cargar el componente.
    }, []);

    //Renderiza el componente con el resultado de la solicitud a la API.
    return (
        <div className="carta bg-light text-dark">  {/* Contenedor con clases de estilos */}
            <p>"{data}"</p>  {/* Muestra el dato obtenido de la API dentro de un párrafo */}
        </div>
    );
}