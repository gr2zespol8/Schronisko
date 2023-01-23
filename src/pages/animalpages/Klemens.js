import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Container } from 'react-bootstrap';

const theme = createTheme();

export default function Klemens() {
  

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://firebasestorage.googleapis.com/v0/b/shelter-2e669.appspot.com/o/animal_pics%2FKlemens.jpeg?alt=media&token=a80299d0-65ef-492c-971d-50850d899bd2)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Container component="main" sx={{ mt: 8, mb: 2 }} maxWidth="sm">
        <Typography variant="h2" component="h1" gutterBottom>
          Klemens
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom>
          {'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nec laoreet ipsum. Donec luctus lacus ac tortor feugiat, a gravida ante consequat. Nam arcu neque, finibus gravida dapibus a, fringilla at erat. Etiam eget nisl in nibh porttitor consequat at ac dui. Mauris pretium augue eget felis semper aliquet. Fusce mollis quis diam a interdum. Ut gravida est sem, in sollicitudin ante maximus nec. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nunc eget elit sed erat placerat auctor. Morbi maximus fermentum velit.'}
          
        </Typography>
        <Typography variant="h6">Age: 2</Typography>
        <Typography variant="h6">Character: Mild</Typography>
      </Container>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}