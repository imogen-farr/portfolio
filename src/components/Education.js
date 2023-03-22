import { Container } from '@mui/system';
import React, { useState, Component } from 'react';
import { Box } from '@mui/material';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
// import ReactDOM from 'react-dom';
import song from '../styles/music/Nostalgic-Bossa.mp3';
import useSound from 'use-sound';
import image1 from '../styles/photos/potatoes.png';
import image2 from '../styles/photos/show.png';
import image3 from '../styles/photos/show2.png';
import image4 from '../styles/photos/show3.png';
import image5 from '../styles/photos/grounded.png';
import image6 from '../styles/photos/chorus.png';
import image7 from '../styles/photos/lisa.png';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import MovingComponent from 'react-moving-text';

// function Education() {
class Education extends Component {
  state = {
    audio: new Audio(song),
    isPlaying: false
  };

  playPause = () => {
    const isPlaying = this.state.isPlaying;

    if (isPlaying) {
      this.state.audio.pause();
    } else {
      this.state.audio.play();
    }
    this.setState({ isPlaying: !isPlaying });
  };

  // image1 = require('../styles/photos/potatoes.png');
  // image2 = require('../styles/photos/show.png');
  // image3 = require('../styles/photos/show2.png');
  // image4 = require('../styles/photos/show3.png');
  // image5 = require('../styles/photos/grounded.png');
  // image6 = require('../styles/photos/chorus.png');
  // image7 = require('../styles/photos/lisa.png');

  // [play] = useSound(song);

