import { useEffect } from "react"; 
import ScrollReveal from "scrollreveal";  //Importar libreríA
import imagenChuck from "../assets/imagenCHUCK.png"  //Importar la imagen de Chuck Norris desde la carpeta assetsss!!

export default function ImagenChuck() {
    useEffect(() => {
        // Aca Profe debe instalar la libreria scrollreveal, npm install scrollreveal.
        const sr = ScrollReveal({
            origin: 'top',     // La animación comienza desde la parte superior.
            distance: '50px',     // La distancia desde donde se revelará la animación.
            duration: 1000,     // Duración de la animación en milisegundos.
            delay: 200,       // Retraso antes de que comience la animación.
            reset: true         // Reinicia la animación en cada vez que se haga scroll.
        });
        sr.reveal('.imagen');  // Aplica la animación a los elementos con la clase 'imagen'.
    }, []);                      // El efecto se ejecuta solo una vez al montar el componente.

    return (
        <div>
            <img className="imagen" src={imagenChuck} alt="Chuck Norris" />
        </div>
    );
}