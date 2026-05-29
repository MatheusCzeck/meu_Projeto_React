import { useState } from 'react'
import {
 Box,
 Button,
 TextField,
 Select,
 MenuItem,
 Checkbox,
 Switch,
 FormControlLabel,
 Tabs,
 Tab
} from '@mui/material'

import Sidebar from '../components/Sidebar'
import LoadingButton from '../components/LoadingButton'

export default function Dashboard() {
 const [drawerOpen, setDrawerOpen] = useState(false)
 const [tab, setTab] = useState(0)
 const [loading, setLoading] = useState(false)

 function handleSubmit() {
   setLoading(true)
   setTimeout(() => setLoading(false), 2000)
 }

 return (
   <Box sx={{
    display: 'flex',
    flexDirection: 'column', // Alinha os blocos um abaixo do outro
    justifyContent: 'center', // Centraliza verticalmente (caso queira no meio da tela)
    alignItems: 'center',     // Centraliza horizontalmente todos os filhos
    minHeight: '100vh',       // Ocupa a altura total da tela
    padding: 3,               // Evita que grude nas bordas em telas menores
    gap: 2                    // Cria um espaçamento padrão entre os blocos principais
  }}>
     {/* Botão abrir menu */}
     <Button onClick={() => setDrawerOpen(true)}>
       Abrir Menu
     </Button>

     <Sidebar open={drawerOpen} onClose={() => setDrawerOpen(false)} />

     {/* Tabs */}
     <Tabs value={tab} onChange={(e, v) => setTab(v)} sx={{ mb: 1 }}>
       <Tab label="Cadastro" />
       <Tab label="Preferências" />
     </Tabs>

     {/* Aba 1 */}
     {tab === 0 && (
       <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, width: '100%', maxWidth: 400 }}>
         <TextField label="Nome" fullWidth />
         <TextField label="Email" fullWidth />

         <Select defaultValue="" fullWidth>
           <MenuItem value="">Selecione o perfil</MenuItem>
           <MenuItem value="admin">Administrador</MenuItem>
           <MenuItem value="user">Usuário</MenuItem>
         </Select>

         <FormControlLabel
           control={<Checkbox />}
           label="Aceito os termos"
         />

         <LoadingButton loading={loading} onClick={handleSubmit} fullWidth>
           Salvar
         </LoadingButton>
       </Box>
     )}

     {/* Aba 2 */}
     {tab === 1 && (
       <Box sx={{ width: '100%', maxWidth: 400 }}>
         <FormControlLabel
           control={<Switch />}
           label="Receber notificações"
         />
       </Box>
     )}
   </Box>
 )
}
