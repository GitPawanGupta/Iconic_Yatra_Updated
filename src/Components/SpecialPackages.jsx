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

const packages = [
  {
    image: 'https://www.travserver.com/travelingfuns/uploads/packages/pkg_392/pkg_392_main.png?1751518453969',
    title: 'Mussoorie -Rishikesh- Nainital',
    id: '1',
    dpkg: '1',
  },
  {
    image: 'https://www.travserver.com/travelingfuns/uploads/packages/pkg_117/pkg_117_main.png?1751518453969',
    title: '8N Amazing Nepal',
    id: '2',
    dpkg: '2',
  },
  {
    image: 'https://www.travserver.com/travelingfuns/uploads/packages/pkg_20/pkg_20_main.png?1751518453969',
    title: 'Manali Volvo 3 Nights Tour : Ex Delhi',
    id: '3',
    dpkg: '3',
  },
  {
    image: 'https://www.travserver.com/travelingfuns/uploads/packages/pkg_57/pkg_57_main.jpg?1751518453969',
    title: 'Explore Kerala',
    id: '4',
    dpkg: '4',
  },
  {
    image: 'https://www.travserver.com/travelingfuns/uploads/packages/pkg_117/pkg_117_main.png?1751518453969',
    title: '07 Nights / 08 Days Scenic Kerala',
    id: '5',
    dpkg: '5',
  },
  {
    image: 'https://www.travserver.com/travelingfuns/uploads/packages/pkg_20/pkg_20_main.png?1751518453969',
    title: 'Southern Hills 4N',
    id: '6',
    dpkg: '6',
  },
];

const SpecialPackages = () => {
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

  const Click = (id, dpkg) => {
    if (id && dpkg) {
      navigate(`/package-details?id=${id}&Dpkg=${dpkg}`);
    }
  };

  return (
    <Box sx={{ px: 5, width: '100%', }}>
      <Box sx={{justifyContent: 'center', alignItems: 'center', backgroundPosition: 'center',}}>
       <Box sx={{ mb:1, mt:1 }}>
          <Typography variant="h5" fontWeight="bold">
            SPECIAL <span style={{ color: 'red' }}>PACKAGES</span>
          </Typography>
          <Divider sx={{ borderColor: '#ccc', borderBottomWidth: 5 }} />
        </Box>

        {/* Left Arrow */}
        <IconButton
          onClick={() => scroll('left')}
          sx={{
            position: 'absolute',
            left: 0,
            top: '50%',
            transform: 'translateY(-50%)',
            zIndex: 0,
            backgroundColor: '#fff',
            
          }}
        >
          {/* <ChevronLeft /> */}
        </IconButton>

        <Grid spacing={2} sx={{backgroundPosition: 'center' ,   textAlign: 'center', justifyContent: 'center'}}>
          <Box
            ref={scrollRef}
            sx={{
              display: 'flex',
              gap: 5,
              overflowX: 'auto',
              overflowY: 'hidden',
              scrollBehavior: 'smooth',
              scrollSnapType: 'x mandatory',
              width: '100%',
              '&::-webkit-scrollbar': { display: 'none' },
            }}
          >
            {packages.map((pkg, i) => (
              <Box
                key={i}
                onClick={() => Click(pkg.id, pkg.dpkg)}
                sx={{
                  flex: `0 0 ${cardWidthPercent}%`,
                  height: isMobile ? 180 : isTablet ? 200 : 240,
                  borderRadius: '12px',
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
                {/* Dark Overlay */}
                <Box
                  sx={{
                    position: 'absolute',
                    inset: 0,
                    backgroundColor: 'rgba(0, 0, 0, 0.4)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    px: 2,
                    zIndex: 2,
                  }}
                >
                  <Typography
                    variant={isMobile ? 'body2' : 'body1'}
                    fontWeight="bold"
                    color="#fff"
                    textAlign="center"
                    sx={{ mb: 1 }}
                  >
                    {pkg.title}
                  </Typography>
                  <Button
                    variant="contained"
                    size="small"
                    sx={{
                      textTransform: 'none',
                      fontSize: isMobile ? '0.7rem' : '0.8rem',
                      backgroundColor: '#ff5722',
                      '&:hover': { backgroundColor: '#e64a19' },
                    }}
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
            right: 0,
            top: '50%',
            transform: 'translateY(-50%)',
            zIndex: 10,
            backgroundColor: '#fff',
          }}
        >
          {/* <ChevronRight /> */}
        </IconButton>
      </Box>
    </Box>
    
    
  );
};

export default SpecialPackages;
