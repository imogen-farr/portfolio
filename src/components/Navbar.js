import { Link } from 'react-router-dom';
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Headshot from '../styles/Me2.png';
import { Image } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

// interface Props {
//   /**
//    * Injected by the documentation to work in an iframe.
//    * You won't need it on your project.
//    */
//   window?: () => Window;
// }

const drawerWidth = 240;
const navItems = ['Home', 'About', 'Contact'];

export default function Navbar(props: Props) {
  const navigate = useNavigate();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        sx={{ backgroundColor: 'black' }}
        component="nav"
        className="navbar"
      >
        <Toolbar>
          {/* <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton> */}
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              display: { xs: 'none', sm: 'block' },
              fontFamily: 'American Typewriter (serif)',
              fontSize: '50px'
            }}
          >
            IMOGEN FARR
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {/* {navItems.map((item) => ( */}
            {/* <Button key={item} sx={{ color: '#fff' }}>
                {item}
              </Button> */}
            <Button
              onClick={() => navigate('/')}
              className="navButton"
              sx={{ color: 'white' }}
            >
              WHO AM I
            </Button>
            {/* <div className="vr" style={{ color: 'white' }}></div> */}

            <Button
              onClick={() => navigate('/contact')}
              className="navButton"
              sx={{ color: 'white' }}
            >
              CONTACT
            </Button>
            <Button className="navButton" sx={{ color: 'white' }}>
              CV
            </Button>
            <Button className="navButton" sx={{ color: 'white' }}>
              Education & Experience
            </Button>
            <Button className="navButton" sx={{ color: 'white' }}>
              PROJECTS
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth
            }
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      {/* <Image src={Headshot} className="head"></Image>
      <Box className="main" component="main" sx={{ p: 3 }}>
        {/* <Toolbar /> */}
      {/* <Typography>
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
        </Typography> */}
      {/* </Box> */} */
    </Box>
  );
}
