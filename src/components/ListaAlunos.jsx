// src/components/ListaAlunos.jsx

// 1. Recebemos a lista de alunos via props
function ListaAlunos({ alunos }) {

    return (
      <div>
        <h3>Lista de Alunos da Turma</h3>
        {/* Verificamos se a lista está vazia para mostrar uma mensagem */}
        {alunos.length === 0 ? (
          <p>Nenhum aluno na lista.</p>
        ) : (
          <ul>
            {/* 2. O .map() agora usa a lista recebida das props */}
            {alunos.map(aluno => (
              <li key={aluno.id}>
                {aluno.nome}
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
  
  export default ListaAlunos;