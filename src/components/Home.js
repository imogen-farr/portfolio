import { Button, Box } from '@mui/material';
import { Container } from '@mui/system';
import { useNavigate } from 'react-router';
import { Typography } from '@mui/material';

export default function Home() {
  // const navigate = useNavigate();
  // const image = require('../styles/Me3.png');

  return (
    <>
      <div className="bg"></div>
      <div className="bg bg2"></div>
      <div className="bg bg3"></div>
      <Box className="me"></Box>

      <Box className="main">
        <Typography
          sx={{
            fontFamily: 'Laila, sans-serif',
            fontSize: '15.3px',
            fontWeight: 'bold'
          }}
        >
          I am a junior software engineer with a thirst for problem-solving and
          a passion for creative pursuits. My interest in software engineering
          was sparked after I completed a short front-end development course
          during lockdown and I have since continued to foster this interest.
          After developing an understanding of some basic coding practices, I
          went on to do an internship at EveryLife Technologies; a company that
          provides software for the care sector. Working as a carer at the time
          allowed me to consider the plethora of opportunities that lie at the
          intersection between technology and the real-world. My software
          journey has most recently led to the completion of an immersive
          software engineering course with General Assembly. Now, with knowledge
          of the fundamentals of full-stack development, I am inspired to
          continue learning and honing in on my skills. Having studied
          philosophy at university I am also equipped with problem-solving
          skills, as well as an acute and necessary sensitivity to the human
          experience. I can offer a holistic, considered approach to any project
          and I am equipped with creative skills that will thrive in this
          environment.
        </Typography>
      </Box>
    </>
  );
}
