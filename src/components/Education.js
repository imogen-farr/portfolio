// import * as React from 'react';
// import Accordion from '@mui/material/Accordion';
// import AccordionSummary from '@mui/material/AccordionSummary';
// import AccordionDetails from '@mui/material/AccordionDetails';
// import Typography from '@mui/material/Typography';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import { Container } from '@mui/system';

// export default function Education() {
//   return (
//     <Container
//       className="education"
//       sx={{
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundImage:
//           'radial-gradient(circle, rgba(103, 104, 106, 0.9), rgba(103, 104, 106, 0.6), rgba(103, 104,  106, 0.2) )',

//         // rgb(164,65,24)
//         backgroundSize: 'cover',
//         minWidth: '100vw',
//         minHeight: '100vh',
//         height: '865px',
//         textAlign: 'center',
//         padding: '0px',
//         mt: -5
//       }}
//     >
//       <Accordion
//         sx={{
//           backgroundColor: 'rgba(255, 0, 255, 0.5)',
//           marginBottom: '20px',
//           width: '700px'
//         }}
//       >
//         <AccordionSummary
//           expandIcon={<ExpandMoreIcon />}
//           aria-controls="panel1a-content"
//           id="panel1a-header"
//         >
//           <Typography>SOFTWARE ENGINEERING</Typography>
//         </AccordionSummary>
//         <AccordionDetails>
// <Typography>
//   My first experience with the software world was during lockdown,
//   when I decided to try my hand at a short online course. I completed
//   a front-end course with Udemy, which taught me the fundamentals of
//   html, css and javascript. This was mainly an introduction to the
//   syntax and understanding how to build these kinds of files, but it
//   gave me a thirst to delve further into software engineering and
//   learn how to develop real applications.
//   <br />
//   <br />
//   Shortly after completing this course, I joined EveryLife
//   Technologies as in intern for 3 months in 2021. EveryLife is a SaaS
//   company, providing software for companies in the care sector;
//   specifically for residential and domiciliary care. I was thrilled to
//   join their team and access the behind-the-scenes process of software
//   production. I was in a team of 6 interns and our task was to
//   conceptualise, design and begin the development of a brand-new
//   website feature. It was a daunting but exciting endeavour, as we all
//   had varying levels of prior knowledge - some of my teammates had
//   technical experience but most of us were novices. Throughout the
//   internships we rotated around the different departments (product
//   design, CX, software engineers, marketing etc.), gaining insight
//   into what each role entailed and shadowing employees during their
//   work day. While working on the website feature, I was in frequent
//   communication between the different departments, to share our
//   progress and to gain support with navigating the more complex
//   aspects of our project. At the end of the internship, we formally
//   presented our project to the senior leaders and company-wide.
//   <br />
//   <br />
//   My latest achievement is my successful completion of the Software
//   Engineering Immersive course with General Assembly. This was an
//   intensive 12-week program, covering all the basics of full-stack
//   development. Held entirely on Zoom, the course demanded a 9-5
//   schedule of lessons, followed by roughly 2-3 hours of homework per
//   day, during which we consolidated the concepts learnt during the
//   day. We had daily standups to address anything we were struggling
//   with and to evaluate our progress and plans. While definitely
//   challenging, this course offered a fantastic opportunity for me to
//   really dive into the learning and develop a great range of skills.
//   Over the duration of the course, we had four projects to build. Some
//   were solo, others were in small groups, but in each case we as
//   students were responsible for the building and the apps from
//   scratch, right through to deployment. _You can find my projects in
//   the _projects_ section of my page_. I have loved my journey so far,
//   and am inspired to keep learning, designing and coding!
// </Typography>
//         </AccordionDetails>
//       </Accordion>

//       <Accordion
//         sx={{ backgroundColor: 'rgb(168, 181, 224)', marginBottom: '20px' }}
//       >
//         <AccordionSummary
//           expandIcon={<ExpandMoreIcon />}
//           aria-controls="panel2a-content"
//           id="panel2a-header"
//         >
//           <Typography>FORMAL EDUCATION</Typography>
//         </AccordionSummary>
//         <AccordionDetails>
//           <Typography>
// University of Warwick - Philsophy BA
// <br />
// - Ethics, Philosophy of Terrorism and Counterterrorism, studies of
// epistemology and ontology
// <br />
// <br />
// The Henrietta Barnett School
// <br />- A Levels: Mathematics, English Literature, Art
//           </Typography>
//         </AccordionDetails>
//       </Accordion>

//       <Accordion
//         sx={{ backgroundColor: 'rgba(212, 115, 5, 0.5)', width: '700px' }}
//       >
//         <AccordionSummary
//           expandIcon={<ExpandMoreIcon />}
//           aria-controls="panel2a-content"
//           id="panel2a-header"
//         >
//           <Typography>MORE ABOUT ME</Typography>
//         </AccordionSummary>
//         <AccordionDetails>
//           <Typography>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
//             malesuada lacus ex, sit amet blandit leo lobortis eget.
//           </Typography>
//         </AccordionDetails>
//       </Accordion>
//     </Container>
//   );
// }

