import React from 'react';
import { useForm } from 'react-hook-form';
import { Box, TextField, Button } from '@mui/material';

const FormCadastro = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      nome: '',
      email: '',
      senha: '',
    },
  });

  const onSubmit = (data) => {
    console.log('Dados enviados com sucesso (React Hook Form):', data);
    reset();
  };

  return (
    <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate sx={{ mt: 1 }}>
      <TextField
        margin="normal"
        required
        fullWidth
        label="Nome"
        {...register('nome', { 
          required: 'O campo Nome é obrigatório.' 
        })}
        error={!!errors.nome}
        helperText={errors.nome?.message}
      />

      <TextField
        margin="normal"
        required
        fullWidth
        label="E-mail"
        type="email"
        {...register('email', { 
          required: 'O campo E-mail é obrigatório.',
          pattern: {
            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
            message: 'Insira um endereço de e-mail válido.'
          }
        })}
        error={!!errors.email}
        helperText={errors.email?.message}
      />

      <TextField
        margin="normal"
        required
        fullWidth
        label="Senha"
        type="password"
        {...register('senha', { 
          required: 'O campo Senha é obrigatório.',
          minLength: {
            value: 6,
            message: 'A senha deve conter no mínimo 6 caracteres.'
          }
        })}
        error={!!errors.senha}
        helperText={errors.senha?.message}
      />

      <Button 
        type="submit" 
        fullWidth 
        variant="contained" 
        size="large"
        sx={{ mt: 4, mb: 2, textTransform: 'none', borderRadius: 2 }}
      >
        Cadastrar
      </Button>
    </Box>
  );
};

export default FormCadastro;