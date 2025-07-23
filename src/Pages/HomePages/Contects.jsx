import React from 'react';
import {
  Box,
  Grid,
  Typography,
  TextField,
  Button,
  Stack,
  useMediaQuery,
} from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

const ContactUs = () => {
  const isMobile = useMediaQuery('(max-width:600px)');

  return (
    <>
      <Box sx={{ p: 4, backgroundColor: '#fafafa' }}>
        <Grid container spacing={4} mt={2} sx={{px:5}}>
          {/* Left Side - Contact Info */}
          <Grid item xs={12} md={5}>
            <Box
              sx={{
                background: 'linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)',
                borderRadius: 4,
                color: 'white',
                height: '100%',
                px: 3,
                py: 4,

              }}
            >
              <Box sx={{ml:2,width:'50%'}}>
                <Typography
                variant="subtitle1"
                color="orange"
                fontWeight="bold"
                gutterBottom
              >
                Contact info
              </Typography>
              <Typography variant="h6" fontWeight="bold" gutterBottom>
                Let's Connect With Us
              </Typography>
              <Typography variant="body2" gutterBottom>
                We will help you regarding your query 24/7
              </Typography>

              <Stack direction="row" spacing={2} alignItems="flex-start" mt={3}>
                <PhoneIcon />
                <Box>
                  <Typography fontWeight="bold">Phone number</Typography>
                  <Typography>+91 1204099066</Typography>
                  <Typography>+91 9696974038</Typography>
                </Box>
              </Stack>

              <Stack direction="row" spacing={2} alignItems="flex-start" mt={3}>
                <LocationOnIcon />
                <Box>
                  <Typography fontWeight="bold">Corporate office</Typography>
                  <Typography>Office no. 47 & 48</Typography>
                  <Typography>
                    2nd floor, Girnar Palace, Aditya Circle,<br/> GIDC-Vapi, Gujarat
                  </Typography>
                  <Typography>Pincode 396191</Typography>
                </Box>
              </Stack>

              <Box mt={3}>
                <Typography fontWeight="bold">Development center Noida</Typography>
                <Typography>B-25 Sector-64, Noida (201307), Uttar Pradesh</Typography>
              </Box>

              <Stack direction="row" spacing={2} alignItems="center" mt={3}>
                <MailOutlineIcon />
                <Box>
                  <Typography fontWeight="bold">Contact Info</Typography>
                  <Typography>info@iconicyatra.ln</Typography>
                </Box>
              </Stack>
              </Box>
            </Box>
          </Grid>

          {/* Right Side - Contact Form */}
          <Grid item xs={12} md={7}>
            <Typography variant="h4" fontWeight="bold" gutterBottom textAlign={'center'} mb={10}>
              Let's Send Us a Message Below
            </Typography>
            <Grid container spacing={3}>
              <Box item xs={12} sm={6} sx={{width:'50%'}}>
                <TextField label="Your Name*" fullWidth required />
              </Box>
              <Box item xs={12} sm={6} sx={{width:'47%'}}>
                <TextField label="Your Email*" type="email" fullWidth required />
              </Box>
              <Grid item xs={12} sx={{width:'100%'}}>
                <TextField
                 label="Your Message*"
                 multiline
                 rows={5}
                 fullWidth
                 required
               />
             </Grid>

              <Grid item xs={12}>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: '#1a237e',
                    px: 4,
                    py: 1.5,
                    borderRadius: '30px',
                  }}
                >
                  SEND MESSAGE
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>

      {/* Full-width Google Map */}
      <Box sx={{ mt: 4 }}>
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224345.92404625914!2d77.06889969468788!3d28.527582010802037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce43c46e2de13%3A0xf07f63f8cc8c0b9a!2sSector%2018%2C%20Noida%2C%20Uttar%20Pradesh%20201301!5e0!3m2!1sen!2sin!4v1720519366677!5m2!1sen!2sin"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </Box>
    </>
  );
};

export default ContactUs;
