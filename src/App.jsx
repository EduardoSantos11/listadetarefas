// src/App.jsx

import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ListaAlunos from './components/ListaAlunos';
import Alert from './components/Alert'; // 1. Importar o novo componente Alert
import './App.css';

function App() {
  const [contador, setContador] = useState(0);
  // 2. State para o alerta. Inicia como 'null' (nenhum alerta visível)
  const [alerta, setAlerta] = useState(null);

  function lidarComClique() {
    setContador(contador + 1);
  }

  // 3. Funções para mostrar os alertas
  function mostrarAlertaSucesso() {
    setAlerta({ message: 'Ação concluída com sucesso!', type: 'success' });
  }

  function mostrarAlertaErro() {
    setAlerta({ message: 'Ocorreu um erro na operação.', type: 'error' });
  }

  return (
    <div className="App">
      <Header />
      <main>
        <h2>Bem-vindo, [Seu Primeiro Nome]!</h2>

        {/* 4. Renderização Condicional do Alerta */}
        {alerta && <Alert message={alerta.message} type={alerta.type} />}

        <div>
          <button onClick={lidarComClique}>Clique aqui</button>
          <p>Você clicou {contador} vezes.</p>
        </div>

        {/* 5. Novos botões para acionar os alertas */}
        <div>
          <button onClick={mostrarAlertaSucesso}>Mostrar Alerta de Sucesso</button>
          <button onClick={mostrarAlertaErro}>Mostrar Alerta de Erro</button>
        </div>

        <ListaAlunos />
      </main>
      <Footer />
    </div>
  );
}

export default App;