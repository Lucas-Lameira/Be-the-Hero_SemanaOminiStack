import React from 'react'; //importação do react
import ReactDOM from 'react-dom'; //importação do react-dom (integração do react com o navegador  )
import App from './App';//imprtando o arquivo app.js da pasta src


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

