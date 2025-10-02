// src/App.jsx

import { useState } from 'react'; // 1. Importar o useState
import Header from './components/Header';
import Footer from './components/Footer';
import ListaAlunos from './components/ListaAlunos';
import './App.css';

function App() {
  // 2. Criar o state para o contador, iniciando em 0
  const [contador, setContador] = useState(0);

  // 3. Criar a função que lida com o evento de clique
  function lidarComClique() {
    // Atualiza o valor do contador, somando 1 ao valor anterior
    setContador(contador + 1);
    console.log('Botão clicado!'); // Mensagem para vermos no console do navegador
  }

  return (
    <div className="App">
      <Header />
      <main>
        <h2>Bem-vindo, [Eduardo Pereira]!</h2>
        <p>Esta é a sua aplicação de lista de tarefas.</p>
        
        {/* 4. Adicionar o botão e o texto do contador */}
        <div>
          <button onClick={lidarComClique}>Clique aqui</button>
          <p>Você clicou {contador} vezes.</p>
        </div>

        <ListaAlunos />
      </main>
      <Footer />
    </div>
  );
}

export default App;