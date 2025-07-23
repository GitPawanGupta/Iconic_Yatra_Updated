import React from 'react';
import {
  Box,
  Typography,
  Breadcrumbs,
  Link,
  Paper,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from '@mui/material';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

const services = [
  'FIT & Group Holidays and Package tours all over India.',
  'Jungle & National Park Safari arrangements.',
  'Hotel reservations all over India.',
  'Tailor-made tours for Individuals, Honeymooners, Groups, Students, Corporate, Business tours.',
  'Car/ Coach Rentals (Budget & Luxury).',
  'Visa and forex assistance.',
  'International/ domestic air ticketing & Railway Reservation, 24-hour Airlines Reservation Counter.',
  'Package tours all over India, Jungle & National Park Safari.'
];

const Services = () => {
  return (
    <Box sx={{ backgroundColor: '#eee', minHeight: '100vh', p: 3, }}>
      {/* Breadcrumb */}
      <Paper elevation={2} sx={{ mb: 3, p: 2 }}>
        <Breadcrumbs>
          <Link underline="hover" color="inherit" href="/">
            Home
          </Link>
          <Typography color="text.primary">Service</Typography>
        </Breadcrumbs>
      </Paper>

      {/* Title */}
      <Typography variant="h6" sx={{ mb: 2 ,ml: 18, fontWeight: 'bold'}}>
        SERVICES
      </Typography>

      {/* List */}
      <List dense>
        {services.map((item, index) => (
          <ListItem key={index} disablePadding sx={{ mb: 1, ml:18 }}>
            <ListItemIcon>
              <ArrowRightIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText primary={item} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Services;
