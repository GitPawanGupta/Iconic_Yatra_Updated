import React from 'react';
import {
  Box,
  Typography,
  Grid,
  Breadcrumbs,
  Link,
  Paper
} from '@mui/material';

const PaymentOption = () => {
  return (
    <Box sx={{ backgroundColor: '#eee', minHeight: '100vh', p: 3 }}>
      {/* Breadcrumb */}
      <Paper elevation={2} sx={{ p: 2, mb: 3 }}>
        <Breadcrumbs>
          <Link underline="hover" color="inherit" href="/">
            Home
          </Link>
          <Typography color="text.primary">Payment Option</Typography>
        </Breadcrumbs>
      </Paper>

      <Grid container spacing={4}>
        {/* LEFT SIDE - TEXT DETAILS */}
        <Grid item xs={12} md={8} sx={{ml:18}}>
          {/* Heading */}
          <Typography variant="h6" sx={{ mb: 2 }}>
            PAYMENT <span style={{ color: 'red' }}>OPTION</span>
          </Typography>

          {/* NET BANKING Section */}
          <Typography sx={{ fontWeight: 'bold', color: 'red', mt: 2 }}>
            NET BANKING PAYMENT DETAILS:-
          </Typography>
          <Typography sx={{ mt: 1 }}>
            For More Details Kindly click and Pay at this Link - <br />
            <strong>NET BANKING PAYMENT DETAILS:-</strong>
          </Typography>

          {/* YES BANK DETAILS */}
          <Box sx={{ mt: 2 }}>
            <Typography sx={{ fontWeight: 'bold', color: 'red' }}>YES BANK DETAILS:</Typography>
            <Typography><strong>Account Name:</strong> ICONIC YATRA</Typography>
            <Typography><strong>Bank Name:</strong> YES Bank</Typography>
            <Typography><strong>Account Number:</strong> 001463400002757</Typography>
            <Typography><strong>IFSC Code:</strong> YESB0000014</Typography>
            <Typography><strong>Address:</strong> Block H1 A Sec 63, Noida UP 201301</Typography>
          </Box>

          {/* KOTAK BANK DETAILS */}
          <Box sx={{ mt: 4 }}>
            <Typography sx={{ fontWeight: 'bold', color: 'red' }}>KOTAK BANK DETAILS:</Typography>
            <Typography><strong>Account Name:</strong> ICONIC YATRA</Typography>
            <Typography><strong>Bank Name:</strong> KOTAK MAHINDRA BANK</Typography>
            <Typography><strong>Account Number:</strong> 7147083682</Typography>
            <Typography><strong>IFSC Code:</strong> KKBK0005033</Typography>
            <Typography><strong>Address:</strong> SEC 18, NOIDA UP, 201301</Typography>
          </Box>

          {/* Credit Card Info */}
          <Box sx={{ mt: 4 }}>
            <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
              NOTE:
            </Typography>
            <Typography variant="body2" sx={{ mt: 1 }}>
              All cards are accepted here. Now you can pay through Credit/Debit Cards (3% extra) for more details and contact your Tour Expert.
            </Typography>
            <Typography variant="body2">
              For Credit/Debit Card Payment Use this Link Below -{' '}
              <Link href="https://rzp.io/l/Gn0nwLEnCL" target="_blank" rel="noopener noreferrer">
                https://rzp.io/l/Gn0nwLEnCL
              </Link>
            </Typography>
          </Box>

          {/* Instructions */}
          <Box sx={{ mt: 4 }}>
            <Typography variant="body2">
              1. <strong>Local / at par AC Payee Cheque</strong> is to be drawn in the name of <strong>Iconic Yatra</strong>.
            </Typography>
            <Typography variant="body2">
              2. <strong>Cash payments</strong> at our office during office hours, please collect due receipts against the same.
            </Typography>
            <Typography variant="body2">
              3. Booking shall be subject to <span style={{ color: 'red' }}>NEFT / RTGS</span> fund transfers to our bank Account as mentioned below. Cheque clearance within 3 working days.
            </Typography>
          </Box>
        </Grid>

        {/* RIGHT SIDE - QR IMAGES */}
        <Grid item xs={12} md={4}>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
            <img
              src="https://www.iconicyatra.com/assets/images/QR1.png"
              alt="PhonePe QR"
              style={{ maxWidth: 250, width: '100%' }}
            />
            <img
              src="https://www.iconicyatra.com/assets/images/QR2.png"
              alt="GPay QR"
              style={{ maxWidth: 250, width: '100%' }}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default PaymentOption;
