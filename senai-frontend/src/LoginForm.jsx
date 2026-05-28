// src/LoginForm.jsx
import React, { useState } from 'react';
import { Box, Card, CardContent, Typography, TextField, Button, Stack } from '@mui/material';

function LoginForm(props) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault(); // Impede a página de recarregar

    if (!email || !senha) {
      alert('Por favor, preencha todos os campos!');
      return;
    }

    console.log('Dados enviados para a API:', { email, senha });
    
    // Dispara a função que recebemos do App.jsx para mostrar a mensagem moderna
    if (props.aoLogar) {
      props.aoLogar(email);
    }
  };

  return (
    <Card 
      variant="outlined" 
      sx={{ 
        maxWidth: 350, 
        margin: '40px auto', 
        padding: '10px',
        boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
        borderRadius: '8px'
      }}
    >
      <CardContent>
        <Typography 
          variant="h5" 
          component="h2" 
          align="center" 
          gutterBottom
          sx={{ color: '#0054a6', fontWeight: 'bold', marginBottom: '20px' }}
        >
          Área do Aluno
        </Typography>
        
        {/* Adicionado o onSubmit de volta ao formulário */}
        <Box component="form" onSubmit={handleSubmit}>
          <Stack spacing={2.5}>
            
            <TextField
              label="E-mail"
              type="email"
              variant="outlined"
              fullWidth
              placeholder="exemplo@senai.com.br"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <TextField
              label="Senha"
              type="password"
              variant="outlined"
              fullWidth
              placeholder="Digite sua senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
            />

            {/* O tipo 'submit' faz o botão disparar automaticamente o onSubmit do formulário acima */}
            <Button 
              type="submit" 
              variant="contained" 
              fullWidth
              sx={{ 
                padding: '10px',
                backgroundColor: '#0054a6',
                fontWeight: 'bold',
                fontSize: '16px',
                marginTop: '10px',
                '&:hover': {
                  backgroundColor: '#004080'
                }
              }}
            >
              Entrar no Sistema
            </Button>

          </Stack>
        </Box>
      </CardContent>
    </Card>
  );
}

export default LoginForm;