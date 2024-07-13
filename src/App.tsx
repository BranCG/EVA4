import React, { useState, useEffect } from 'react';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';  //importo Booststrap
import CompNav from './ComponenteNAVBAR' 
import ImagenChuck from './ImagenChuck';
import CompFooter1 from './CompFooter';
import CompFormu from './CompForm';
import CompBtnFrase from './ComponenteFrase';
import CompLista from './CompLista';

interface User {
    id: number;
    nombre: string;
    correo: string;
    pais: string;
}

const App: React.FC = () => {
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
        const userCountry = prompt("Editar País:", users.find(user => user.id === id)?.pais);
        
        if (userName && userEmail && userCountry) {
            setUsers(users.map(user => (user.id === id ? { id, nombre: userName, correo: userEmail, pais: userCountry } : user)));
        }
    };

  return (
    <>
    <div>
        <CompNav /> {/*NAVBAR Contiene componente anidado LogoChuckNorris - Componente nro7*/}
        <div className='container'> 
          <p className='titulo'><b>~ Chuck Norris no duerme, ESPERA.</b></p>
              <ImagenChuck /> {/*Imagen principal de Chuck Norris*/}
              <CompBtnFrase /> {/*Contiene componente anidado CompApiRequest - Componente nro8*/}
              <CompFormu onAddUser={addUser} /> {/*seccion Formulario*/}
          <div className="list-section bg-info"> {/*seccion de lista CRUD*/}
              <CompLista users={users} onDeleteUser={deleteUser} onEditUser={editUser} />
          </div> 
        </div> 
    </div>
    <CompFooter1 /> {/*Footer de contacto*/}
    </>
  )
}

export default App;

