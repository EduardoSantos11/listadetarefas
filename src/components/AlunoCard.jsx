// src/components/AlunoCard.jsx

// Recebemos o objeto 'aluno' inteiro via props
function AlunoCard({ aluno }) {
    // Estilos CSS para o card. Em JSX, escrevemos como um objeto JavaScript.
    const cardStyle = {
      border: '1px solid #ddd',
      borderRadius: '8px',
      padding: '16px',
      margin: '8px',
      width: '200px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      textAlign: 'center'
    };
  
    const nomeStyle = {
      fontSize: '1.2em',
      color: '#333'
    };
  
    const matriculaStyle = {
      fontSize: '0.9em',
      color: '#777'
    };
  
    return (
      <div style={cardStyle}>
        <h4 style={nomeStyle}>{aluno.nome}</h4>
        <p style={matriculaStyle}>Matrícula: {aluno.matricula}</p>
      </div>
    );
  }
  
  export default AlunoCard;