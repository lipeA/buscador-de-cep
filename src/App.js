import { useState } from "react";
import { FiSearch } from 'react-icons/fi'
import './style.css';
import api from "./services/api";

function App() {

  const [cep, setCep] = useState('');

  const [dados, setDados] = useState({})


  async function handleSearch() {

    if (cep === '') {
      alert(" preencha um cep valido.")
      console.log(' clicou')
      return;
    }

    try {

      const response = await api.get(`${cep}/json`);
      console.log(response.data) // terno da api
      setDados(response.data)
      setCep("")

    } catch (error) {
      console.log(api.value)
      console.log(cep)
      alert("OPS... erro ao buscar o cep")
      setCep("")

    }




  }

  return (
    <div className="container">
      <h1 className="title"> Buscador de CEP</h1>

      {/* campo para colocar o CEP */}
      <div className="container-input">
        <input
          typeof="text"
          placeholder="Digite o CEP"
          value={cep} /* atrelando o useState ao input */
          onChange={(e) => setCep(e.target.value)}  /* passando o valor do input para a função useState */
        />
        <button className="buttonSearch" onClick={handleSearch} > <FiSearch size={25} color="#000"></FiSearch> </button>
      </div>

      {/* campo de resposta */}
      {Object.keys(dados).length > 0 && (

        <main className="main">
          <h2>  <strong>CEP</strong>: {dados.cep} </h2>
          <span> <strong>Rua</strong>: {dados.logradouro}</span>
          <span> <strong>Complemento</strong>: {dados.complemento} </span>
          <span> <strong>Setor</strong>: {dados.bairro} </span>
          <span> <strong>Cidade</strong>: {dados.localidade} - {dados.uf} </span>
        </main>

      )}


    </div>
  );
}

export default App;
