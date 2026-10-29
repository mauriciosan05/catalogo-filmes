import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { URL_API } from '../url';

function Criar() {
  const [values, setValues] = useState({
    nome: '',
    genero: '',
    ano: ''
  });
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post(URL_API, values)
      .then(res => navigate('/'))
      .catch(err => console.log(err));
  };

  return (
    <div className='caixa'>
      <h3>Criar filme</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor='nome'>Nome:</label>
        <input type='text' id='nome' placeholder='Digite o nome'
          onChange={e => setValues({ ...values, nome: e.target.value })} />

        <label htmlFor='genero'>Gênero:</label>
        <input type='text' id='genero' placeholder='Digite o gênero'
          onChange={e => setValues({ ...values, genero: e.target.value })} />

        <label htmlFor='ano'>Ano:</label>
        <input type='text' id='ano' placeholder='Digite o ano'
          onChange={e => setValues({ ...values, ano: e.target.value })} />

        <button type='submit' className='botao'>CRIAR</button>
        <Link to='/' className='botao'>CANCELAR</Link>
      </form>
    </div>
  );
}

export default Criar;
