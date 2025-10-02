// src/components/ListaAlunos.jsx

function ListaAlunos() {
    // Vamos criar um array (uma lista) de objetos.
    // Cada objeto representa um aluno e tem as propriedades 'id' e 'nome'.
    const alunos = [
      { id: 1, nome: 'Ana Carolina' },
      { id: 2, nome: 'Bruno Gomes' },
      { id: 3, nome: 'Carla Dias' },
      { id: 4, nome: 'Daniel Martins' },
      { id: 5, nome: 'Eduarda Oliveira' }
    ];
  
    return (
      <div>
        <h3>Lista de Alunos da Turma</h3>
        <ul>
          {/*
            Aqui usamos a função .map() para percorrer o array 'alunos'.
            Para cada 'aluno' no array, nós criamos um item de lista <li>.
            É como um loop 'for' que cria componentes HTML.
          */}
          {alunos.map(aluno => (
            <li key={aluno.id}>
              {aluno.nome}
            </li>
          ))}
        </ul>
      </div>
    );
  }
  
  export default ListaAlunos;