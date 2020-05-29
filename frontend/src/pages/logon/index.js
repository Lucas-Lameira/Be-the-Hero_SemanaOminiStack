import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom'
import {FiLogIn} from 'react-icons/fi';//import de icones instalados com o npm install react-icons. Cada icone também será um componente.

import api from '../../services/api';

import './styles.css';

import logoImg from '../../assets/logo.svg';
import heroesImg from '../../assets/heroes.png';


export default function Logon (){
    const [id, setID] = useState(''); 
    const history = useHistory();

    async function handleLogin(e){
        e.preventDefault();//fazer em todo formulário em react para evitar que ele redirecione

        try{
            const response = await api.post('sessions', {id});
            localStorage.setItem('ongId', id); //deixa o id disponivel em toda a plicação(guardando o valor)
            localStorage.setItem('ongName', response.data.name);

            history.push('/profile')
        }catch(err){
            alert('Falha no login');
        }
    }


    return(
        <div className="logon-container">
            <section className="form">
                <img src={logoImg} alt="Logo da Be the Hero"/>

                <form onSubmit={handleLogin}>
                    <h1>Faça seu logon</h1>
                    <input 
                        type="text" 
                        placeholder="Sua ID"
                        value={id}
                        onChange={e => setID(e.target.value)}
                    />

                    <button type="submit" className="button">Entrar</button>

                    <Link className="back-link" to="/register">
                        <FiLogIn size={16} color="#E02041"/>
                        Não tenho cadastro
                    </Link>
                </form>

            </section>

            <img src={heroesImg} alt="imagen capa da Be the Hero" />
        </div>
    );
}