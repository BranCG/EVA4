import { useEffect } from "react"; 
import ScrollReveal from "scrollreveal";  //para visualizar esta libreria debe instalar scrollreveal -> npm install @types/scrollreveal
import imagenChuck from "./assets/imagenCHUCK.png"


export default function ImagenChuck() {
    useEffect(() => {
        const sr = ScrollReveal({
            origin: 'top',
            distance: '50px',
            duration: 1000,
            delay: 200,
            reset: true
        });
        sr.reveal('.imagen');
    }, []);

    return (
        <div>
            <img className="imagen" src={imagenChuck} alt="Chuck Norris" />
        </div>
    );
}