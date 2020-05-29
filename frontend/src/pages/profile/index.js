import React from 'react';
import {Link} from 'react-router-dom'
import {FiPower, FiTrash2} from 'react-icons/fi' 

import logoImg from '../../assets/logo.svg';
import './styles.css';

export default function Profile() {
    const ongName = localStorage.getItem('ongName');

    return (
       <div className="profile-container">
           <header>
                <img src={logoImg} alt="Logo Be the Hero"/>
                <span>Bem Vinda, {ongName}</span>

                <Link className="button" to="/incidents/new">Cadastrar novo caso</Link>
                <button type="button">
                    <FiPower sixe={18} color="#e02041"/>
                </button>
           </header>

           <h1>Casos Cadastrados</h1>
           <ul>
               <li>
                   <strong>CASO:</strong>
                   <p>Caso Dale</p>

                   <strong>DESCRIÇÃO:</strong>
                   <p>Descrição Dale</p>

                   <strong>VALOR:</strong>
                   <p>Valor R$Dale</p>

                   <button type="submit">
                        <FiTrash2 size={20} color="a8a8b3"/>
                   </button>
               </li>

               <li>
                   <strong>CASO:</strong>
                   <p>Caso Dele</p>

                   <strong>DESCRIÇÃO:</strong>
                   <p>Descrição Dele</p>

                   <strong>VALOR:</strong>
                   <p>Valor R$Dele</p>

                   <button type="submit">
                        <FiTrash2 size={20} color="a8a8b3"/>
                   </button>
               </li>

               <li>
                   <strong>CASO:</strong>
                   <p>Caso Doly</p>

                   <strong>DESCRIÇÃO:</strong>
                   <p>Descrição Doly</p>

                   <strong>VALOR:</strong>
                   <p>Valor R$Doly</p>

                   <button type="submit">
                        <FiTrash2 size={20} color="a8a8b3"/>
                   </button>
               </li>

               <li>
                   <strong>CASO:</strong>
                   <p>Caso Dalen</p>

                   <strong>DESCRIÇÃO:</strong>
                   <p>Descrição Dalen</p>

                   <strong>VALOR:</strong>
                   <p>Valor R$Dalen</p>

                   <button type="submit">
                        <FiTrash2 size={20} color="a8a8b3"/>
                   </button>
               </li>
           </ul>
       </div>
    );
}