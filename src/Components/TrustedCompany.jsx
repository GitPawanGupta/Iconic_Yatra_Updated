import React from 'react';
import { Box, Typography } from '@mui/material';

const TrustedCompany = () => {
  return (
    <Box sx={{ py: 5, width: '100%' }}>
       <Box
      sx={{
        backgroundColor: '#0a0d3e', // dark blue
        color: '#fff',
        borderRadius: '60px',
        p: { xs: 3, sm: 5, md: 5 },
        m: { xs: 2, sm: 4 },
        textAlign: 'center',
      }}
    >
      <Typography
        variant="h4"
        fontWeight="bold"
        gutterBottom
        sx={{ fontFamily: 'inherit' }}
      >
        Most Trusted Travel Agency Company
      </Typography>

      <Typography
        variant="body1"
        sx={{
          textAlign: 'left',
          maxWidth: '1100px',
          margin: 'auto',
          mt: 3,
          lineHeight: 1.2,
        }}
      >
        Iconic U is the most trusted and reliable Software Development Company in
        India. Our years of experience and the best team of experts and
        developers, enables us to offer some of the finest and prime services to
        our clients. The team of experts and developers is highly experienced
        and well certified. Till date, we have catered to a good number of happy
        and satisfied clients, by meeting all their requirements and expectations. <br /><br />
        We provide best suited and custom solutions to our clients as per their
        business models and requirements. The services we offer to our clients
        are custom made, so that we can get the best results possible. We
        provide the best software development services in India. Our team of
        experts and developers is evolving each day with new trends and
        technologies in the market, which allows us to stand out and lead the
        market. <br /><br />

      </Typography>
    </Box>
    </Box>
   
  );
};

export default TrustedCompany;
