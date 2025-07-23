import React, { useRef, useEffect } from 'react';
import {
  Box,
  IconButton,
  Typography,
  Button,
  useMediaQuery,
  Container,
    Divider,
    Grid,
} from '@mui/material';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const packages = [
{
      id: 1,
      title: 'Maldives',
      image: 'https://www.travserver.com/travelingfuns/uploads/packages/pkg_408/pkg_408_main.png?1751611781411',
      class:"img-responsive img-rounded",
      queryLink: 'https://example.com/query/europe'
    },
    {
      id: 2,
      title: 'Europe',
      image: 'https://www.travserver.com/travelingfuns/uploads/packages/pkg_75/pkg_75_main.jpg?1751613238511',
      queryLink: 'https://example.com/query/thailand'
    },
    {
      id: 3,
      title: 'Thailand',
      image: 'https://www.travserver.com/travelingfuns/uploads/packages/pkg_315/pkg_315_main.png?1751613328441',
      queryLink: 'https://example.com/query/singapore'
    },
     {
      id: 4,
      title: 'Singapore',
      image: 'https://www.travserver.com/travelingfuns/uploads/packages/pkg_314/pkg_314_main.png?1751613328441',
      queryLink: 'https://example.com/query/singapore'
    },
    {
      id: 5,
      title: 'Bali',
      image: 'https://www.travserver.com/travelingfuns/uploads/packages/pkg_212/pkg_212_main.png?1751612819850',
      queryLink: 'https://example.com/query/baku'
    },
 {
      id: 6,
      title: 'Dubai',
      image: 'https://www.travserver.com/travelingfuns/uploads/packages/pkg_211/pkg_211_main.png?1751612819850',
      queryLink: 'https://example.com/query/baku'
    },
];

const InternationalPackage = () => {
  const scrollRef = useRef(null);
  const navigate = useNavigate();

  const isMobile = useMediaQuery('(max-width:600px)');
  const isTablet = useMediaQuery('(max-width:900px)');
  const cardsToShow = isMobile ? 1 : isTablet ? 2 : 3;
  const cardWidthPercent = 100 / cardsToShow;

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left:
          direction === 'left'
            ? -scrollRef.current.offsetWidth / cardsToShow
            : scrollRef.current.offsetWidth / cardsToShow,
        behavior: 'smooth',
      });
    }
  };

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

  const handleClick = (id, dpkg) => {
    if (id && dpkg) {
      navigate(`/package-details?id=${id}&Dpkg=${dpkg}`);
    }
  };

  return (
    <Box  sx={{ px: 5, width: '100%', }}>
      <Box sx={{justifyContent: 'center', alignItems: 'center', backgroundPosition: 'center',}}>
      <Box sx={{ mb: 1, mt:1 }}>
         
          {/* Text content */}
         <Typography variant="h5" fontWeight="bold">
            INTERNATIONAL <span style={{ color: 'red' }}>PACKAGES</span>
         </Typography>
            {/* Line under the text */}
          <Divider sx={{ mt: 1, borderColor: '#ccc', borderBottomWidth: 5 }} />
      </Box>

         {/* Left Arrow */}
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
          {/* <ArrowBackIosNewIcon /> */}
        </IconButton>

        {/* Carousel */}
        <Grid spacing={8} sx={{backgroundPosition: 'center' , px: 1,  textAlign: 'center', justifyContent: 'center'}}>
         <Box
          ref={scrollRef}
          sx={{
            display: 'flex',
            gap: 5,
            overflowX: 'auto',
            overflowY: 'hidden',
            scrollBehavior: 'smooth',
            scrollSnapType: 'x mandatory',
            '&::-webkit-scrollbar': { display: 'none' },
          }}
        >
          {packages.map((pkg, i) => (
            <Box
              key={i}
              onClick={() => handleClick(pkg.id, pkg.dpkg)}
              sx={{
                flex: `0 0 ${cardWidthPercent}%`,
                height: isMobile ? 160 : isTablet ? 190 : 240,
                borderRadius: '',
                overflow: 'hidden',
                boxShadow: 3,
                backgroundImage: `url(${pkg.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                cursor: 'pointer',
                scrollSnapAlign: 'center',
                position: 'relative',
              }}
             >
              {/* Inner Border */}
              <Box
                sx={{
                  position: 'absolute',
                  inset: 35,
                  borderRadius: '',
                  border: '5px solid rgba(255, 255, 255, 0.5)',
                  zIndex: 1,
                }}
              />
              {/* Overlay */}
              <Box
                sx={{
                  position: 'absolute',
                  inset: 0,
                  backgroundColor: 'rgba(0, 0, 0, 0.35)',
                  borderRadius: '',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  zIndex: 2,
                  color: '#fff',
                  textAlign: 'center',
                  px: 2,
                }}
              >
                <Typography
                  variant={isMobile ? 'body2' : 'body1'}
                  fontWeight="bold"
                  sx={{ mb: 1 }}
                >
                  {pkg.title}
                </Typography>
                <Button
                  variant="contained"
                  size="small"
                  sx={{ textTransform: 'none', fontSize: isMobile ? '0.7rem' : '0.8rem' }}
                >
                  Send Query
                </Button>
              </Box>
            </Box>
          ))}
        </Box>
        </Grid>
        

        {/* Right Arrow */}
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
          {/* <ArrowForwardIosIcon /> */}
        </IconButton>
      </Box>
    </Box>
    
    
  );
};

export default InternationalPackage;
