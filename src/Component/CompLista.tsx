import React from 'react';

interface User {
    id: number;
    nombre: string;
    correo: string;
    pais: string;
}

interface CompListaProps {
    users: User[];
    onDeleteUser: (id: number) => void;
    onEditUser: (id: number) => void;
}



const CompLista: React.FC<CompListaProps> = ({ users, onDeleteUser, onEditUser }) => {
    return (
        <div id='SUSCRIPTORES'>
            <h2><p>LISTA DE SUSCRIPTORES</p></h2> <br />
            {users.map(user => (
                <div key={user.id} >
                    <p>{user.nombre} - {user.correo} - {user.pais}</p>
                    <button onClick={() => onEditUser(user.id)} className="edit-btn bg-success">Editar</button>
                    <button onClick={() => onDeleteUser(user.id)} className="delete-btn bg-danger">Eliminar</button>
                </div>
            ))}
        </div>
    );
};

export default CompLista;
