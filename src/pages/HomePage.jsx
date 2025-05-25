import React from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
} from "@mui/material";
import Navbar from "./components/Navbar"; // adjust the path as needed
import ChatIcon from "@mui/icons-material/Chat";
import MoodIcon from "@mui/icons-material/Mood";
import HistoryIcon from "@mui/icons-material/History";
import { Link } from "react-router-dom";
import calmIllustration from "../assets/calmari-hero-1.png";

const FeatureCard = ({ icon, title, desc }) => (
  <Grid item xs={12} sm={6} md={4}>
    <Card
      elevation={3}
      sx={{
        borderRadius: 4,
        backgroundColor: "#d6f5f0",
        textAlign: "center",
        px: 2,
        py: 4,
      }}
    >
      <CardContent>
        <Box sx={{ fontSize: 50, color: "#00b3a6", mb: 2 }}>{icon}</Box>
        <Typography variant="h6" fontWeight="bold" gutterBottom>
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {desc}
        </Typography>
      </CardContent>
    </Card>
  </Grid>
);

const HomePage = () => {
  return (
    <Box sx={{ bgcolor: "#f0faf9", color: "#103c3f", fontFamily: "Arial, sans-serif" }}>
      <Navbar />
      {/* Hero Section */}
      <Box component="header" sx={{ py: 10, bgcolor: "#d6f5f0" }}>
        <Container maxWidth="lg">
          <Grid
            container
            spacing={4}
            alignItems="center"
            justifyContent="center"
            sx={{ 
              display: 'flex',
              flexDirection: 'row',
              minHeight: { md: "500px", xs: "auto" },
            }}
          >
            <Grid
              item
              xs={12}
              md={6}
              sx={{ 
                display: 'flex', 
                flexDirection: 'column', 
                justifyContent: 'center',
                textAlign: { xs: 'center', md: 'left' },
                maxWidth: 500,
              }}
            >
              <Typography variant="h2" fontWeight="bold" gutterBottom>
                Find Your <span style={{ color: "#00b3a6" }}>Calm</span>
              </Typography>
              <Typography variant="h6" gutterBottom>
                Your Peace Matters
              </Typography>
              <Typography variant="body1" sx={{ mt: 2 }}>
                Calmari, an AI-powered therapy web and mobile app designed to provide
                culturally relevant mental health support to Black Africans.
              </Typography>
              <Button
                variant="contained"
                size="large"
                sx={{
                  mt: 3,
                  bgcolor: "#00b3a6",
                  ":hover": { bgcolor: "#009e92", transform: "scale(1.05)" },
                  transition: "all 0.3s ease",
                  alignSelf: { xs: 'center', md: 'flex-start' },
                }}
                component={Link}
                to="/chat"
              >
                Get Started
              </Button>
            </Grid>

            <Grid
              item
              xs={12}
              md={6}
              sx={{ 
                display: 'flex', 
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Box
                component="img"
                src={calmIllustration}
                alt="Woman meditating in calm environment"
                sx={{ 
                  width: "100%", 
                  maxWidth: 400,
                  height: 'auto',
                }}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Features Section */}
      <Container sx={{ py: 8 }}>
        <Typography variant="h4" align="center" fontWeight="bold" gutterBottom>
          Features
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          <FeatureCard
            icon={<ChatIcon />}
            title="AI Therapy Chatbot"
            desc="Receive support via our intelligent chatbot"
          />
          <FeatureCard
            icon={<MoodIcon />}
            title="Daily Mood Tracker"
            desc="Log your emotions and track your progress"
          />
          <FeatureCard
            icon={<HistoryIcon />}
            title="Session History"
            desc="Reflect on past conversations and growth"
          />
        </Grid>
      </Container>

      {/* Testimonials Section */}
      <Box sx={{ py: 8, bgcolor: "#ffffff", textAlign: "center" }}>
        <Container>
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            Testimonials
          </Typography>
          <Typography
            variant="subtitle1"
            fontStyle="italic"
            mb={2}
            maxWidth={600}
            mx="auto"
          >
            "Calmari has been a game-changer for my mental well-being."
          </Typography>
          <Typography variant="body1">— Angela F.</Typography>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box
        component="footer"
        sx={{
          py: 8,
          bgcolor: "#103c3f",
          color: "#fff",
          textAlign: "center",
        }}
      >
        <Container>
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            Ready to Begin Your Calm Journey?
          </Typography>
          <Button
            variant="contained"
            size="large"
            sx={{
              mt: 2,
              bgcolor: "#ffffff",
              color: "#103c3f",
              ":hover": { bgcolor: "#e0f7f4" },
              transition: "all 0.3s ease",
            }}
            component={Link}
            to="/register"
          >
            Get Started
          </Button>
        </Container>
      </Box>
    </Box>
  );
};

export default HomePage;
