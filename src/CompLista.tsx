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
        <div className="list-section">
            <h2>Lista De Concursantes</h2>
            {users.map(user => (
                <div key={user.id} className="user-card">
                    <p>{user.nombre} - {user.correo} - {user.pais}</p>
                    <button onClick={() => onEditUser(user.id)} className="edit-btn">Editar</button>
                    <button onClick={() => onDeleteUser(user.id)} className="delete-btn">Eliminar</button>
                </div>
            ))}
        </div>
    );
};

export default CompLista;
