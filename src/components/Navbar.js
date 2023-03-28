import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

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
        sx={{ backgroundColor: 'black', paddingBottom: '7px' }}
        component="nav"
        className="navbar"
      >
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              display: { xs: 'none', sm: 'block' },
              fontFamily: 'Zeyada, cursive',
              fontSize: '70px',
              paddingTop: '10px',
              // color: 'rgb(193,210,191)'
              color: '#94778F'
            }}
          >
            IMOGEN FARR
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' }, length: '800px' }}>
            <Button
              onClick={() => navigate('/')}
              className="navButton"
              sx={{
                color: 'white',
                fontFamily: 'Laila, sans-serif',
                fontSize: '25px',
                // padding: '5px',
                fontWeight: 'bold'
              }}
            >
              <div className="break">&#124;&#160;</div>WHO AM I
              <div className="break">&#160;&#124;</div>
            </Button>

            <Button
              onClick={() => navigate('/contact')}
              className="navButton"
              sx={{
                color: 'white',
                fontFamily: 'Laila, sans-serif',
                fontSize: '25px',
                fontWeight: 'bold'
              }}
            >
              CONTACT<div className="break">&#160;&#124;</div>
            </Button>
            <Button
              onClick={() => navigate('/education&experience')}
              className="navButton"
              sx={{
                color: 'white',
                fontFamily: 'Laila, sans-serif',
                fontSize: '25px',
                fontWeight: 'bold'
              }}
            >
              Education & Experience
              <div className="break">&#160;&#124;</div>
            </Button>
            <Button
              onClick={() => navigate('/projects')}
              className="navButton"
              sx={{
                color: 'white',
                fontFamily: 'Laila, sans-serif',
                fontSize: '25px',
                fontWeight: 'bold'
              }}
            >
              PROJECTS<div className="break">&#160;&#124;</div>
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
    </Box>
  );
}
