import React, { useEffect } from "react"; 
import ScrollReveal from "scrollreveal";  //para visualizar esto debe instalar scrollreveal -> npm install @types/scrollreveal


export default function ImagenChuck() {
    useEffect(() => {
        const sr = ScrollReveal({
            origin: 'top',
            distance: '50px',
            duration: 1000,
            delay: 200,
            reset: true
        });
        sr.reveal('.logo');
    }, []);

    return (
        <div>
            <img className="logo" src="https://avatars.githubusercontent.com/u/17794049?v=4" alt="Chuck Norris" />
        </div>
    );
}