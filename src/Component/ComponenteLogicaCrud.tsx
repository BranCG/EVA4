import React, { useState, useEffect } from 'react';
import CompFormu from './CompForm';
import CompLista from './CompLista';


//Este componente me permite manejar la logica del CRUD mediante PROMP!
interface User {
    id: number;
    nombre: string;
    correo: string;
    pais: string;
}

const PAISES_LATAM = [
    "Argentina", "Bolivia", "Brazil", "Chile", "Colombia", "Costa Rica",
    "Cuba", "Dominican Republic", "Ecuador", "El Salvador", "Guatemala",
    "Honduras", "Mexico", "Nicaragua", "Panama", "Paraguay", "Peru",
    "Puerto Rico", "Uruguay", "Venezuela"
];

const CompLogicaCrud: React.FC = () => {
    const [users, setUsers] = useState<User[]>(() => {
        const savedUsers = localStorage.getItem('users');
        return savedUsers ? JSON.parse(savedUsers) : [];
    });

    useEffect(() => {
        localStorage.setItem('users', JSON.stringify(users));
    }, [users]);

    const addUser = (user: User) => {
        setUsers([...users, user]);
    };

    const deleteUser = (id: number) => {
        setUsers(users.filter(user => user.id !== id));
    };

    const editUser = (id: number) => {
        const userName = prompt("Editar Nombre:", users.find(user => user.id === id)?.nombre);
        const userEmail = prompt("Editar Correo:", users.find(user => user.id === id)?.correo);
        const userCountry = prompt(`Editar País (opciones: ${PAISES_LATAM.join(', ')}):`, users.find(user => user.id === id)?.pais);
        
        if (userName && userEmail && userCountry && PAISES_LATAM.includes(userCountry)) {
            setUsers(users.map(user => (user.id === id ? { id, nombre: userName, correo: userEmail, pais: userCountry } : user)));
        } else {
            alert("País no válido. Intente nuevamente.");
        }
    };

    return (
        <div>
            <CompFormu onAddUser={addUser} /> {/*seccion Formulario anida CompChuckInterrog*/}
            <div className="list-section bg-info"> {/*seccion de lista CRUD*/}
                <CompLista users={users} onDeleteUser={deleteUser} onEditUser={editUser} />
            </div>
        </div>
    );
};

export default CompLogicaCrud;
