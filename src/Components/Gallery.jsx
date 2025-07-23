import React from 'react';
import Slider from 'react-slick';
import { Box, Typography, Container } from '@mui/material';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// ✅ Gallery Images
const galleryImages = [
  'https://www.travserver.com/travelingfuns/uploads/packages/pkg_57/pkg_57_main.jpg?1751518453969',
  'https://www.travserver.com/travelingfuns/uploads/packages/pkg_20/pkg_20_main.png?1751518453969',
  'https://www.travserver.com/travelingfuns/uploads/packages/pkg_117/pkg_117_main.png?1751518453969',
  'https://www.travserver.com/travelingfuns/uploads/packages/pkg_392/pkg_392_main.png?1751518453969',
  'https://www.travserver.com/travelingfuns/uploads/packages/pkg_57/pkg_57_main.jpg?1751518453969',
  'https://www.travserver.com/travelingfuns/uploads/packages/pkg_392/pkg_392_main.png?1751518453969',
];

const Gallery = () => {
  //  Slider Settings
  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: false,
    pauseOnHover: false,
    slidesToShow: 2, // default for all screens
    width: '',

    responsive: [
      {
        breakpoint: 300, // mobile
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 660, // tablet and up
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <Container sx={{ py: 5 }}>
      <Typography
        variant="h4"
        fontWeight="bold"
        textAlign="center"
        color="#0a0d3e"
        mb={4}
      >
        GALLERY
      </Typography>

      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Slider {...settings}>
        {galleryImages.map((img, index) => (
          <Box
            key={index}
            sx={{
              px: 2,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Box
              component="img"
              src={img}
              alt={`Gallery ${index + 1}`}
              sx={{
                width: '',
                height: { xs: 180, sm: 240, md: 260 },
                borderRadius: 2,
                objectFit: 'cover',
                boxShadow: 3,
              }}
            />
          </Box>
        ))}
      </Slider>
      </Box>
    </Container>
  );
};

export default Gallery;
