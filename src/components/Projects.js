import { Button, Box } from '@mui/material';
import { Container } from '@mui/system';
import { useNavigate } from 'react-router';
import { Typography } from '@mui/material';

export default function Projects() {
  const navigate = useNavigate();

  return (
    <Container
      className="contact"
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundImage:
          'radial-gradient(circle, rgba(103, 104, 106, 0.9), rgba(103, 104, 106, 0.6), rgba(103, 104,  106, 0.2) )',
        // rgb(164,65,24)
        backgroundSize: 'cover',
        minWidth: '100vw',
        minHeight: '100vh',
        textAlign: 'center',
        padding: '0px',
        mt: -5
      }}
    ></Container>
  );
}
