import ChuckInterrog from "../assets/chuckInterrogacionn.png"
import CompText from "./ComponenteTextInfo";

export default function ImgChuck() {
    const infoIMG = () => {     {/*Informacion para el formulario, sobre suscribirse*/}
        alert('¿UN POCO PERDIDO?\n\
            \n\ Si llenas este formulario te dare frases todos los dias a tu e-mail\n\
            No olvides llenar cada campo, DIRECTO Y SIN RODEOS!\n\
            Si quieres hacerlo, no te arrepentirás, creeme.\n\
            \n\ Saludos, Chuck!\n\
');
};
    return (
            <button className="botonIMG" onClick={infoIMG}>  {/*llamo a la alerta al hacer click en img*/}
                <img src={ChuckInterrog} alt="Chuck Interrogacion" ></img>
                <CompText /> {/*Anida hacia CompTextInfo, anidacion nivel 4*/}
            </button>
    )

};