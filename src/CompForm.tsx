import React, { useState, useEffect } from 'react';

const PAISES_LATAM = [
    "Argentina", "Bolivia", "Brazil", "Chile", "Colombia", "Costa Rica",
    "Cuba", "Dominican Republic", "Ecuador", "El Salvador", "Guatemala",
    "Honduras", "Mexico", "Nicaragua", "Panama", "Paraguay", "Peru",
    "Puerto Rico", "Uruguay", "Venezuela"
];

const CompFormu: React.FC = () => {
    const [nombre, setNombre] = useState<string>(() => localStorage.getItem('nombre') || '');
    const [correo, setCorreo] = useState<string>(() => localStorage.getItem('correo') || '');
    const [pais, setPais] = useState<string>(() => localStorage.getItem('pais') || '');

    useEffect(() => {
        localStorage.setItem('nombre', nombre);
    }, [nombre]);

    useEffect(() => {
        localStorage.setItem('correo', correo);
    }, [correo]);

    useEffect(() => {
        localStorage.setItem('pais', pais);
    }, [pais]);

    const handleNombreChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNombre(e.target.value);
    };

    const handleCorreoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCorreo(e.target.value);
    };

    const handlePaisChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setPais(e.target.value);
    };

    const validarCorreo = (correo: string): boolean => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(correo);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!validarCorreo(correo)) {
            alert("Por favor ingrese un correo electrónico válido.");
            return;
        }
        alert("Formulario enviado con éxito.");
    };

    return (
        <form className='bg-dark' onSubmit={handleSubmit}>
            <label htmlFor="nombre"><b>Nombre y apellidos</b></label>
            <input
                type="text"
                id="nombre"
                value={nombre}
                onChange={handleNombreChange}
                required
            />

            <label htmlFor="correo"><b>Correo electrónico</b></label>
            <input
                type="email"
                id="correo"
                value={correo}
                onChange={handleCorreoChange}
                required
            />

            <label htmlFor="pais"><b>País</b></label>
            <select id="pais" value={pais} onChange={handlePaisChange} required>
                <option value="" disabled>Seleccione un país</option>
                {PAISES_LATAM.map((country) => (
                    <option key={country} value={country}>{country}</option>
                ))}
            </select> <br />

            <button className='buttonEspecial bg-danger' type="submit">¡Suscribirme!</button>
        </form>
    );
};

export default CompFormu;
