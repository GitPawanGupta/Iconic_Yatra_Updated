import React from 'react';
import {
  Box,
  Grid,
  Typography,
  Link,
  Button,
  Stack,
} from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import { Link as RouterLink } from 'react-router-dom';
import Calendar from './Calendar';

const Footer = () => {
  return (
    <Box  sx={{ width: '100%', }}>
      <Box sx={{ bgcolor: '#1f3c65', color: '#fff', px: 4 }}>
      <Grid container spacing={4}>
        {/* Payment Section */}
                  <Grid item xs={12} md={3} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundPosition: 'center',justifyContent: 'center' }}>
                   <Box component={Link} to="/" sx={{mt:2, color: '#fff'}} >
                     <img
                       src="https://www.travserver.com/iconicyatra/uploads/logo/company/company_logo.png?1751446251815"
                       alt="Logo"
                       height="70"
                       style={{ marginRight:'0px' }}
                       backgroundPosition="center"
                     />
                    
                     <Typography variant="h5" sx={{ display: 'flex', alignItems: 'center', textDecoration: 'none', mt:2 }}>
                      About Iconic yatra.
                      </Typography>
                      <Typography variant="body1" sx={{ display: 'flex', textDecoration: 'none', }}>
                         Iconic Yatra is Best and Affordable<br/> 
                         online Travel Platform, offering <br/> 
                         an extensive range of travel<br/>  
                         solutions tailored to meet<br/>  
                         every travelers needs.        
                     </Typography>
                      </Box>
                      </Grid>

        {/* Quick Links */}
        <Grid item xs={12} sm={6} md={2} ml={12}>
          <Typography variant="h6" sx={{ letterSpacing:0.5, py:2 }}>
            IMPORTANT LINK
          </Typography>
          <Stack spacing={1}>
            <Link component={RouterLink} to="/gujarat" underline="hover" color="inherit">› Gujarat</Link>
            <Link component={RouterLink} to="/himachal" underline="hover" color="inherit">› Himachal</Link>
            <Link component={RouterLink} to="/kashmir" underline="hover" color="inherit">› Kashmir</Link>
            <Link component={RouterLink} to="/chardham" underline="hover" color="inherit">› Chardham</Link>
            <Link component={RouterLink} to="/kerala" underline="hover" color="inherit">› Kerala</Link>
            <Link component={RouterLink} to="/terms" underline="hover" color="inherit">› Terms & Conditions</Link>
            <Link component={RouterLink} to="/careers" underline="hover" color="inherit">› Careers</Link>
          </Stack>
        </Grid>

        {/* Our Menu */}
        <Grid item xs={12} sm={6} md={3} ml={12}>
          <Typography variant="h6" sx={{ letterSpacing: 1.5, py:2 }}>
            OUR MENU
          </Typography>
          <Stack spacing={1}>
            <Link component={RouterLink} to="/about" underline="hover" color="inherit">› About us</Link>
            <Link component={RouterLink} to="/blogs" underline="hover" color="inherit">› Latest Blogs</Link>
            <Link component={RouterLink} to="/gallary" underline="hover" color="inherit">› Gallary</Link>
            <Link component={RouterLink} to="/honeymoon" underline="hover" color="inherit">› Honeymoon tours</Link>
            <Link component={RouterLink} to="/testimonial" underline="hover" color="inherit">›Testimonials</Link>
            <Link component={RouterLink} to="/contact" underline="hover" color="inherit">› Contact us</Link>
            <Link component={RouterLink} to="https://newscollage.travserver.com/newstoday.html" underline="hover" color="inherit">› Latest News</Link>
          </Stack>
        </Grid>

        {/* Contact Us */}
        <Grid item xs={12} md={8} ml={12}>
          <Typography variant="h6" sx={{ letterSpacing: 1.5, py:2 }}>
            CONTACT US
          </Typography>
          <Stack spacing={1}>
            <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
              <LocationOnIcon sx={{ mr: 1 }} />
              <Typography variant="body2">
                Rayos Building, Sector 63 Rd, C Block, Sector 63,<br /> Noida, Uttar Pradesh 201301
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <CallIcon sx={{ mr: 1 }} />
              <Typography variant="body2">+91 9958120707 / +91 9990273606</Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <EmailIcon sx={{ mr: 1 }} />
              <Typography variant="body2">info@iconicyatra.com</Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <EmailIcon sx={{ mr: 1 }} />
              <Typography variant="body2">support@iconicyatra.com</Typography>
            </Box>
          </Stack>
          <Calendar/>
        </Grid>
      </Grid>

      {/* Footer Bottom */}
      <Box sx={{ borderTop: '1px solid #444', mt: 1.5,mb:1.5, pt: 0.5, textAlign:'center' }}>
        <Typography variant="body1" sx={{ color: '#ccc' }}>
          Copyright © 2025 <Box component="span" sx={{ color: 'yellow' }}>iconicyatra.com</Box> All rights reserved.                                <span sx={{textAlign:'right'}}>© Iconic Pvt. Ltd. Recognized by Ministry of Tourism, Govt of India.</span>
        </Typography>

      </Box>
    </Box>
    </Box>
    
  );
};

export default Footer;
