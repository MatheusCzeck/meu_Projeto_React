import React from 'react';
import { Container, Box, Paper } from '@mui/material';
import Header from './components/Header';
import FormCadastro from './components/FormCadastro';

function App() {
  return (
    <Container maxWidth="sm">
      <Box sx={{ marginTop: 8, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Paper elevation={4} sx={{ padding: 4, borderRadius: 3, width: '100%' }}>
          <Header />
          <FormCadastro />
        </Paper>
      </Box>
    </Container>
  );
}

export default App;