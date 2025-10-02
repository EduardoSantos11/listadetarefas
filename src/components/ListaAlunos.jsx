// src/components/ListaAlunos.jsx

import AlunoCard from './AlunoCard'; // 1. Importar o novo componente

function ListaAlunos({ alunos }) {

  // Estilo para alinhar os cards lado a lado
  const listaStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center'
  };

  return (
    <div>
      <h3>Lista de Alunos da Turma</h3>
      {alunos.length === 0 ? (
        <p>Nenhum aluno na lista.</p>
      ) : (
        // 2. Usamos um div com estilo para organizar os cards
        <div style={listaStyle}>
          {/* 3. Mapeamos o array para criar um AlunoCard para cada aluno */}
          {alunos.map(aluno => (
            <AlunoCard key={aluno.id} aluno={aluno} />
          ))}
        </div>
      )}
    </div>
  );
}

export default ListaAlunos;