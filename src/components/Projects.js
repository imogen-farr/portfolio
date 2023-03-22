import { Button, Box } from '@mui/material';
import { Container } from '@mui/system';
import { useNavigate } from 'react-router';
import { Typography } from '@mui/material';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';

export default function Projects() {
  const navigate = useNavigate();

  // const bull = (
  //   <Box
  //     component="span"
  //     sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  //   >
  //     •
  //   </Box>
  // );

  return (
    <Container className="hero2">
      <div className="cube2"></div>
      <div className="cube2"></div>
      <div className="cube2"></div>
      <div className="cube2"></div>
      <div className="cube2"></div>
      <div className="cube2"></div>
      <div className="projects">
        <Card
          className="project"
          id="proj1"
          sx={{
            borderRadius: '50px',
            boxShadow: '0 0 10px 5px white'
          }}
        >
          <CardContent>
            <Typography
              sx={{
                fontSize: 18,
                fontFamily: 'Laila, sans-serif',
                mb: '0'
              }}
              color="text.secondary"
              gutterBottom
            >
              Project 1
            </Typography>
            <Typography
              sx={{
                fontSize: 10,
                fontFamily: 'Laila, sans-serif',
                color: 'white'
              }}
              color="text.secondary"
              gutterBottom
            >
              Solo, 1 week
            </Typography>
            <Box className="banner">
              <Typography
                variant="h5"
                component="div"
                sx={{
                  fontFamily: 'Laila, sans-serif',
                  fontWeight: 'bold',
                  color: '#385576'
                }}
              >
                &#8281; MASTERMIND &#8281;
              </Typography>
            </Box>
            <br />
            <br />
            <Typography
              sx={{ fontFamily: 'Laila, sans-serif', fontWeight: 'bold' }}
              color="text.primary"
            >
              &#124; Web browser game &#124;
            </Typography>
            <Typography
              sx={{
                mb: 1.5,
                fontFamily: 'Laila, sans-serif',
                fontStyle: 'italic'
              }}
              color="text.primary"
            >
              &#40;HTML, CSS, Javascript&#41;
            </Typography>
            <Typography
              variant="body2"
              sx={{
                fontFamily: 'Laila, sans-serif'
              }}
            >
              <br />
              Mastermind, the classic family game turned digital. Using
              Javascript for functionality, this game challenges you to play
              against the computer and use your pattern-solving skills to crack
              the code and win.
              <br />
            </Typography>
            <br />
          </CardContent>
          <CardActions>
            <a
              href="https://imogen-farr.github.io/ga-project-1/"
              target="_blank"
              rel="noreferrer"
            >
              <Button
                className="visit"
                size="small"
                sx={{
                  color: 'white',
                  ml: '90px',
                  fontFamily: 'Laila, sans-serif',
                  fontSize: '20px'
                }}
              >
                visit site
              </Button>
            </a>
          </CardActions>
        </Card>

        <Card
          className="project"
          id="proj2"
          sx={{ borderRadius: '50px', boxShadow: '0 0 10px 5px white' }}
        >
          <CardContent>
            <Typography
              sx={{ fontSize: 18, fontFamily: 'Laila, sans-serif', mb: '0' }}
              color="text.secondary"
              gutterBottom
            >
              Project 2
            </Typography>
            <Typography
              sx={{
                fontSize: 10,
                fontFamily: 'Laila, sans-serif',
                color: 'white'
              }}
              color="text.secondary"
              gutterBottom
            >
              Team &#40;3&#41;, 4 days
            </Typography>
            <Box className="banner">
              <Typography
                variant="h5"
                component="div"
                sx={{
                  fontWeight: 'bold',
                  fontFamily: 'Laila, sans-serif',
                  color: '#009194'
                }}
              >
                &#8281; MEME SITE &#8281;
              </Typography>
            </Box>
            <br />
            <br />
            <Typography
              sx={{
                mb: 0,
                fontFamily: 'Laila, sans-serif',
                fontWeight: 'bold'
              }}
              color="text.primary"
            >
              &#124; Front-end app &#124;
            </Typography>
            <Typography
              sx={{
                mb: 1.5,
                fontFamily: 'Laila, sans-serif',
                fontStyle: 'italic'
              }}
              color="text.primary"
            >
              &#40;React, CSS, front-end consuming public RESTful API&#41;
            </Typography>
            <Typography
              variant="body2"
              sx={{
                fontFamily: 'Laila, sans-serif'
              }}
            >
              This is a meme site developed using data from a public API. The
              site retrieves the data and displays it to the user, allowing you
              to browse through the page, as well as offering an option to
              access a randomly generated meme.
            </Typography>
            <br />
          </CardContent>
          <CardActions>
            <a
              href="https://imogen-farr.github.io/ga-project-1/"
              target="_blank"
              rel="noreferrer"
            >
              <Button
                className="visit"
                size="small"
                sx={{
                  color: 'white',
                  ml: '90px',
                  fontFamily: 'Laila, sans-serif',
                  fontSize: '20px'
                }}
              >
                visit site
              </Button>
            </a>
          </CardActions>
        </Card>

        <Card
          className="project"
          id="proj3"
          sx={{ borderRadius: '50px', boxShadow: '0 0 10px 5px white' }}
        >
          <CardContent>
            <Typography
              sx={{ fontSize: 18, fontFamily: 'Laila, sans-serif', mb: '0' }}
              color="text.secondary"
              gutterBottom
            >
              Project 3
            </Typography>
            <Typography
              sx={{
                fontSize: 10,
                fontFamily: 'Laila, sans-serif',
                color: 'white'
              }}
              color="text.secondary"
              gutterBottom
            >
              Team &#40;3&#41;, 1 week
            </Typography>
            <Box className="banner">
              <Typography
                variant="h5"
                component="div"
                sx={{
                  fontFamily: 'Laila, sans-serif',
                  fontWeight: 'bold',
                  color: '#2F4858'
                }}
              >
                &#8281; BOOK DIARY &#8281;
              </Typography>
            </Box>
            <br />
            <br />
            <Typography
              sx={{ fontFamily: 'Laila, sans-serif', fontWeight: 'bold' }}
              color="text.primary"
            >
              &#124; Full Stack App &#124;
            </Typography>
            <Typography
              sx={{
                mb: 1.5,
                fontFamily: 'Laila, sans-serif',
                fontStyle: 'italic'
              }}
              color="text.primary"
            >
              &#40;MongoDB, Express, React, Node.js, SASS&#41;
            </Typography>
            <Typography
              variant="body2"
              sx={{
                fontFamily: 'Laila, sans-serif'
              }}
            >
              This is my first full-stack project, made using React for both the
              front-end and back-end. Users can upload and browse book reviews.
              There is also funcionality that enables the user to
              &#39;favourite&#39; other user&#39;s posts.
            </Typography>
            <br />
          </CardContent>
          <CardActions>
            <a
              href="https://imogen-farr.github.io/ga-project-1/"
              target="_blank"
              rel="noreferrer"
            >
              <Button
                className="visit"
                size="small"
                sx={{
                  color: 'white',
                  ml: '90px',
                  fontFamily: 'Laila, sans-serif',
                  fontSize: '20px'
                }}
              >
                visit site
              </Button>
            </a>
          </CardActions>
        </Card>

        <Card
          className="project"
          id="proj4"
          sx={{ borderRadius: '50px', boxShadow: '0 0 10px 5px white' }}
        >
          <CardContent>
            <Typography
              sx={{ fontSize: 18, fontFamily: 'Laila, sans-serif', mb: '0' }}
              color="text.secondary"
              gutterBottom
            >
              Project 4
            </Typography>
            <Typography
              sx={{
                fontSize: 10,
                fontFamily: 'Laila, sans-serif',
                color: 'white'
              }}
              color="text.secondary"
              gutterBottom
            >
              Solo, 1 week
            </Typography>
            <Box className="banner">
              <Typography
                variant="h5"
                component="div"
                sx={{
                  fontFamily: 'Laila, sans-serif',
                  fontWeight: 'bold',
                  color: '#656BA4'
                }}
              >
                &#8281; GOBOLINO &#8281;
              </Typography>
            </Box>
            <br />
            <br />
            <Typography
              sx={{ fontFamily: 'Laila, sans-serif', fontWeight: 'bold' }}
              color="text.primary"
            >
              &#124; Full Stack App &#124;
            </Typography>
            <Typography
              sx={{
                mb: 1.5,
                fontFamily: 'Laila, sans-serif',
                fontStyle: 'italic'
              }}
              color="text.primary"
            >
              &#40;Django REST Framework, React, MUI, SASS, PostgreSQL&#41;
            </Typography>
            <Typography
              variant="body2"
              sx={{
                fontFamily: 'Laila, sans-serif'
              }}
            >
              &#39;Gobolino&#39; is an app built with a django back-end and a
              react front-end. Users can register an account and upload
              information about their pet&#40;s&#41;. Users can also browse
              through other posts and send direct messages to eachother to share
              information about their pet.
            </Typography>
          </CardContent>
          <CardActions>
            <a
              href="https://imogen-farr.github.io/ga-project-1/"
              target="_blank"
              rel="noreferrer"
            >
              <Button
                className="visit"
                size="small"
                sx={{
                  color: 'white',
                  ml: '90px',
                  fontFamily: 'Laila, sans-serif',
                  fontSize: '20px',
                  mb: '0'
                }}
              >
                visit site
              </Button>
            </a>
          </CardActions>
        </Card>
      </div>
    </Container>
  );
}
