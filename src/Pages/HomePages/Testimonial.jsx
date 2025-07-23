import React, { useRef, useEffect } from 'react';
import {
  Box,
  Typography,
  Avatar,
  IconButton,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const testimonials = [
  {
    name: 'Ankit Rajput',
    location: 'Sikkim',
    feedback:
      'The overall plan by iconic travels was good. Very responsive to our queries. Highly recommend!',
    image: 'https://randomuser.me/api/portraits/men/75.jpg',
  },
  {
    name: 'Priya Sharma',
    location: 'Delhi',
    feedback:
      'Amazing experience! Everything was smooth and perfectly managed.',
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
  {
    name: 'Ravi Mehta',
    location: 'Mumbai',
    feedback:
      'Superb service. Our trip to Goa was memorable!',
    image: 'https://randomuser.me/api/portraits/men/56.jpg',
  },
  {
    name: 'Neha Gupta',
    location: 'Lucknow',
    feedback:
      'Hassle-free bookings and excellent support. Highly recommended!',
    image: 'https://randomuser.me/api/portraits/women/65.jpg',
  },
];

const Testimonial = () => {
  const scrollRef = useRef(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));

  const cardsToShow = isMobile ? 1 : isTablet ? 2 : 3;
  const cardWidth = 100 / cardsToShow;

  // Auto-scroll every 3s
  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollRef.current) {
        scrollRef.current.scrollBy({
          left: scrollRef.current.offsetWidth / cardsToShow,
          behavior: 'smooth',
        });
      }
    }, 3000);
    return () => clearInterval(interval);
  }, [cardsToShow]);

  const scroll = (dir) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: dir === 'left'
          ? -scrollRef.current.offsetWidth / cardsToShow
          : scrollRef.current.offsetWidth / cardsToShow,
        behavior: 'smooth',
      });
    }
  };

  return (
    <Box sx={{ px: 5, width: '100%', }}>
      <Box sx={{justifyContent: 'center', alignItems: 'center', backgroundPosition: 'center',}}>
      <Box sx={{ textAlign: 'center', py: 5, px: 2 }}>
      <Typography
        variant="h4"
        fontWeight="bold"
        gutterBottom
        color="#0a0d3e"
        mb={3}
      >
        TESTIMONIALS
      </Typography>

      <Box sx={{ position: 'relative', mx: 'auto', width: '100%' }}>
        {/* Arrow Left */}
        <IconButton
          onClick={() => scroll('left')}
          sx={{
            position: 'absolute',
            top: '50%',
            left: -10,
            transform: 'translateY(-50%)',
            backgroundColor: '#1976d2',
            color: '#fff',
            zIndex: 2,
            display: { xs: 'none', sm: 'flex' },
            '&:hover': { backgroundColor: '#115293' },
          }}
        >
          <ArrowBackIosNewIcon />
        </IconButton>

        {/* Horizontal Scroll Box */}
        <Box
          ref={scrollRef}
          sx={{
            display: 'flex',
            gap: 2,
            overflowX: 'auto',
            scrollSnapType: 'x mandatory',
            scrollBehavior: 'smooth',
            '&::-webkit-scrollbar': { display: 'none' },
            py: 2,
            maxWidth: '100%',
          }}
        >
          {testimonials.map((t, index) => (
            <Box
              key={index}
              sx={{
                flex: `0 0 ${cardWidth}%`,
                scrollSnapAlign: 'center',
                borderRadius: 2,
                boxShadow: 3,
                p: 3,
                mx: 'auto',
                minWidth: 0,
                maxWidth:' 100%',
                width:'75px',
                backgroundPosition: 'center',
                textAlign: 'center',
                justifyContent: 'center',
              }}
            >
              <Avatar
                src={t.image}
                alt={t.name}
                sx={{
                  width: 80,
                  height: 80,
                  mx: 'auto',
                  mb: 1,
                  border: '3px solid #1976d2',
                }}
              />
              <Typography
                variant="h6"
                color="#1976d2"
                mt={1}
                fontWeight="bold"
              >
                {t.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {t.location}
              </Typography>
              <Typography
                variant="body2"
                fontStyle="italic"
                color="text.secondary"
                sx={{ px: 2, mt: 1 }}
              >
                “{t.feedback}”
              </Typography>
            </Box>
          ))}
        </Box>

        {/* Arrow Right */}
        <IconButton
          onClick={() => scroll('right')}
          sx={{
            position: 'absolute',
            top: '50%',
            right: -10,
            transform: 'translateY(-50%)',
            backgroundColor: '#1976d2',
            color: '#fff',
            zIndex: 2,
            display: { xs: 'none', sm: 'flex' },
            '&:hover': { backgroundColor: '#115293' },
          }}
        >
          <ArrowForwardIosIcon />
        </IconButton>
      </Box>
    </Box>
    </Box>
    </Box>
    
  );
};

export default Testimonial;
