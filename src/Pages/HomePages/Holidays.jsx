import React, { useState } from 'react';
import {
  Box,
  Grid,
  Typography,
  Breadcrumbs,
  Link,
  Paper,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
  OutlinedInput,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import PackageCard from '../../Components/PackageCard';

const packages = [
  { id: '1', dpkg: '101', title: 'Europe', image: 'https://www.travserver.com/travelingfuns/uploads/packages/pkg_408/pkg_408_main.png?1751611781411' },
  { id: '2', dpkg: '102', title: 'Thailand', image: 'https://www.travserver.com/travelingfuns/uploads/packages/pkg_75/pkg_75_main.jpg?1751613238511' },
  { id: '3', dpkg: '103', title: 'Singapore', image: 'https://www.travserver.com/travelingfuns/uploads/packages/pkg_315/pkg_315_main.png?1751613328441' },
  { id: '4', dpkg: '104', title: 'Singapore', image: 'https://www.travserver.com/travelingfuns/uploads/packages/pkg_314/pkg_314_main.png?1751613328441' },
  { id: '5', dpkg: '105', title: 'Baku', image: 'https://www.travserver.com/travelingfuns/uploads/packages/pkg_212/pkg_212_main.png?1751612819850' },
  { id: '6', dpkg: '106', title: 'Baku', image: 'https://www.travserver.com/travelingfuns/uploads/packages/pkg_211/pkg_211_main.png?1751612819850' },
  { id: '7', dpkg: '107', title: 'LADAKH', image: 'https://www.travserver.com/travelingfuns/uploads/packages/pkg_211/pkg_211_main.png?1751612819850' },
  { id: '8', dpkg: '108', title: 'LADAKH', image: 'https://www.travserver.com/travelingfuns/uploads/packages/pkg_389/pkg_389_main.jpg?1751613511735' },
  { id: '9', dpkg: '109', title: 'Malaysia', image: 'https://www.travserver.com/travelingfuns/uploads/packages/pkg_317/pkg_317_main.png?1751613833268' },
  { id: '10', dpkg: '110', title: 'Malaysia', image: 'https://www.travserver.com/travelingfuns/uploads/packages/pkg_316/pkg_316_main.png?1751613833268' },
  { id: '11', dpkg: '111', title: 'Sri Lanka', image: 'https://www.travserver.com/travelingfuns/uploads/packages/pkg_212/pkg_212_main.png?1751612819850' },
  { id: '12', dpkg: '201', title: 'Maharashtra', image: 'https://www.travserver.com/travelingfuns/uploads/packages/pkg_408/pkg_408_main.png?1751611781411' },
  { id: '13', dpkg: '202', title: 'Nepal', image: 'https://www.travserver.com/travelingfuns/uploads/packages/pkg_75/pkg_75_main.jpg?1751613238511' },
  { id: '14', dpkg: '203', title: 'Uttarakhand', image: 'https://www.travserver.com/travelingfuns/uploads/packages/pkg_315/pkg_315_main.png?1751613328441' },
  { id: '15', dpkg: '204', title: 'Rajasthan', image: 'https://www.travserver.com/travelingfuns/uploads/packages/pkg_314/pkg_314_main.png?1751613328441' },
  { id: '16', dpkg: '205', title: 'Madhya Pradesh', image: 'https://www.travserver.com/travelingfuns/uploads/packages/pkg_212/pkg_212_main.png?1751612819850' },
];

const dropdownOptions = {
  fixed: ['Baku', 'Thailand', 'Singapore', 'Europe', 'Ladakh', 'Malaysia', 'Sri Lanka'],
  safari: ['Maharashtra', 'Nepal', 'Uttarakhand', 'Rajasthan', 'Madhya Pradesh'],
};

const Holidays = () => {
  const navigate = useNavigate();
  const [selectedFixed, setSelectedFixed] = useState('');
  const [selectedSafari, setSelectedSafari] = useState('');

  const handleFixedChange = (event) => {
    setSelectedFixed(event.target.value);
  };

  const handleSafariChange = (event) => {
    setSelectedSafari(event.target.value);
  };

  const filteredPackages = packages.filter((pkg) => {
    const fixedMatch = selectedFixed ? dropdownOptions.fixed.includes(pkg.title) && pkg.title === selectedFixed : false;
    const safariMatch = selectedSafari ? dropdownOptions.safari.includes(pkg.title) && pkg.title === selectedSafari : false;
    if (!selectedFixed && !selectedSafari) return true;
    return fixedMatch || safariMatch;
  });

  const resetFilters = () => {
    setSelectedFixed('');
    setSelectedSafari('');
  };

  return (
    <Box sx={{ p: 3, background: '#eee', minHeight: '100vh' }}>
      <Paper elevation={2} sx={{ mb: 3, p: 2 }}>
        <Grid container justifyContent="space-between" alignItems="center">
          <Grid item>
            <Breadcrumbs>
              <Link underline="hover" color="inherit" onClick={() => navigate('/')}>Home</Link>
              <Link underline="hover" color="inherit" onClick={resetFilters}>Holiday Package</Link>
              {selectedFixed && <Link underline="hover" color="inherit" onClick={() => setSelectedFixed('')}>Fixed Departure</Link>}
              {selectedFixed && <Typography color="text.primary">{selectedFixed}</Typography>}
              {selectedSafari && <Link underline="hover" color="inherit" onClick={() => setSelectedSafari('')}>Tiger Safari</Link>}
              {selectedSafari && <Typography color="text.primary">{selectedSafari}</Typography>}
            </Breadcrumbs>
          </Grid>
          <Grid item>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <FormControl size="small" sx={{ minWidth: 160 }}>
                <InputLabel>Fixed Departure</InputLabel>
                <Select
                  value={selectedFixed}
                  onChange={handleFixedChange}
                  input={<OutlinedInput label="Fixed Departure" />}
                >
                  {dropdownOptions.fixed.map((item, i) => (
                    <MenuItem key={i} value={item}>{item}</MenuItem>
                  ))}
                </Select>
              </FormControl>
              <FormControl size="small" sx={{ minWidth: 160 }}>
                <InputLabel>Tiger Safari</InputLabel>
                <Select
                  value={selectedSafari}
                  onChange={handleSafariChange}
                  input={<OutlinedInput label="Tiger Safari" />}
                >
                  {dropdownOptions.safari.map((item, i) => (
                    <MenuItem key={i} value={item}>{item}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>
          </Grid>
        </Grid>
      </Paper>

      <Grid container spacing={2} sx={{ justifyContent: 'center', textAlign: 'center' }}>
        {filteredPackages.map((pkg, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <PackageCard title={pkg.title} image={pkg.image} id={pkg.id} dpkg={pkg.dpkg} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Holidays;
