import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { URL_API } from '../url';

function Ler() {
  const { id } = useParams();
  const [data, setData] = useState({});

  useEffect(() => {
    axios.get(URL_API + '/' + id)
      .then(res => setData(res.data))
      .catch(err => console.log(err));
  }, [id]);

  return (
    <div className='caixa'>
      <h3>Dados do filme</h3>
      <p><strong>Id:</strong> {data.id}</p>
      <p><strong>Nome:</strong> {data.nome}</p>
      <p><strong>Gênero:</strong> {data.genero}</p>
      <p><strong>Ano:</strong> {data.ano}</p>
      <Link to='/' className='botao'>CANCELAR</Link>
    </div>
  );
}

export default Ler;
