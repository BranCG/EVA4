import React from 'react';

// Definición de la interfaz User para describir la estructura de cada usuario
interface User {
    id: number;
    nombre: string;
    correo: string;
    pais: string;
}

// Props esperadas por el componente CompLista, que incluyen un array de usuarios,
// funciones para eliminar y editar usuarios por su ID
interface CompListaProps {
    users: User[];                 // Array de usuarios
    onDeleteUser: (id: number) => void;   // Función para eliminar un usuario por su ID
    onEditUser: (id: number) => void;    // Función para editar un usuario por su ID
}

// Componente Funcional CompLista que muestra una lista de usuarios
const CompLista: React.FC<CompListaProps> = ({ users, onDeleteUser, onEditUser }) => {
    return (
        <div id='SUSCRIPTORES'> {/* Contenedor principal con un identificador */}
            <h2><p>LISTA DE SUSCRIPTORES</p></h2> <br /> {/* Título de la lista a mostrar */}
            {/* Mapeo sobre cada usuario en el array users */}
            {users.map(user => (
                <div key={user.id} > {/* Cada usuario tiene un div con una clave única basada en user.id */}
                    <p>{user.nombre} - {user.correo} - {user.pais}</p> {/* Muestra nombre, correo y país del usuario */}
                    {/* Botón para editar el usuario, llama a onEditUser cuando se hace click */}
                    <button onClick={() => onEditUser(user.id)} className="buttonGenerales edit-btn bg-success">Editar</button>
                    {/* Botón para eliminar el usuario, llama a onDeleteUser cuando se hace click */}
                    <button onClick={() => onDeleteUser(user.id)} className="buttonGenerales delete-btn bg-danger">Eliminar</button>
                </div>
            ))}
        </div>
    );
};

export default CompLista;  // Exporta el componente CompLista como predeterminado
