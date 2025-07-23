import React from 'react';
import { Box, Grid, Typography, Divider, useTheme, useMediaQuery } from '@mui/material';
import CountUp from 'react-countup';

const AchievementItem = ({ number, suffix, label }) => (
  <Box textAlign="center" px={2}>
    <Typography variant="h4" fontWeight="bold" color="primary">
      <CountUp end={number} duration={2.5} suffix={suffix} />
    </Typography>
    <Typography variant="subtitle1" mt={1} sx={{ fontWeight: 500 }}>
      {label}
    </Typography>
  </Box>
);

const Achievements = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const achievements = [
    { number: 9, suffix: '+', label: 'Years of Experience' },
    { number: 100, suffix: '+', label: 'Travel Experts' },
    { number: 1500, suffix: '+', label: 'Happy Travelers' },
    { number: 25, suffix: '+', label: 'Destinations Covered' },
  ];

  return (
    <Box sx={{ px: 2, width: '100%', }}>
      <Box sx={{justifyContent: 'center', alignItems: 'center', backgroundPosition: 'center',}}>
      <Typography
        variant="h4"
        align="center"
        fontWeight="bold"
        gutterBottom
        sx={{ color: '#1b1f3b' }}
      >
        Our Achievements
      </Typography>

      <Grid
        container
        spacing={4}
        justifyContent="center"
        alignItems="center"
        sx={{ maxWidth: '1200px', mx: 'auto', mt: 4, mb:2 }}
      >
        {achievements.map((item, index) => (
          <React.Fragment key={index}>
            <Grid item xs={12} sm={6} md={3}>
              <AchievementItem number={item.number} suffix={item.suffix} label={item.label} />
            </Grid>

            {/* Divider between cards only for desktop view */}
            {!isMobile && index !== achievements.length - 1 && (
              <Divider orientation="vertical" flexItem sx={{ mx: 1 }} />
            )}
          </React.Fragment>
        ))}
      </Grid>
    </Box>
    </Box>
   
  );
};

export default Achievements;
