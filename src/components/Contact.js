import { Button, Box } from '@mui/material';
import { Container } from '@mui/system';
import { useNavigate } from 'react-router';
import { Typography } from '@mui/material';

export default function Contact() {
  const navigate = useNavigate();
  const image = require('../styles/Me3.png');

  return (
    <Container
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundImage:
          'radial-gradient(circle, rgba(164, 65,24, 0.6), rgba(164, 65,24, 0.4), rgba(164, 65, 24, 0.2) )',

        // rgb(164,65,24)
        backgroundSize: 'cover',
        minWidth: '100vw',
        minHeight: '100vh',
        textAlign: 'center',
        padding: '0px',
        mt: -5
      }}
    >
      <Box className="links">
        <h1>Where to find me:</h1>
      </Box>
    </Container>
  );
}
