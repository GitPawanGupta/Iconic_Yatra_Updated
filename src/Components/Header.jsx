import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Link,
  IconButton,
  Stack,
  Container,
  useMediaQuery,
  useTheme,
  Box,
} from '@mui/material';
import {
  Email,
  Facebook,
  Instagram,
  WhatsApp
} from '@mui/icons-material';
import SearchIcon from '@mui/icons-material/Search';
import SearchBar from './SearchBar';

const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box sx={{width:'100%'}}>
      <AppBar position="static" sx={{ bgcolor: '#1f3c65'}}>
      <Container maxWidth="xl">
        <Toolbar sx={{ justifyContent: 'space-between', flexWrap: 'wrap', px: 0 }}>
          
          {/* Left Section */}
          <Stack direction="row" spacing={1.5} alignItems="center" flexWrap="wrap">
            <IconButton size="small" color="inherit" component="a" href="mailto:info@iconicyatra.com">
              <Email fontSize="small" />
            </IconButton>
            <Typography
              variant="body2"
              component="a"
              href="mailto:info@iconicyatra.com"
              sx={{ color: '#fff', textDecoration: 'none' }}
            >
              info@iconicyatra.com
            </Typography>
            <Typography variant="body2" sx={{ color: '#fff' }}>
              |
            </Typography>
            <Typography variant="body2" sx={{ color: '#fff' }}>
              <WhatsApp fontSize="small" /> +917053900957 
            </Typography>
            <Typography variant="body2" sx={{ color: '#fff' }}>
              |
            </Typography>
            <Typography variant="body2" sx={{ color: '#fff' }}>
             <strong> Support (24 X 7):</strong> +911202555001
            </Typography>
            
            <SearchBar/>
            <Stack direction="row" spacing={0.5} alignItems="center" flexWrap="wrap" mt={isMobile ? 1 : 0} sx={{ ml: 1 }}>
            <Typography variant="body2" color="white"  >Follow Us On</Typography>
            <IconButton size="small" color="inherit" href="https://facebook.com" target="_blank">
              <Facebook fontSize="small" />
            </IconButton>
            <IconButton size="small" color="inherit" href="https://instagram.com" target="_blank">
              <Instagram fontSize="small" />
            </IconButton>
            <IconButton size="small" color="inherit" href="https://wa.me/919999999999" target="_blank">
              <WhatsApp fontSize="small" />
            </IconButton>
            </Stack>
            <Typography variant="body2" sx={{ color: '#fff' }}>
              |
            </Typography>
             <Link href="/payment" color="inherit" underline="none" sx={{ ml: 1, fontWeight: 600 }}>
              Payment Now
            </Link>
            <Typography variant="body2" sx={{ color: '#fff' }}>
              |
            </Typography>
            <Link href="https://iconicyatra.travserver.com/crm/login" color="inherit" underline="none" sx={{ fontWeight: 600 }}>
              Admin
            </Link>
          </Stack> 
        </Toolbar>
      </Container>
    </AppBar>
    </Box>
  );
};

export default Header;
