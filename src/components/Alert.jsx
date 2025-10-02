
function Alert({ message, type }) {
    
    const alertStyle = {
      padding: '10px',
      borderRadius: '5px',
      color: 'white',
      margin: '10px 0',
      backgroundColor: type === 'success' ? 'green' : 'red',
    };
  
    return (
      <div style={alertStyle}>
        {message}
      </div>
    );
  }
  
  export default Alert;