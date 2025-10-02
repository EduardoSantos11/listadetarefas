// src/App.jsx

import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ListaAlunos from './components/ListaAlunos';
import Alert from './components/Alert';
import './App.css';

// src/App.jsx (no topo do arquivo)

// Dados iniciais dos alunos (agora com matrícula)
const alunosIniciais = [
  { id: 1, nome: 'Ana Carolina', matricula: '20250101' },
  { id: 2, nome: 'Bruno Gomes', matricula: '20250102' },
  { id: 3, nome: 'Carla Dias', matricula: '20250103' },
  { id: 4, nome: 'Daniel Martins', matricula: '20250104' },
  { id: 5, nome: 'Eduarda Oliveira', matricula: '20250105' }
];

function App() {
  const [contador, setContador] = useState(0);
  const [alerta, setAlerta] = useState(null);
  // 1. O state da lista de alunos agora vive no App.jsx
  const [alunos, setAlunos] = useState(alunosIniciais);

  function lidarComClique() {
    setContador(contador + 1);
  }

  function mostrarAlertaSucesso() {
    setAlerta({ message: 'Ação concluída com sucesso!', type: 'success' });
  }

  function mostrarAlertaErro() {
    setAlerta({ message: 'Ocorreu um erro na operação.', type: 'error' });
  }

  // 2. Função de AÇÃO para remover o último aluno
  function handleRemoverAluno() {
    if (alunos.length === 0) {
      mostrarAlertaErro();
      return; // Para a execução se não houver alunos
    }
    // Cria uma CÓPIA do array sem o último elemento
    const novaLista = alunos.slice(0, -1);
    setAlunos(novaLista); // Atualiza o state com a nova lista
    mostrarAlertaSucesso();
  }

  return (
    <div className="App">
      <Header />
      <main>
        <h2>Bem-vindo, [Seu Primeiro Nome]!</h2>

        {alerta && <Alert message={alerta.message} type={alerta.type} />}

        <div>
          <button onClick={lidarComClique}>Clique aqui</button>
          <p>Você clicou {contador} vezes.</p>
        </div>

        <div>
          <button onClick={mostrarAlertaSucesso}>Mostrar Alerta de Sucesso</button>
          <button onClick={mostrarAlertaErro}>Mostrar Alerta de Erro</button>
        </div>
        
        <hr />

        {/* 3. Botão de Ação */}
        <button onClick={handleRemoverAluno}>Ação: Remover Último Aluno</button>

        {/* 4. Passando a lista de alunos como prop */}
        <ListaAlunos alunos={alunos} />
      </main>
      <Footer />
    </div>
  );
}

export default App;