// src/CardCurso.jsx
import React from 'react';
import { Card, CardContent, Typography, Button, Stack, Box } from '@mui/material';

function CardCurso(props) {
  // Criamos uma função interna para lidar com o clique
  const handleCliqueBotao = () => {
    // Se o componente pai passou a prop 'aoInscrever', nós a executamos passando os dados do curso
    if (props.aoInscrever) {
      props.aoInscrever(props.nomeDoCurso);
    } else {
      // Caso não passem a prop, deixamos um aviso padrão para não quebrar a tela
      console.warn("A propriedade 'aoInscrever' não foi definida para este curso.");
    }
  };

  return (
    <Card 
      variant="outlined" 
      sx={{ 
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
        borderRadius: '8px',
        backgroundColor: '#f9f9f9'
      }}
    >
      <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
        <Stack spacing={1} sx={{ flexGrow: 1 }}>
          
          <Typography 
            variant="h6" 
            component="h3" 
            sx={{ color: '#0054a6',
              fontWeight: 'bold',
              minHeight: '64px',
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden' }}
          >
            {props.nomeDoCurso}
          </Typography>

          <Typography variant="body2" color="text.primary">
            <Box component="span" sx={{ fontWeight: 'bold' }}>Carga Horária:</Box> {props.cargaHoraria} horas
          </Typography>

          <Typography variant="body2" color="text.primary">
            <Box component="span" sx={{ fontWeight: 'bold' }}>Modalidade:</Box> {props.modalidade}
          </Typography>

          {/* O onClick agora chama a nossa função interna */}
          <Button 
          variant="contained" 
          fullWidth
          onClick={() => props.aoInscrever && props.aoInscrever(props.nomeDoCurso)}
          sx={{ 
            marginTop: '20px', // Espaçamento fixo acima do botão
            backgroundColor: '#0054a6',
            fontWeight: 'bold',
            padding: '10px 0',
            '&:hover': {
              backgroundColor: '#004080',
            }
          }}
        >
          Inscrever-se
        </Button>

        </Stack>
      </CardContent>
    </Card>
  );
}

export default CardCurso;