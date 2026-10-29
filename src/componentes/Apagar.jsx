import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { URL_API } from '../url';

function Apagar() {
  const [id, setId] = useState('');
  const [achou, setAchou] = useState(null);
  const [data, setData] = useState({});
  const navigate = useNavigate();

  const handleProcura = (event) => {
    event.preventDefault();
    axios.get(URL_API + '/' + id)
      .then(res => {
        setData(res.data);
        setAchou(true);
      })
      .catch(err => {
        console.log(err);
        setAchou(false);
      });
  };

  const handleApaga = () => {
    axios.delete(URL_API + '/' + id)
      .then(res => navigate('/'))
      .catch(err => console.log(err));
  };

  return (
    <div className='caixa'>
      <h3>Apagar filme</h3>

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
        <div>
          <p><strong>Id:</strong> {data.id}</p>
          <p><strong>Nome:</strong> {data.nome}</p>
          <p><strong>Gênero:</strong> {data.genero}</p>
          <p><strong>Ano:</strong> {data.ano}</p>
          <button onClick={handleApaga} className='botao'>APAGA</button>
          <Link to='/' className='botao'>CANCELA</Link>
        </div>
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

export default Apagar;
