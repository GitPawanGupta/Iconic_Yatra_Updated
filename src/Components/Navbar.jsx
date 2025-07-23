import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Menu,
  MenuItem,
  Button,
  Container,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery
} from '@mui/material';
import { Link } from 'react-router-dom';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
//import FixDeparture from '../Pages/HomePages/FixDeparture';

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [menuType, setMenuType] = useState('');
  const [drawerOpen, setDrawerOpen] = useState(false);
  const isMobile = useMediaQuery('(max-width:900px)');

  const OpenMenu = (event, type) => {
    setAnchorEl(event.currentTarget);
    setMenuType(type);
  };

  const CloseMenu = () => {
    setAnchorEl(null);
    setMenuType('');
  };

  const dropdownMenus = [
    { label: 'Domestic', key: 'domestic' },
    { label: 'International', key: 'international' }
  ];

  const dropdownOptions = {

    domestic: ['All', 'Andaman and Nicobar', 'Ladakh', 'Kerala', 'Goa', 'Himachal Pradesh', 'Kashmir', 'Rajasthan', 'Uttarakhand'],
    international: ['All', 'Maldives', 'Europe', 'Thailand', 'Singapore', 'Bali', 'Dubai', 'Mauritius']
  };

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <Box sx={{width: '100%'}}>
       <AppBar position="static" color="transparent" sx={{ px: 1, width:'100%' }}>
      <Container maxWidth="xl">
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          
          {/* Logo */}
          <Box component={Link} to="/" sx={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
            <img
              src="https://www.travserver.com/iconicyatra/uploads/logo/company/company_logo.png?1751446251815"
              alt="Logo"
              height="70"
              style={{ marginRight:'8px' }}
              backgroundPosition="center"
            />
            
          </Box>

          {/* Right Side - Desktop vs Mobile */}
          {isMobile ? (
            <>
              <IconButton onClick={toggleDrawer} sx={{ color: '#1f3c65' }}>
                {drawerOpen ? <CloseIcon /> : <MenuIcon />}
              </IconButton>

              <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer}>
                <Box sx={{ width: 250, mt: 5 }}>
                  <List>
                    <ListItem button component={Link} to="/" onClick={toggleDrawer}>
                      <ListItemText primary="Home" />
                    </ListItem>
                    
                    {dropdownMenus.map(({ label, key }) => (
                      <Box key={key}>
                        <ListItem>
                          <ListItemText primary={label} />
                        </ListItem>
                        {(dropdownOptions[key] || []).map((item, i) => (
                          <ListItem
                            key={i}
                            button
                            component={Link}
                            to={`/${key}/${item.toLowerCase().replace(/\s/g, '-')}`}
                            onClick={toggleDrawer}
                            sx={{ pl: 4 }}
                          >
                            <ListItemText primary={item} />
                          </ListItem>
                        ))}
                      </Box>
                    ))}
                    <ListItem button component={Link} to="/holidays" onClick={toggleDrawer}>
                      <ListItemText primary="Holidays" />
                    </ListItem>
                    <ListItem button component={Link} to="/yatra" onClick={toggleDrawer}>
                      <ListItemText primary="Yatra" />
                    </ListItem>
                    <ListItem button component={Link} to="/services" onClick={toggleDrawer}>
                      <ListItemText primary="Services" />
                    </ListItem>
                    <ListItem button component={Link} to="/contact" onClick={toggleDrawer}>
                      <ListItemText primary="Contact Us" />
                    </ListItem>

                    
                  </List>
                </Box>
              </Drawer>
            </>
          ) : (
            <Box sx={{ display: 'flex', gap: 2, alignItems: 'center',backgroundPosition: 'center' }}>
              <Button component={Link} to="/" sx={{ color: '#1f3c65', textTransform: 'none' }}>Home</Button>
              

              {dropdownMenus.map(({ label, key }) => (
                <Box key={key}>
                  <Button
                    onClick={(e) => OpenMenu(e, key)}
                    sx={{ color: '#1f3c65', textTransform: 'none' }}
                    endIcon={<ArrowDropDownIcon /> }
                    
                  >
                    {label}
                  </Button>
                  <Menu
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl) && menuType === key}
                    onClose={CloseMenu}
                  >
                    {(dropdownOptions[key] || []).map((item, i) => (
                      <MenuItem
                        key={i}
                        component={Link}
                        to={`/${key}/${item.toLowerCase().replace(/\s/g, '-')}`}
                        onClick={CloseMenu}
                      >
                        {item}
                      </MenuItem>
                    ))}
                  </Menu>
                </Box>
              ))}
              <Button component={Link} to="/holidays" sx={{ color: '#1f3c65', textTransform: 'none' }}>Holidays</Button>
              <Button component={Link} to="/yatra" sx={{ color: '#1f3c65', textTransform: 'none' }}>Yatra</Button>
              <Button component={Link} to="/services" sx={{ color: '#1f3c65', textTransform: 'none' }}>Services</Button>
              <Button component={Link} to="/contact" sx={{ color: '#1f3c65', textTransform: 'none' }}>Contact Us</Button>
            </Box>
          )}
        </Toolbar>
      </Container>
    </AppBar>
    </Box>
   
  );
};

export default Navbar;
