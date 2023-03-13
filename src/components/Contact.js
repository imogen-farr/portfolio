import { Button, Box } from '@mui/material';
import { Container } from '@mui/system';
import { useNavigate } from 'react-router';
import { Typography } from '@mui/material';

export default function Contact() {
  const navigate = useNavigate();
  const image1 = require('../styles/linkedin.png');
  const image2 = require('../styles/github.png');

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
        height: '865px',
        textAlign: 'center',
        padding: '0px',
        mt: -5
      }}
    >
      <h1>FIND ME HERE:</h1>

      <Container className="links">
        <a
          href="https://www.linkedin.com/in/imogen-farr/"
          target="_blank"
          rel="noreferrer"
        >
          <img className="logo" src={image1} alt="Linkedin Logo"></img>
        </a>
        <a
          href="https://github.com/imogen-farr"
          target="_blank"
          rel="noreferrer"
        >
          <img className="logo" id="logo2" src={image2} alt="Github Logo"></img>
        </a>
      </Container>
      <h2>OR GET IN TOUCH:</h2>

      <Box className="email">
        <Typography sx={{ fontSize: '30px' }}>
          farr.imo55@yahoo.com <br /> 07554915552
        </Typography>
      </Box>
    </Container>
  );
}
