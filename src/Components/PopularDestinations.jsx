import React from 'react'
import { Box, Typography } from '@mui/material'

const PopularDestinations = () => {
  return (
    <Box sx={{ width: '100%' }}>
    <div>
    <Typography variant="h4" sx={{ fontWeight: 'bold', textAlign: 'center' }}>
          Popular <span style={{ color: 'red' }}>Destinations</span>
    </Typography>
    </div>
    </Box>

  )
}

export default PopularDestinations
