import React from 'react';
import {
  Typography,
  Grid,
  Box,
  Divider,
  Button,
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import PackageCard from '../../Components/PackageCard'

// Package data
const packages = [
 { id: '11', dpkg: '1001', title: 'Europe1', image: 'https://www.travserver.com/travelingfuns/uploads/packages/pkg_408/pkg_408_main.png?1751611781411' },
  { id: '22', dpkg: '1002', title: 'Thailand1', image: 'https://www.travserver.com/travelingfuns/uploads/packages/pkg_75/pkg_75_main.jpg?1751613238511' },
  { id: '33', dpkg: '1003', title: 'Singapore1', image: 'https://www.travserver.com/travelingfuns/uploads/packages/pkg_315/pkg_315_main.png?1751613328441' },
  { id: '44', dpkg: '1004', title: 'Singapore1', image: 'https://www.travserver.com/travelingfuns/uploads/packages/pkg_314/pkg_314_main.png?1751613328441' },
  { id: '55', dpkg: '1005', title: 'Baku1', image: 'https://www.travserver.com/travelingfuns/uploads/packages/pkg_212/pkg_212_main.png?1751612819850' },
  { id: '66', dpkg: '1006', title: 'Baku1', image: 'https://www.travserver.com/travelingfuns/uploads/packages/pkg_211/pkg_211_main.png?1751612819850' },
  { id: '77', dpkg: '1007', title: 'LADAKH1', image: 'https://www.travserver.com/travelingfuns/uploads/packages/pkg_211/pkg_211_main.png?1751612819850' },
  { id: '88', dpkg: '1008', title: 'LADAKH1', image: 'https://www.travserver.com/travelingfuns/uploads/packages/pkg_389/pkg_389_main.jpg?1751613511735' },
  { id: '99', dpkg: '1009', title: 'Malaysia1', image: 'https://www.travserver.com/travelingfuns/uploads/packages/pkg_317/pkg_317_main.png?1751613833268' },
  { id: '100', dpkg: '1010', title: 'Malaysia1', image: 'https://www.travserver.com/travelingfuns/uploads/packages/pkg_316/pkg_316_main.png?1751613833268' },
  { id: '111', dpkg: '1011', title: 'Sri Lanka1', image: 'https://www.travserver.com/travelingfuns/uploads/packages/pkg_212/pkg_212_main.png?1751612819850' },
  { id: '122', dpkg: '2001', title: 'Maharashtra1', image: 'https://www.travserver.com/travelingfuns/uploads/packages/pkg_408/pkg_408_main.png?1751611781411' },
  { id: '133', dpkg: '2002', title: 'Nepal1', image: 'https://www.travserver.com/travelingfuns/uploads/packages/pkg_75/pkg_75_main.jpg?1751613238511' },
  { id: '144', dpkg: '2003', title: 'Uttarakhand1', image: 'https://www.travserver.com/travelingfuns/uploads/packages/pkg_315/pkg_315_main.png?1751613328441' },
  { id: '155', dpkg: '2004', title: 'Rajasthan1', image: 'https://www.travserver.com/travelingfuns/uploads/packages/pkg_314/pkg_314_main.png?1751613328441' },
  { id: '166', dpkg: '2005', title: 'Madhya Pradesh1', image: 'https://www.travserver.com/travelingfuns/uploads/packages/pkg_212/pkg_212_main.png?1751612819850' }
];

const Yatra = () => {
  return (
    <Box sx={{ px: 2, width: '100%', }}>
      {/* Title */}
      <Box sx={{ mb: 3 }}>
        <Typography variant="h6" fontWeight="bold">
          ICONIC <span style={{ color: 'red' }}>PACKAGES</span>
        </Typography>
        <Divider sx={{ mt: 1, borderColor: '#ccc', borderBottomWidth: 5 }} />
      </Box>

      {/* Cards Grid */}
      <Grid container spacing={3} sx={{backgroundPosition: 'center' , px: 1,  textAlign: 'center', justifyContent: 'center'}}>
        {packages.map((pkg, index) => (
          <Grid
            item
            xs={12}       // 1 column on mobile
            sm={6}        // 2 columns on tablet
            md={3}        // 4 columns on desktop
            key={index}
            sx={{
              display: 'flex',
              backgroundPosition:'center',justifyContent:'center'
            }}
          >
            <Box sx={{ width: '100%', maxWidth: 320 }}>
              <PackageCard {...pkg} />
            </Box>
          </Grid>
        ))}
      </Grid>

      {/* "Click More" Button */}
      <Box
        sx={{
          mt: 4,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Button
          component={RouterLink}
          to="/"
          variant="contained"
          sx={{
            width: { xs: '100%', sm: 300 },
            backgroundColor: '#4caf50',
            color: '#fff',
            fontWeight: 'bold',
            textTransform: 'none',
            '&:hover': { backgroundColor: '#43a047' },
          }}
        >
          Click More
        </Button>
      </Box>
    </Box>
  );
};

export default Yatra;