// rgb(212, 115, 5);

//OPTION 2:
// import { Container } from '@mui/system';
// import React, { useState } from 'react';
// import Popup1 from './popups/Popup1';
// import Popup2 from './popups/Popup2';
// import Popup3 from './popups/Popup3';
// import { Box } from '@mui/material';

// function Education() {
//   const [isOpen, setIsOpen] = useState(false);

//   const togglePopup = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <Container
//       sx={{
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundImage:
//           'radial-gradient(circle, rgba(103, 104, 106, 0.9), rgba(103, 104, 106, 0.6), rgba(103, 104,  106, 0.2) )',
//         // rgb(164,65,24)
//         backgroundSize: 'cover',
//         minWidth: '100vw',
//         minHeight: '100vh',
//         height: '865px',
//         textAlign: 'center',
//         padding: '0px',
//         mt: -5
//       }}
//     >
//       <Box className="backBox" id="backBox2">
//         <Box className="closedBox" id="box2">
//           <p>FORMAL EDUCATION</p>
//           <button onClick={togglePopup}>ExPaNd</button>
//           {isOpen && (
//             <Popup2
//               inner={
//                 <>
//                   <b>Formal Education</b>
//                   <p>some text</p>
//                   <button onClick={togglePopup}>Close</button>
//                 </>
//               }
//               handleClose={togglePopup}
//             />
//           )}
//         </Box>
//       </Box>

//       <Box className="backBox" id="backBox1">
//         <Box className="closedBox" id="box1">
//           <p>SOFTWARE ENGINEERING</p>
//           <button onClick={togglePopup}>EXPAND</button>
//           {isOpen && (
//             <Popup1
//               text={
//                 <>
// <b>Software Engineering</b>
// <p>
//   My first experience with the software world was during
//   lockdown, when I decided to try my hand at a short online
//   course. I completed a front-end course with Udemy, which
//   taught me the fundamentals of html, css and javascript. This
//   was mainly an introduction to the syntax and understanding
//   how to build these kinds of files, but it gave me a thirst
//   to delve further into software engineering and learn how to
//   develop real applications.
//   <br />
//   <br />
//   Shortly after completing this course, I joined EveryLife
//   Technologies as in intern for 3 months in 2021. EveryLife is
//   a SaaS company, providing software for companies in the care
//   sector; specifically for residential and domiciliary care. I
//   was thrilled to join their team and access the
//   behind-the-scenes process of software production. I was in a
//   team of 6 interns and our task was to conceptualise, design
//   and begin the development of a brand-new website feature. It
//   was a daunting but exciting endeavour, as we all had varying
//   levels of prior knowledge - some of my teammates had
//   technical experience but most of us were novices. Throughout
//   the internships we rotated around the different departments
//   (product design, CX, software engineers, marketing etc.),
//   gaining insight into what each role entailed and shadowing
//   employees during their work day. While working on the
//   website feature, I was in frequent communication between the
//   different departments, to share our progress and to gain
//   support with navigating the more complex aspects of our
//   project. At the end of the internship, we formally presented
//   our project to the senior leaders and company-wide.
//   <br />
//   <br />
//   My latest achievement is my successful completion of the
//   Software Engineering Immersive course with General Assembly.
//   This was an intensive 12-week program, covering all the
//   basics of full-stack development. Held entirely on Zoom, the
//   course demanded a 9-5 schedule of lessons, followed by
//   roughly 2-3 hours of homework per day, during which we
//   consolidated the concepts learnt during the day. We had
//   daily standups to address anything we were struggling with
//   and to evaluate our progress and plans. While definitely
//   challenging, this course offered a fantastic opportunity for
//   me to really dive into the learning and develop a great
//   range of skills. Over the duration of the course, we had
//   four projects to build. Some were solo, others were in small
//   groups, but in each case we as students were responsible for
//   the building and the apps from scratch, right through to
//   deployment. _You can find my projects in the _projects_
//   section of my page_. I have loved my journey so far, and am
//   inspired to keep learning, designing and coding!
// </p>
//                   <button onClick={togglePopup}>Close</button>
//                 </>
//               }
//               handleClose={togglePopup}
//             />
//           )}
//         </Box>
//       </Box>

//       <Box className="backBox" id="backBox3">
//         <Box className="closedBox" id="box3">
//           <p>MORE ABOUT ME</p>
//           <button onClick={togglePopup}>Expand</button>
//           {isOpen && (
//             <Popup3
//               words={
//                 <>
//                   <b>More About Me</b>
//                   <p>diff text</p>
//                   <button onClick={togglePopup}>Close</button>
//                 </>
//               }
//               handleClose={togglePopup}
//             />
//           )}
//         </Box>
//       </Box>
//     </Container>
//   );
// }

// export default Education;

//option 3:

import { Container } from '@mui/system';
import React, { useState } from 'react';
import { Box } from '@mui/material';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

