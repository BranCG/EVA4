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
        <div className="list-section bg-dark text-light">
            <h2>Si estas aquí, recibiras tu frase!</h2>
            {users.map(user => (
                <div key={user.id} className="user-card">
                    <p>{user.nombre} - {user.correo} - {user.pais}</p>
                    <button onClick={() => onEditUser(user.id)} className="edit-btn bg-success">Editar</button>
                    <button onClick={() => onDeleteUser(user.id)} className="delete-btn bg-danger">Eliminar</button>
                </div>
            ))}
        </div>
    );
};

export default CompLista;
