import {Link as RouterLink} from 'react-router-dom'
import { Google } from "@mui/icons-material";
import { Button, Grid, Link, TextField, Typography } from "@mui/material";
import AuthLayout from '../layout/AuthLayout';

const LoginPage = () => {
  return (

      <AuthLayout title='Login'>
         <form>
          <Grid container >
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
              <Grid item xs={12} sm={6}>
                <Button variant="contained" fullWidth>Login</Button>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Button variant="contained" fullWidth >
                  <Google /> 
                  <Typography sx={{ml:1}} >  Google</Typography>
                
                </Button>
              </Grid>
            </Grid>
            <Grid container direction='row' justifyContent='end'>
              <Link component={RouterLink} color='inherit' underline='always' to="/auth/register" >
                Crear cuenta
              </Link>
            </Grid>
          </Grid>
        </form>
      </AuthLayout>
    
    
       
      
   
  )
}

export default LoginPage;