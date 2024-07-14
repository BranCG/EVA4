import React, { useState, useEffect } from 'react';
import CompFormu from './CompForm';
import CompLista from './CompLista';


//Este componente me permite manejar la logica del CRUD mediante PROMP!

//Interface, define una interfaz llamada User que describe la estructura de un objeto usuario
interface User {
    id: number;
    nombre: string;
    correo: string;
    pais: string;
}

//constante ARRAY DE PAISES PARA QUE APARESCAN EN PROMPT 
const PAISES_LATAM = [
    "Argentina", "Bolivia", "Brazil", "Chile", "Colombia", "Costa Rica",
    "Cuba", "Dominican Republic", "Ecuador", "El Salvador", "Guatemala",
    "Honduras", "Mexico", "Nicaragua", "Panama", "Paraguay", "Peru",
    "Puerto Rico", "Uruguay", "Venezuela"
];

const CompLogicaCrud: React.FC = () => {
    // Estado local para almacenar y manejar usuarios
    const [users, setUsers] = useState<User[]>(() => {
        // Inicializa el estado de 'users' obteniendo los usuarios guardados del localStorage, si existen
        const savedUsers = localStorage.getItem('users');
        return savedUsers ? JSON.parse(savedUsers) : [];
    });

    // Efecto para guardar 'users' en localStorage cada vez que cambia
    useEffect(() => {
        localStorage.setItem('users', JSON.stringify(users));
    }, [users]);

    // Función para agregar un nuevo usuario a 'users'
    const addUser = (user: User) => {
        setUsers([...users, user]);
    };

    // Función para eliminar un usuario de 'users' por su 'id' 
    const deleteUser = (id: number) => {
        setUsers(users.filter(user => user.id !== id));
    };

    // Función para editar un usuario en 'users' por su 'id' EN BASE A PROMPT !!
    const editUser = (id: number) => {
        const userName = prompt("Editar Nombre:", users.find(user => user.id === id)?.nombre);
        const userEmail = prompt("Editar Correo:", users.find(user => user.id === id)?.correo);
        const userCountry = prompt(`Editar País (opciones: ${PAISES_LATAM.join(', ')}):`, users.find(user => user.id === id)?.pais);
        
        if (userName && userEmail && userCountry && PAISES_LATAM.includes(userCountry)) {
            // Si todos los campos de edición están llenos y el país es válido (está en PAISES_LATAM)...
            setUsers(users.map(user => (user.id === id ? { id, nombre: userName, correo: userEmail, pais: userCountry } : user)));
        } else {
            // Si falta algún campo de edición o el país no es válido...
            alert("País no válido. Intente nuevamente.");
        }
    };

    return (
        <div>
            {/* Componente Formulario para añadir usuarios */}
            <CompFormu onAddUser={addUser} />
            <div className="list-section bg-info">
                {/* Componente Lista para mostrar usuarios */}
                <CompLista users={users} onDeleteUser={deleteUser} onEditUser={editUser} />
            </div>
        </div>
    );
};

export default CompLogicaCrud;
