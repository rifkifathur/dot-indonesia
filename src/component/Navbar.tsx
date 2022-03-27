import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <AppBar position="sticky">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              <Button
                sx={{ mx:6, display: 'block' }}
              >
                  <Link to="/" style={{textDecoration:'none', color: 'white'}}>Home</Link>
              </Button>
              <Button
                sx={{display: 'block' }}
              >
                    <Link to="/wishlist" style={{textDecoration:'none', color: 'white'}}>Wishlist</Link>              
                </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;