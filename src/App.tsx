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
      <CompNav /> {/*Contiene componente anidado LogoChuckNorris*/}
      <div className="container p-3">
        <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 cool-xxl-6">
            <p className='titulo'><b>~ Chuck Norris no duerme, ESPERA.</b></p>
          <ImagenChuck />
          <CompBtnFrase /> {/*Contiene componente anidado CompApiRequest*/}
        </div>
        <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 cool-xxl-6">
          <CompFormu onAddUser={addUser} />
        </div>
      </div>
    <div className="app-container">
            <div className="list-section">
                <CompLista users={users} onDeleteUser={deleteUser} onEditUser={editUser} />
            </div>
        </div>  
    </div>
    
    <CompFooter1 /> 
    </>
  )
}

export default App;

