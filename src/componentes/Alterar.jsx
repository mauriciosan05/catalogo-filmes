import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { URL_API } from '../url';

function Alterar() {
  const [id, setId] = useState('');
  const [achou, setAchou] = useState(null);
  const [values, setValues] = useState({
    nome: '',
    genero: '',
    ano: ''
  });
  const navigate = useNavigate();

  const handleProcura = (event) => {
    event.preventDefault();
    axios.get(URL_API + '/' + id)
      .then(res => {
        setValues(res.data);
        setAchou(true);
      })
      .catch(err => {
        console.log(err);
        setAchou(false);
      });
  };

  const handleAltera = (event) => {
    event.preventDefault();
    axios.put(URL_API + '/' + id, values)
      .then(res => navigate('/'))
      .catch(err => console.log(err));
  };

  return (
    <div className='caixa'>
      <h3>Alterar filme</h3>

      {achou === null && (
        <form onSubmit={handleProcura}>
          <label htmlFor='id'>Id do filme:</label>
          <input type='text' id='id' required placeholder='Digite o id'
            onChange={e => setId(e.target.value)} />
          <button type='submit' className='botao'>PROCURA</button>
          <Link to='/' className='botao'>CANCELA</Link>
        </form>
      )}

      {achou === true && (
        <form onSubmit={handleAltera}>
          <label htmlFor='nome'>Nome:</label>
          <input type='text' id='nome' value={values.nome}
            onChange={e => setValues({ ...values, nome: e.target.value })} />

          <label htmlFor='genero'>Gênero:</label>
          <input type='text' id='genero' value={values.genero}
            onChange={e => setValues({ ...values, genero: e.target.value })} />

          <label htmlFor='ano'>Ano:</label>
          <input type='text' id='ano' value={values.ano}
            onChange={e => setValues({ ...values, ano: e.target.value })} />

          <button type='submit' className='botao'>ALTERA</button>
          <Link to='/' className='botao'>CANCELA</Link>
        </form>
      )}

      {achou === false && (
        <div>
          <p>Filme com id {id} não encontrado.</p>
          <Link to='/' className='botao'>VOLTAR</Link>
        </div>
      )}
    </div>
  );
}

export default Alterar;