  render() {
    return (
      <Container className="hero">
        <div className="cube"></div>
        <div className="cube"></div>
        <div className="cube"></div>
        <div className="cube"></div>
        <div className="cube"></div>
        <div className="cube"></div>
        <Box className="backBox" id="backBox2">
          <Box className="closedBox" id="box2">
            <p className="FE">FORMAL EDUCATION</p>
            <Popup
              trigger={
                <button className="expand" id="expand2">
                  {' '}
                  expand &#9660;{' '}
                </button>
              }
              modal
            >
              {(close) => (
                <div className="edu-box">
                  <b>Formal Education</b>
                  <br />
                  <h3>University of Warwick - Philsophy BA</h3>

                  <p>
                    - Ethics, Philosophy of Terrorism and Counterterrorism,
                    studies of epistemology and ontology
                    <br />
                    <br />
                    <h3>The Henrietta Barnett School</h3>
                    - A Levels: Mathematics, English Literature, Art
                    <br />
                    <br />
                    <h3>General Assembly</h3>
                    - Software Engineering Immersive
                    <br />
                    <h4> TECHNICAL SOFTWARE SKILLS:</h4>
                    Frontend: React, Javascript, HTML, CSS, Sass, Material UI,
                    Bulma, Chrome DevTools
                    <br />
                    Backend: Express, Node.js, MongoDB, Mongoose, Python, Django
                    REST Framework, PostgreSQL
                    <br />
                    Version control: Git, GitHub
                    <br />
                    Software: VSCode, Postman, TablePlus Package: npm, pip,
                    Pipenv
                    <br />
                    Storage: Heroku, Cloudinary, Netlify
                    <br />
                    Additional software & tools: Trello, Excalidraw, Miro, Figma
                    <div>
                      <button onClick={() => close()}>Close</button>
                    </div>
                  </p>
                </div>
              )}
            </Popup>
          </Box>
        </Box>

        <Box className="backBox" id="backBox1">
          <Box className="closedBox" id="box1">
            <p className="SE">SOFTWARE ENGINEERING</p>
            <Popup
              id="popup-1"
              trigger={
                <button className="expand" id="expand1">
                  {' '}
                  expand &#9660;{' '}
                </button>
              }
              modal
            >
              {(close) => (
                <div className="SE-box">
                  <b>Software Engineering</b>
                  <br />
                  <p>
                    My first experience with the software world was during
                    lockdown, when I decided to try my hand at a short online
                    course. I completed a front-end course with Udemy, which
                    taught me the fundamentals of html, css and javascript. This
                    was mainly an introduction to the syntax and understanding
                    how to build these kinds of files, but it gave me a thirst
                    to delve further into software engineering and learn how to
                    develop real applications.
                    <br />
                    <br />
                    Shortly after completing this course, I joined EveryLife
                    Technologies as in intern for 3 months in 2021. EveryLife is
                    a SaaS company, providing software for companies in the care
                    sector; specifically for residential and domiciliary care. I
                    was thrilled to join their team and access the
                    behind-the-scenes process of software production. I was in a
                    team of 6 interns and our task was to conceptualise, design
                    and begin the development of a brand-new website feature. It
                    was a daunting but exciting endeavour, as we all had varying
                    levels of prior knowledge - some of my teammates had
                    technical experience but most of us were novices. Throughout
                    the internship we rotated around the different departments
                    &#40;product design, CX, software engineers, marketing
                    etc.&#41;, gaining insight into what each role entailed and
                    shadowing employees during their work day. While working on
                    the website feature, I was in frequent communication between
                    the different departments, to share our progress and to gain
                    support with navigating the more complex aspects of our
                    project. At the end of the internship, we formally presented
                    our project to the senior leaders and company-wide.
                    <br />
                    <br />
                    My latest achievement is my successful completion of the
                    Software Engineering Immersive course with General Assembly.
                    This was an intensive 12-week program, covering all the
                    basics of full-stack development. Held entirely on Zoom, the
                    course demanded a 9-5 schedule of lessons, followed by
                    roughly 2-3 hours of homework per day, during which we
                    consolidated the concepts learnt during the day. We had
                    daily standups to address anything we were struggling with
                    and to evaluate our progress and plans. While definitely
                    challenging, this course offered a fantastic opportunity for
                    me to really dive into the learning and develop a great
                    range of skills. Over the duration of the course, we had
                    four projects to build. Some were solo, others were in small
                    groups, but in each case we as students were responsible for
                    the building and the apps from scratch, right through to
                    deployment. &#40;You can find my projects in the
                    &#39;projects&#39; section of my page&#41;. I have loved my
                    journey so far, and am inspired to keep learning, designing
                    and coding!
                  </p>
                  <button className="close-box" onClick={() => close()}>
                    Close
                  </button>
                </div>
              )}
            </Popup>
          </Box>
        </Box>

        <Box className="backBox" id="backBox3">
          <Box className="closedBox" id="box3">
            <p className="MAM">MORE ABOUT ME</p>
            <Popup
              id="popup-3"
              trigger={
                <button className="expand" id="expand3">
                  {' '}
                  expand &#9660;{' '}
                </button>
              }
              modal
            >
              {(close) => (
                <div className="oth-box">
                  <b>More About Me</b>
                  <p>
                    <MovingComponent
                      type="shakeHorizontal"
                      duration="1000ms"
                      delay="0s"
                      direction="normal"
                      timing="ease"
                      iteration="1"
                      fillMode="forwards"
                    >
                      <PlayArrowIcon onClick={this.playPause}></PlayArrowIcon>
                      &nbsp;
                      <PauseIcon onClick={this.playPause}></PauseIcon>
                    </MovingComponent>
                    {/* <br /> */}
                    When I am not coding away at my computer, my free time is
                    spent pursuing my love for the Arts. As an avid thespian, I
                    have performed in numerous plays over the years, including
                    two at the Warwick Arts Centre &#40;the largest venue of its
                    kind in the UK outside of London!&#41; In 2020 I was also
                    invited to the National Student Drama festival,
                    independently as an actress, and seperately as a cast member
                    for a selected play. Covid &#40;😡&#41; meant that the
                    festival was held digitally, but I was still able to
                    participate in several workshops with field professionals,
                    as well as having a focussed mentor session with actress
                    Debbie Korley. Living in London means I also have great
                    access to tons of theatre shows and workshops, both amateur
                    and professional.
                    <br />
                    <br />
                    My creative thumb extends beyond acting; my other loves are
                    art and music. When it comes to the former, painting and
                    drawing are my modes of choice, and experimenting with
                    unusual materials and surfaces. &#40;Check below to see my
                    latest T-shirt painting!&#41; I also play the saxophone and
                    piano; you will rarely catch me without my headphones on or
                    on my way to a jazzy underground gig!
                  </p>
                  <div className="pics">
                    <img className="pic" src={image1} alt="Photograph"></img>
                    <img
                      className="pic"
                      id="image2"
                      src={image2}
                      alt="Photograph"
                    ></img>
                    <img
                      className="pic"
                      id="image7"
                      src={image7}
                      alt="Photograph"
                    ></img>
                    <img className="pic" src={image4} alt="Photograph"></img>
                    <img className="pic" src={image5} alt="Photograph"></img>
                    <img
                      className="pic"
                      id="image6"
                      src={image6}
                      alt="Photograph"
                    ></img>
                  </div>
                  <div>
                    <button onClick={() => close()}>Close</button>
                  </div>
                </div>
              )}
            </Popup>
          </Box>
        </Box>
      </Container>
    );
  }
}

export default Education;
