import ChuckInterrog from "../assets/chuckInterrogacionn.png"


export default function ImgChuck() {
    const infoIMG = () => {     {/*Informacion de suscribirse*/}
        alert('¿UN POCO PERDIDO?\n\
            \n\ Si llenas este formulario te dare frases todos los dias a tu e-mail\n\
            No olvides llenar cada campo, DIRECTO Y SIN RODEOS!\n\
            Si quieres hacerlo, no te arrepentirás, creeme.\n\
            \n\ Saludos, Chuck!\n\
');
};
    return (
            <button className="botonIMG" onClick={infoIMG}>
                <img className='interrogacionImg' src={ChuckInterrog} alt="Chuck Interrogacion" ></img>
                <p className="clickeame">Click me, si tienes dudas..</p>
            </button>
    )

};