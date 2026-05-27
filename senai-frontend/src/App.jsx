import CardCurso from './CardCurso.jsx'
import LoginForm from './LoginForm.jsx'

function App() {
  const escola = "SENAI"
  const curso = "Técnico em desenvolvimento de sistemas"

  return (
    <div style={{padding: '20px', fontFamily: 'sans-serif'}}>
      <h1>Bem-vindo ao Front-End com React</h1>
      <p>Unidade Operacional: <strong>{escola}</strong></p>
      <p>Curso: {curso}</p>
      <hr/>

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', 
        gap: '16px', 
        marginTop: '20px' 
      }}>
        <CardCurso nomeDoCurso={"Desenvolvimento de Sistema"} cargaHoraria={124} modalidade={"Lógica"}/>
        <CardCurso nomeDoCurso={"Desenvolvimento de Sistemas"} cargaHoraria={1200} modalidade={"Técnico"}/>
        <CardCurso nomeDoCurso={"Engenharia de Software"} cargaHoraria={3200} modalidade={"Bacharelado"}/>
        <CardCurso nomeDoCurso={"Banco de Dados"} cargaHoraria={80} modalidade={"Extensão"}/>
        <CardCurso nomeDoCurso={"Programação Front-End"} cargaHoraria={240} modalidade={"Qualificação"}/>
        <CardCurso nomeDoCurso={"Segurança da Informação"} cargaHoraria={360} modalidade={"Pós-Graduação"}/>
        <CardCurso nomeDoCurso={"Metodologias Ágeis"} cargaHoraria={40} modalidade={"Workshop"}/>
        <CardCurso nomeDoCurso={"Inteligência Artificial"} cargaHoraria={180} modalidade={"Aperfeiçoamento"}/>
      </div>
      <div>
        <LoginForm />
      </div>
      
    </div>
  )
}

export default App
