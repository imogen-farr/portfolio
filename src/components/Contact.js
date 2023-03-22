import { Button, Box } from '@mui/material';
import { Container } from '@mui/system';
import { useNavigate } from 'react-router';
import { Typography } from '@mui/material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

export default function Contact() {
  const navigate = useNavigate();
  const image1 = require('../styles/linkedin.png');
  const image2 = require('../styles/github.png');
  const text = 'farr.imo55@yahoo.com';
  const text2 = '07554915552';

  return (
    <Container className="hero">
      <div className="cube"></div>
      <div className="cube"></div>
      <div className="cube"></div>
      <div className="cube"></div>
      <div className="cube"></div>
      <div className="cube"></div>
      <h1>FIND ME HERE:</h1>
      {/* <h1 className="fade" id="contact-fade">
        CONTACT
      </h1> */}

      {/* <MovingComponent className="fade" id="fade-contact"
        type="fadeOutToBottom"
        duration="3000ms"
        delay="0s"
        direction="normal"
        timing="ease"
        iteration="200"
        fillMode="forwards"
      >
        CONTACT
      </MovingComponent> */}

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

      <Box className="email" sx={{ zIndex: '1' }}>
        {/* <Typography
          sx={{
            fontSize: '30px',
            fontFamily: 'Laila, sans-serif',
            ml: '40px',
            fontWeight: 'bold'
          }}
        >
          farr.imo55@yahoo.com <br /> 07554915552
        </Typography> */}
        <p className="copy-text">
          {text}&nbsp;&nbsp;
          <ContentCopyIcon
            className="copy-button"
            onClick={() => {
              navigator.clipboard.writeText(text);
            }}
          >
            Copy
          </ContentCopyIcon>
          <br />
          {text2}&nbsp;&nbsp;
          <ContentCopyIcon
            className="copy-button"
            onClick={() => {
              navigator.clipboard.writeText(text2);
            }}
          ></ContentCopyIcon>
        </p>
      </Box>
    </Container>
  );
}
