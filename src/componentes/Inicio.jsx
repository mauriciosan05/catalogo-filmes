import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { URL_API } from '../url';

function Inicio() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(URL_API)
      .then(res => setData(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
      {data.map(d => (
        <Link to={`/ler/${d.id}`} key={d.id} className='item-filme'>
          <span className='item-id'><strong>Id:</strong> {d.id}</span>
          <span><strong>Nome:</strong> {d.nome}</span>
        </Link>
      ))}
    </div>
  );
}

export default Inicio;
