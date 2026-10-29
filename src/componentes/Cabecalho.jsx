import { Link } from 'react-router-dom';

function Cabecalho() {
  return (
    <header className='cabecalho'>
      <h2>CATÁLOGO DE FILMES</h2>
      <ul>
        <li><Link to='/'>INÍCIO</Link></li>
        <li><Link to='/criar'>CRIAR</Link></li>
        <li><Link to='/alterar'>ALTERAR</Link></li>
        <li><Link to='/apagar'>APAGAR</Link></li>
      </ul>
    </header>
  );
}

export default Cabecalho;
