import React, { useState, useEffect } from 'react';
import ImgChuck from './CompInterrog'; 

// Array de países de América Latina
const PAISES_LATAM = [
    "Argentina", "Bolivia", "Brazil", "Chile", "Colombia", "Costa Rica",
    "Cuba", "Dominican Republic", "Ecuador", "El Salvador", "Guatemala",
    "Honduras", "Mexico", "Nicaragua", "Panama", "Paraguay", "Peru",
    "Puerto Rico", "Uruguay", "Venezuela"
];

// Definición de la interfaz User para describir la estructura de cada usuario
interface User {
    id: number;
    nombre: string;
    correo: string;
    pais: string;
}

// Props esperadas por el componente CompFormu, que incluyen una función onAddUser para agregar un usuario.
interface CompFormuProps {
    onAddUser: (user: User) => void;
}

// Componente Funcional CompFormu que muestra un formulario para agregar usuarios
const CompFormu: React.FC<CompFormuProps> = ({ onAddUser }) => {
    // Estados locales para manejar nombre, correo y país, obtenidos del localStorage si están disponibles.
    const [nombre, setNombre] = useState<string>(() => localStorage.getItem('nombre') || '');
    const [correo, setCorreo] = useState<string>(() => localStorage.getItem('correo') || '');
    const [pais, setPais] = useState<string>(() => localStorage.getItem('pais') || '');

    // useEffect para guardar en localStorage cada vez que cambian nombre, correo o país.
    useEffect(() => {
        localStorage.setItem('nombre', nombre);
    }, [nombre]);

    useEffect(() => {
        localStorage.setItem('correo', correo);
    }, [correo]);

    useEffect(() => {
        localStorage.setItem('pais', pais);
    }, [pais]);

    // Funciones para manejar cambios en los inputs del formulario.
    const handleNombreChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNombre(e.target.value);
    };

    const handleCorreoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCorreo(e.target.value);
    };

    const handlePaisChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setPais(e.target.value);
    };

    // Vaalidar el formato del correo electrónico, reutilice estructura. 
    const validarCorreo = (correo: string): boolean => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(correo);
    };

    // Función para manejar el envío del formulario
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();  //evita recargar pagina al enviar formulario.
        if (!validarCorreo(correo)) {  //Valida el formato del correo.
            alert("Por favor ingrese un correo electrónico válido.");
            return;
        }
        // Crea un nuevo objeto User con los datos del formulario y llama a onAddUser para agregarlo
        const newUser: User = {
            id: Date.now(),
            nombre,
            correo,
            pais
        };
        onAddUser(newUser);  // Llama a la función onAddUser con el nuevo usuario
        setNombre('');  // Reinicia los estados a valores vacíos después de agregar el usuario
        setCorreo('');
        setPais('');
        // Limpia también el localStorage
        localStorage.removeItem('nombre');
        localStorage.removeItem('correo');
        localStorage.removeItem('pais');
    };

    return (
        <form id='FORM' className='bg-dark text-light' onSubmit={handleSubmit}>
            <h2><b>¡LLENA EL FORMULARIO!</b></h2><br />
            {/* Input para ingresar nombre y apellidos */}
            <label htmlFor="nombre"><b>Nombre y apellidos</b></label>
            <input
                type="text"
                id="nombre"
                value={nombre}
                onChange={handleNombreChange}
                required  // Campo requerido
            />

            {/* Input para ingresar correo electrónico */}
            <label htmlFor="correo"><b>Correo electrónico</b></label>
            <input
                type="email"
                id="correo"
                value={correo}
                onChange={handleCorreoChange}
                required  // Campo requerido
            />

            {/* Select para seleccionar el país */}
            <label htmlFor="pais"><b>País</b></label>
            <select id="pais" value={pais} onChange={handlePaisChange} required>
                <option value="" disabled>Seleccione un país</option> {/* Mapeo sobre el array de países para mostrar opciones en el select */}
                {PAISES_LATAM.map((country) => (
                    <option key={country} value={country}>{country}</option>
                ))}
            </select> <br/>
            {/* Botón para enviar el formulario */}
            <button className='buttonEspecial buttonGenerales bg-danger' type="submit"><b>¡Suscribirme!</b></button> <br />
            <ImgChuck /> {/* Componente ImgChuck, anidación hacia CompInterrog de nivel 3 */}
        </form>
    );
};

export default CompFormu;
