import React from 'react';//importa o react e do useState()

import './global.css';

import Routes from './routes'

function App() {
  return ( 
    <Routes/>
  );
}

export default App;

//const [count, setCount] = useState(0);//acessar o estado (o retorno é um array com duas posições[valorDaVariavel, função de atualização do valor])
/*
  function incrementar (){
    setCount(count+1);
  }
*/