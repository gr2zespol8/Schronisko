import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';



function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary">
      {'Copyright © '}
      <Link color="inherit" href="/">
        Friendly Shelter
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function StickyFooter() {
  const [value, setValue] = React.useState(0);
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}
    >
      <CssBaseline />
      
      <Box
        component="footer"
        sx={{
          py: 3,
          px: 2,
          mt: 'auto',
          backgroundColor: (theme) =>
            theme.palette.mode === 'dark'
              ? theme.palette.grey[200]
              : theme.palette.grey[800],
        }}
      >
        
        <Container maxWidth="lg">
          <Typography variant="body1">
          <h4>Friendly Shelter Ltd <br/>
42 Purring Street<br/>
East Birmington</h4>
          </Typography>
          <BottomNavigation 
          sx={{ m: '2rem' }}
  
>
  <BottomNavigationAction label="Twitter" href="https://www.twitter.com" icon={<TwitterIcon />} />
  <BottomNavigationAction label="Facebook" href="https://www.facebook.com" icon={<FacebookIcon />} />
  <BottomNavigationAction label="Instagram" href="https://www.instagram.com" icon={<InstagramIcon />}/>
</BottomNavigation>
          <Copyright />
        </Container>
      </Box>
    </Box>
  );
}