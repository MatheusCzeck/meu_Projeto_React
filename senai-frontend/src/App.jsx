// src/App.jsx
import React, { useState } from 'react';
import CardCurso from './CardCurso.jsx';
import LoginForm from './LoginForm.jsx';
// Importação dos componentes globais da MUI para a estrutura da página
import { Container, Typography, Box, Divider, Snackbar, Alert } from '@mui/material';
import Grid from '@mui/material/Grid';

function App() {
  const escola = "SENAI";
  const curso = "Técnico em fdesenvolvimento de sistemas";

  // Função dinâmica para tratar os cliques de inscrição dos cards
  const [notificacao, setNotificacao] = useState({
    aberto: false,
    mensagem: '',
  });

  // Função para abrir o balãozinho com o texto do curso
  const tratarInscricao = (nomeDoCurso) => {
    setNotificacao({
      aberto: true,
      mensagem: `🎉 Inscrição solicitada com sucesso para: ${nomeDoCurso}!`,
    });
  };

  const tratarLogin = (email) => {
    setNotificacao({
      aberto: true,
      mensagem: `Login realizado com sucesso para: ${email}`
    })
  }

  // Função para fechar o balãozinho (quando clica no X ou pelo tempo)
  const handleFecharNotificacao = (event, reason) => {
    if (reason === 'clickaway') return; // Evita fechar se o usuário clicar fora sem querer
    setNotificacao({ ...notificacao, aberto: false });
  };
  return (
    // Container aplica o espaçamento correto nas laterais e limita a largura
    <Container maxWidth="lg" sx={{ paddingY: '40px' }}>
      
      <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
        Bem-vindo ao Front-End com React
      </Typography>
      
      <Typography variant="body1">
        Unidade Operacional: <Box component="span" sx={{ fontWeight: 'bold' }}>{escola}</Box>
      </Typography>
      
      <Typography variant="body1" gutterBottom>
        Curso: {curso}
      </Typography>

      {/* Divider substitui a tag <hr/> nativa por uma linha elegante da MUI */}
      <Divider sx={{ marginY: '25px' }} />

      {/* Grid container substitui o CSS grid em linha antigo de forma responsiva */}
      <Grid container spacing={2} sx={{ marginTop: '20px', marginBottom: '40px' }}>
        
        {/* Passamos também a prop 'aoInscrever' criada no passo anterior */}
        <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
          <CardCurso nomeDoCurso="Desenvolvimento de Sistema" cargaHoraria={124} modalidade="Lógica" aoInscrever={tratarInscricao}/>
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
          <CardCurso nomeDoCurso="Desenvolvimento de Sistemas" cargaHoraria={1200} modalidade="Técnico" aoInscrever={tratarInscricao}/>
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
          <CardCurso nomeDoCurso="Engenharia de Software" cargaHoraria={3200} modalidade="Bacharelado" aoInscrever={tratarInscricao}/>
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
          <CardCurso nomeDoCurso="Banco de Dados" cargaHoraria={80} modalidade="Extensão" aoInscrever={tratarInscricao}/>
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
          <CardCurso nomeDoCurso="Programação Front-End" cargaHoraria={240} modalidade="Qualificação" aoInscrever={tratarInscricao}/>
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
          <CardCurso nomeDoCurso="Segurança da Informação" cargaHoraria={360} modalidade="Pós-Graduação" aoInscrever={tratarInscricao}/>
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
          <CardCurso nomeDoCurso="Metodologias Ágeis" cargaHoraria={40} modalidade="Workshop" aoInscrever={tratarInscricao}/>
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
          <CardCurso nomeDoCurso="Inteligência Artificial" cargaHoraria={180} modalidade="Aperfeiçoamento" aoInscrever={tratarInscricao}/>
        </Grid>

      </Grid>
      {/* Componente de mensagem */}
      <Snackbar 
        open={notificacao.aberto} 
        autoHideDuration={4000} // Some sozinho depois de 4 segundos
        onClose={handleFecharNotificacao}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }} // Posição: Canto inferior direito
      >
        <Alert 
          onClose={handleFecharNotificacao} 
          severity="success" // Cor verde de sucesso (pode usar 'info', 'warning' ou 'error')
          variant="filled" 
          sx={{ width: '100%', fontWeight: 'medium' }}
        >
          {notificacao.mensagem}
        </Alert>
      </Snackbar>

      {/* Sessão do formulário de Login */}
      <Box sx={{ marginTop: '40px' }}>
        <LoginForm aoLogar={tratarLogin}/>
      </Box>
      
    </Container>
  );
}

export default App;