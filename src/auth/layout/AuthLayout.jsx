import { Grid, Typography } from "@mui/material"

// eslint-disable-next-line react/prop-types
const AuthLayout = ({children , title}) => {
  return (
    <Grid 
      container 
      direction="column"
      justifyContent="center"
      alignItems="center"
      sx={{ minHeight: '100vh', backgroundColor: 'primary.main' , padding:4 }}
    >
      <Grid item
        className="box-shadow"
        xs={3}
        sx={{
              width: {sm: 450},
              backgroundColor: 'white',
              padding: 3,
              borderRadius: 2
           }}>
        <Typography variant="h5" sx={{ mb: 1 }}>{title}</Typography>
        { children }
      </Grid>
    </Grid>
  )
}

export default AuthLayout