import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import PackageCard from '../../Components/PackageCard';

import {
  Typography,
  Box,
  IconButton,
  Paper,
} from '@mui/material';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';
import FeaturedPackages from '../../Components/FeaturedPackages';
import WhyChooseUs from '../../Components/WhyChooseUs';
//import HolidayCarousel from '../../Components/SpecialPackages';
import DomesticPackage from '../../Components/DomesticPackage';
import PopularDestinations from '../../Components/PopularDestinations';
//import SpecialPackages from '../../Components/SpecialPackages';
import InternationalPackage from '../../Components/InternationalPackage';
import TrustedCompany from '../../Components/TrustedCompany';
import Achievements from '../../Components/Achievements';
import SpecialPackages from '../../Components/SpecialPackages';
//import SpecialPackages from '../../Components/SpecialPackages';
import HolidaysPackages from '../../Components/HolidaysPackages';
import Testimonial from './Testimonial';
import Gallery from '../../Components/Gallery';

const Home = () => {
  
 

  return (
    <Box sx={{ width: '100%' }}>
      {/* Bootstrap Carousel */}
      <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel" sx={{ position: 'relative', width: '100%' }}>
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>

        <Box className="carousel-inner" sx={{width:'100%',}} >
          <div className="carousel-item active position-relative"  >

            
            <img
            src="https://www.travserver.com/iconicyatra/uploads/packages/websitebanner/webpack_company/banner_10.jpg?1751479441893"
            className="d-block w-100"
            alt="Slide 1"
           style={{
           objectFit: 'cover',
           objectPosition: 'center',
            width: '100%',
           height: '100%', // or fixed like '400px'
           display: 'block',
  }}
/>


            
            <div className="carousel-caption d-none d-md-block">
             <Paper elevation={24} sx={{ p: 2, borderRadius: 3, backgroundColor: 'transparent', backdropFilter: 'blur(2px)' }}>
                 <Typography variant="h4"
                    sx={{ textShadow: '4px 4px 8px rgba(0,0,0,0.25)', fontWeight: 600, color: 'white' }}
                  >
                    Summer Special
                 </Typography>
                 <Typography variant="h5" sx={{ textShadow: '2px 2px 4px rgba(0,0,0,0.25)', color: 'white' }}>
                  4 Nights / 5 Days
                 </Typography>
              <a href="https://www.iconicyatra.com/package/packagelist.html?SectorId=5&PkgType=Theme" className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                Book Now
              </a>
             </Paper>
            </div>
          </div>

          <div className="carousel-item position-relative">
            <img
              src="https://www.travserver.com/iconicyatra/uploads/packages/websitebanner/webpack_company/banner_9.jpg?1751479545367"
              className="d-block w-100"
              alt="Slide 2"
              backgroundposition="center"
              width="100vw"
            />
            <div className="carousel-caption d-none d-md-block">
              <Paper elevation={24} sx={{ p: 2, borderRadius: 3, backgroundColor: 'transparent', backdropFilter: 'blur(2px)' }}>
                 <Typography variant="h4"
                    sx={{ textShadow: '4px 4px 8px rgba(0,0,0,0.25)', fontWeight: 600, color: 'white' }}
                  >
                    Honeymoon Special
                 </Typography>
                 <Typography variant="h5" sx={{ textShadow: '2px 2px 4px rgba(0,0,0,0.25)', color: 'white' }}>
                  3 Nights / 4 Days
                 </Typography>
              <a href="https://example.com/honeymoon" className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                Book Now
              </a>
             </Paper>
            </div>
          </div>

          <div className="carousel-item position-relative">
            <img
              src="https://www.travserver.com/iconicyatra/uploads/packages/websitebanner/webpack_company/banner_7.jpg?1751479545367"
              className="d-block w-100"
              alt="Slide 3"
              backgroundposition="center"
            />
            <div className="carousel-caption d-none d-md-block">
              <Paper elevation={24} sx={{ p: 2, borderRadius: 3, backgroundColor: 'transparent', backdropFilter: 'blur(2px)' }}>
                 <Typography variant="h4"
                    sx={{ textShadow: '4px 4px 8px rgba(0,0,0,0.25)', fontWeight: 600,color: 'white' }}
                  >
                    Jungle Safari
                 </Typography>
                 <Typography variant="h5" sx={{ textShadow: '2px 2px 4px rgba(0,0,0,0.25)',color: 'white' }}>
                  2 Nights / 3 Days
                 </Typography>
              <a href="https://example.com/honeymoon" className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                Book Now
              </a>
             </Paper>
            </div>
          </div>
        </Box>

        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* Package Cards */}
      
      {/* <SpecialPackages/> */}
      <WhyChooseUs />
      <TrustedCompany/>
      <PopularDestinations/>
      <DomesticPackage/>
      <InternationalPackage />
      <FeaturedPackages />
      <HolidaysPackages/>
      <SpecialPackages />
      <Testimonial/>
      {/* <Gallery/> */}
      <Achievements/>
      
    </Box>
  );
};

export default Home;
