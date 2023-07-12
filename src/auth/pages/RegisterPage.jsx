import {Link as RouterLink} from 'react-router-dom'
import { Button, Grid, Link, TextField, Typography } from "@mui/material";
import AuthLayout from '../layout/AuthLayout';

const RegisterPage = () => {
  return (

      <AuthLayout title='Crear Cuenta'>
         <form>
          <Grid container >
            <Grid item xs={12} sx={{ mt: 2 }}>
              <TextField label="Nombre Completo"
                placeholder="Nombre y Apellido"
                type="text"
                variant="filled"
                fullWidth />
          </Grid>
            <Grid item xs={12} sx={{ mt: 2 }}>
              <TextField label="Email"
                placeholder="rodrigomalegre@gmail.com"
                type="email"
                variant="filled"
                fullWidth />
            </Grid>
            <Grid item xs={12} sx={{ mt: 2 }}>
              <TextField
                label="Contraseña"
                placeholder="password"
                variant="filled"
                fullWidth />
          </Grid>  
            <Grid container spacing={2} sx={{ mb: 2, mt:1 }}>
              <Grid item xs={12} >
                <Button variant="contained" fullWidth>Crear Cuenta</Button>
              </Grid>
              <Grid item xs={12} sm={6}>
              
              </Grid>
            </Grid>
          <Grid container direction='row' justifyContent='end'>
            <Typography sx={{ mr: 1 }}>¿Ya tienes cuenta?</Typography>
            <Link component={RouterLink} color='inherit' underline='always' to="/auth/login" >
                Ingresar
              </Link>
            </Grid>
          </Grid>
        </form>
      </AuthLayout>
    )
}

export default RegisterPage;