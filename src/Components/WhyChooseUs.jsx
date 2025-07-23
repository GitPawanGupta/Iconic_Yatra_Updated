import React from "react";
import {
  Box,
  Grid,
  Typography,
  Paper,
} from "@mui/material";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import { useNavigate } from "react-router-dom";

const features = [
  {
    title: "Safe and Secure Travel",
    description: "Therefore, a safe and secure workplace is paramount for every organization as it is punishable by law if neglected...",
    path: "/safe-and-secure-travel",
  },
  {
    title: "100% Guaranteed Services",
    description: "A travel agency passionate about their work will ensure that you get the most out of your holiday....",
    path: "/guaranteed-services",
  },
  {
    title: "100% Satisfaction ",
    description: "We assure to provide our customer maximum benefits...",
    path: "/satisfaction",
  },
  {
    title: "Reliable & Trusted Travel Agency",
    description: "Hindustan Journey provides travel to various places...",
    path: "/reliable-and-trusted-agency",
  },
];

const WhyChooseUs = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{px:5, width:'100%'}}>
    <Box sx={{ textAlign: "center", mt:2, fontsize: '2.5rem' }}>
      <Typography variant="h2" fontWeight="bold" gutterBottom>
        Why Choose Iconic Yatra?
      </Typography>

      <Grid container spacing={8} justifyContent="center"mt={6}>
        {features.map((item, index) => (
          <Grid item xs={24} sm={12} md={6} key={index}>
            <Box
              onClick={() => navigate(item.path)}
              sx={{
                cursor: "pointer",
                textAlign: 'center',
                "&:hover .circle-card": {
                  transform: "scale(1.1)",
                },
              }}
            >
              {/* Circular Card with Icon */}
              <Paper
                className="circle-card"
                elevation={4}
                sx={{
                  width: 100,
                  height: 100,
                  borderRadius: "50%",
                  bgcolor: "red",
                  color: "#fff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  mx: "auto",
                  transition: "transform 0.3s ease",
                }}
              >
                <AttachMoneyIcon sx={{ fontSize: 40 }} />
              </Paper>

              {/* Title Below Circle */}
              <Typography
                variant="h6"
                fontWeight="bold"
                sx={{ mt: 1 }}
              >
                {item.title}
              </Typography>

              {/* Description Below Title */}
              <Typography
                variant="body2"
                color="textSecondary"
                sx={{ mt: 1, maxWidth: 200, mx: "auto" }}
              >
                {item.description}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
    </Box>
  );
};

export default WhyChooseUs;