function Education() {
  const image1 = require('../styles/potatoes.png');
  const image2 = require('../styles/show.png');
  const image3 = require('../styles/show2.png');
  const image4 = require('../styles/show3.png');
  const image5 = require('../styles/grounded.png');
  const image6 = require('../styles/chorus.png');
  const image7 = require('../styles/lisa.png');

  return (
    <Container
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
      <Box className="backBox" id="backBox2">
        <Box className="closedBox" id="box2">
          <p>FORMAL EDUCATION</p>
          <Popup trigger={<button> Expand </button>} modal>
            {(close) => (
              <div className="edu-box">
                <b>Formal Education</b>
                <br />
                <p>
                  University of Warwick - Philsophy BA
                  <br />
                  - Ethics, Philosophy of Terrorism and Counterterrorism,
                  studies of epistemology and ontology
                  <br />
                  <br />
                  The Henrietta Barnett School
                  <br />- A Levels: Mathematics, English Literature, Art
                  <br />
                  <br />
                  General Assembly
                  <br />- Software Engineering Immersive
                  <br />
                  - TECHNICAL SOFTWARE SKILLS:
                  <br />
                  Frontend: React, Javascript, HTML, CSS, Sass, Material UI,
                  Bulma, Chrome DevTools
                  <br />
                  Backend: Express, Node.js, MongoDB, Mongoose, Python, Django
                  REST Framework, PostgreSQL
                  <br />
                  Version control: Git, GitHub
                  <br />
                  Software: VSCode, Postman, TablePlus Package: npm, pip, Pipenv
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
          <p>SOFTWARE ENGINEERING</p>
          <Popup id="popup-1" trigger={<button> Expand </button>} modal>
            {(close) => (
              <div className="SE-box">
                <b>Software Engineering</b>
                <br />
                <p>
                  My first experience with the software world was during
                  lockdown, when I decided to try my hand at a short online
                  course. I completed a front-end course with Udemy, which
                  taught me the fundamentals of html, css and javascript. This
                  was mainly an introduction to the syntax and understanding how
                  to build these kinds of files, but it gave me a thirst to
                  delve further into software engineering and learn how to
                  develop real applications.
                  <br />
                  <br />
                  Shortly after completing this course, I joined EveryLife
                  Technologies as in intern for 3 months in 2021. EveryLife is a
                  SaaS company, providing software for companies in the care
                  sector; specifically for residential and domiciliary care. I
                  was thrilled to join their team and access the
                  behind-the-scenes process of software production. I was in a
                  team of 6 interns and our task was to conceptualise, design
                  and begin the development of a brand-new website feature. It
                  was a daunting but exciting endeavour, as we all had varying
                  levels of prior knowledge - some of my teammates had technical
                  experience but most of us were novices. Throughout the
                  internship we rotated around the different departments
                  (product design, CX, software engineers, marketing etc.),
                  gaining insight into what each role entailed and shadowing
                  employees during their work day. While working on the website
                  feature, I was in frequent communication between the different
                  departments, to share our progress and to gain support with
                  navigating the more complex aspects of our project. At the end
                  of the internship, we formally presented our project to the
                  senior leaders and company-wide.
                  <br />
                  <br />
                  My latest achievement is my successful completion of the
                  Software Engineering Immersive course with General Assembly.
                  This was an intensive 12-week program, covering all the basics
                  of full-stack development. Held entirely on Zoom, the course
                  demanded a 9-5 schedule of lessons, followed by roughly 2-3
                  hours of homework per day, during which we consolidated the
                  concepts learnt during the day. We had daily standups to
                  address anything we were struggling with and to evaluate our
                  progress and plans. While definitely challenging, this course
                  offered a fantastic opportunity for me to really dive into the
                  learning and develop a great range of skills. Over the
                  duration of the course, we had four projects to build. Some
                  were solo, others were in small groups, but in each case we as
                  students were responsible for the building and the apps from
                  scratch, right through to deployment. _You can find my
                  projects in the _projects_ section of my page_. I have loved
                  my journey so far, and am inspired to keep learning, designing
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
          <p>MORE ABOUT ME</p>
          <Popup id="popup-3" trigger={<button> Expand </button>} modal>
            {(close) => (
              <div className="oth-box">
                <b>More About Me</b>
                <br />
                When I am not coding away at my computer, my free time is spent
                pursuing my love for the Arts. As an avid thespian, I have
                performed in numerous plays over the years, including two at the
                Warwick Arts Centre &#40;the largest venue of its kind in the UK
                outside of London!&#41; In 2020 I was also invited to the
                National Student Drama festival, independently as an actress,
                and seperately as a cast member for a selected play. Covid
                &#40;😡&#41; meant that the festival was held digitally, but I
                was still able to participate in several workshops with field
                professionals, as well as having a focussed mentor session with
                actress Debbie Korley. Living in London means I also have great
                access to tons of theatre shows and workshops, both amateur and
                professional.
                <br />
                <br />
                My creative thumb extends beyond acting; my other loves are art
                and music. When it comes to the former, painting and drawing are
                my modes of choice, and experimenting with unusual materials and
                surfaces. &#40;Check below to see my latest T-shirt
                painting!&#41; I also play the saxophone and piano, so you will
                rarely catch me without my headphones on or on my way to a jazzy
                underground gig!
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

export default Education;
