// src/CardCurso.jsx

// Um componente nada mais é do que uma função JavaScript que retorna HTML (JSX)
function CardCurso(props) {
  return (
    <div style={styles.card}>
      <h3 style={styles.titulo}>{props.nomeDoCurso}</h3>
      <p style={styles.detalhe}><strong>Carga Horária:</strong> {props.cargaHoraria} horas</p>
      <p style={styles.detalhe}><strong>Modalidade:</strong> {props.modalidade}</p>
      <button 
        style={styles.botao} 
        onClick={() => alert(`Inscrição solicitada para o curso: ${props.nomeDoCurso}`)}
      >
        Inscrever-se
      </button>
    </div>
  );
}

// Estilização simples usando objetos JavaScript (Inline CSS no React)
const styles = {
  card: {
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '16px',
    backgroundColor: '#f9f9f9',
    boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
    maxWidth: '300px',
    margin: '15px 0',
    fontFamily: 'sans-serif'
  },
  titulo: {
    margin: '0 0 10px 0',
    color: '#0054a6', // Azul padrão SENAI
  },
  detalhe: {
    margin: '5px 0',
    fontSize: '14px',
    color: '#333'
  },
  botao: {
    marginTop: '12px',
    backgroundColor: '#0054a6',
    color: '#white',
    border: 'none',
    padding: '8px 12px',
    borderRadius: '4px',
    cursor: 'pointer',
    width: '100%',
    fontWeight: 'bold'
  }
};

export default CardCurso;
